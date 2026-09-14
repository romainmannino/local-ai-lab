import { getPlace, places } from '@/lib/places';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://local-ai-lab-six.vercel.app';

export function generateStaticParams(){ return places.map(p => ({slug:p.slug})); }

export async function generateMetadata({ params }:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const p=getPlace(slug); if(!p) return {};
  const age=`${p.ageMin}${p.ageMax?`–${p.ageMax}`:'+'} ans`;
  return {
    title:`${p.category} ${p.city} pour anniversaire et groupe — ${p.name}`,
    description:`Donnée de démonstration : ${p.category} à ${p.city}, ${age}, groupes ${p.groupMin}–${p.groupMax}, ${p.indoor?'en intérieur':'en extérieur'}, ${p.pricePerPerson} €/pers. Établissement fictif pour recherche IA.`,
    alternates:{canonical:`${base}/lieux/${p.slug}`}
  };
}

export default async function PlacePage({ params }:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=getPlace(slug); if(!p) notFound();
  const url=`${base}/lieux/${p.slug}`;
  const schema={
    '@context':'https://schema.org','@type':'LocalBusiness','@id':`${url}#demo-business`,url,
    name:p.name,description:`${p.description} Établissement fictif publié uniquement comme donnée de démonstration.`,
    address:{'@type':'PostalAddress',addressLocality:p.city,postalCode:p.postalCode,addressCountry:'FR'},
    geo:{'@type':'GeoCoordinates',latitude:p.latitude,longitude:p.longitude},
    priceRange:`${p.pricePerPerson} € par personne`,
    additionalProperty:[
      {'@type':'PropertyValue',name:'Statut',value:'Démonstration — établissement fictif'},
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
    <span className="badge">FICHE DE DÉMONSTRATION — ÉTABLISSEMENT FICTIF</span>
    <h1>{p.name}</h1>
    <p><strong>{p.category} à {p.city} pour groupes et anniversaires — donnée de test.</strong> {p.description}</p>
    <section className="facts">
      <div className="fact"><strong>Activité</strong><br/>{p.category}</div>
      <div className="fact"><strong>Ville</strong><br/>{p.city} {p.postalCode}</div>
      <div className="fact"><strong>Âges</strong><br/>{p.ageMin}{p.ageMax?` à ${p.ageMax}`:' ans et +'}</div>
      <div className="fact"><strong>Groupe</strong><br/>{p.groupMin} à {p.groupMax} personnes</div>
      <div className="fact"><strong>Prix indicatif</strong><br/>{p.pricePerPerson} €/personne</div>
      <div className="fact"><strong>Cadre</strong><br/>{p.indoor?'Intérieur ':''}{p.outdoor?'Extérieur':''}</div>
    </section>
    <h2>Pour quelles recherches cette donnée est-elle pertinente ?</h2>
    <p>Cette fiche expérimentale décrit une option {p.indoor?'en intérieur':'en extérieur'} pour un anniversaire ou une sortie de groupe, notamment pour {p.intents.join(', ')}. Elle sert à mesurer si un moteur comprend les contraintes d’âge, de taille de groupe, de lieu et de type d’activité.</p>
    <div className="chips">{p.intents.map(i=><span className="chip" key={i}>{i}</span>)}</div>
    <h2>Résumé machine</h2><pre className="machine">{JSON.stringify({slug:p.slug,name:p.name,category:p.category,location:{city:p.city,postal_code:p.postalCode,lat:p.latitude,lng:p.longitude},audience:{age_min:p.ageMin,age_max:p.ageMax},group:{min:p.groupMin,max:p.groupMax},price_per_person_eur:p.pricePerPerson,indoor:p.indoor,outdoor:p.outdoor,birthday:p.birthday,intents:p.intents,is_demo:true,is_real_business:false,source:'local-ai-lab-demo',verified_at:p.verifiedAt,canonical_url:url},null,2)}</pre>
    <p className="muted">Important : ce lieu n’existe pas. API JSON : /api/places/{p.slug}</p>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </article>;
}
