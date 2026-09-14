import { getPlace, places } from '@/lib/places';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams(){ return places.map(p => ({slug:p.slug})); }

export async function generateMetadata({ params }:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const p=getPlace(slug); if(!p) return {};
  return {title:`${p.name} — ${p.category} à ${p.city}`,description:`${p.description} Âge ${p.ageMin}${p.ageMax?`–${p.ageMax}`:'+'} ans, groupes ${p.groupMin}–${p.groupMax}, ${p.pricePerPerson} €/pers.`};
}

export default async function PlacePage({ params }:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=getPlace(slug); if(!p) notFound();
  const schema={
    '@context':'https://schema.org','@type':'LocalBusiness',name:p.name,description:p.description,
    address:{'@type':'PostalAddress',addressLocality:p.city,postalCode:p.postalCode,addressCountry:'FR'},
    geo:{'@type':'GeoCoordinates',latitude:p.latitude,longitude:p.longitude},
    priceRange:`${p.pricePerPerson} € par personne`,
    additionalProperty:[
      {'@type':'PropertyValue',name:'Âge minimum',value:p.ageMin},
      {'@type':'PropertyValue',name:'Âge maximum',value:p.ageMax ?? 'sans maximum'},
      {'@type':'PropertyValue',name:'Groupe minimum',value:p.groupMin},
      {'@type':'PropertyValue',name:'Groupe maximum',value:p.groupMax},
      {'@type':'PropertyValue',name:'Anniversaire',value:p.birthday},
      {'@type':'PropertyValue',name:'Intérieur',value:p.indoor},
      {'@type':'PropertyValue',name:'Extérieur',value:p.outdoor}
    ]
  };
  return <article>
    <span className="badge">FICHE DE DÉMONSTRATION — NON RÉELLE</span>
    <h1>{p.name}</h1><p>{p.description}</p>
    <section className="facts">
      <div className="fact"><strong>Activité</strong><br/>{p.category}</div>
      <div className="fact"><strong>Ville</strong><br/>{p.city} {p.postalCode}</div>
      <div className="fact"><strong>Âges</strong><br/>{p.ageMin}{p.ageMax?` à ${p.ageMax}`:' ans et +'}</div>
      <div className="fact"><strong>Groupe</strong><br/>{p.groupMin} à {p.groupMax} personnes</div>
      <div className="fact"><strong>Prix indicatif</strong><br/>{p.pricePerPerson} €/personne</div>
      <div className="fact"><strong>Cadre</strong><br/>{p.indoor?'Intérieur ':''}{p.outdoor?'Extérieur':''}</div>
    </section>
    <h2>Intentions utilisateur associées</h2><div className="chips">{p.intents.map(i=><span className="chip" key={i}>{i}</span>)}</div>
    <h2>Résumé machine</h2><pre className="machine">{JSON.stringify({slug:p.slug,category:p.category,location:{city:p.city,lat:p.latitude,lng:p.longitude},audience:{age_min:p.ageMin,age_max:p.ageMax},group:{min:p.groupMin,max:p.groupMax},price_per_person_eur:p.pricePerPerson,indoor:p.indoor,outdoor:p.outdoor,birthday:p.birthday,intents:p.intents,source:'demo',verified_at:p.verifiedAt},null,2)}</pre>
    <p className="muted">API JSON : /api/places/{p.slug}</p>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </article>;
}
