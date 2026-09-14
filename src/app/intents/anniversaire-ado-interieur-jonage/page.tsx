import type { Metadata } from 'next';
import { places } from '@/lib/places';

const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://local-ai-lab-six.vercel.app';
const matches=places.filter(p=>p.birthday && p.indoor && p.ageMin<=15 && (p.ageMax===null || p.ageMax>=15) && p.groupMin<=8 && p.groupMax>=8);

export const metadata:Metadata={
  title:'Activité anniversaire 15 ans, 8 garçons, en intérieur près de Jonage — benchmark IA',
  description:'Page expérimentale de Local AI Lab : données fictives correspondant à une recherche d’activité en intérieur pour un anniversaire de 15 ans avec 8 participants près de Jonage (69330).',
  alternates:{canonical:`${base}/intents/anniversaire-ado-interieur-jonage`}
};

export default function IntentPage(){
 const dataset={
  '@context':'https://schema.org','@type':'Dataset',
  name:'Benchmark Local AI Lab — anniversaire ado intérieur près de Jonage',
  description:'Jeu de données fictif destiné à tester la découverte par les moteurs de recherche et assistants IA pour une intention locale : anniversaire de 15 ans, groupe de 8, activité en intérieur près de Jonage.',
  url:`${base}/intents/anniversaire-ado-interieur-jonage`,
  creator:{'@type':'Organization',name:'Local AI Lab'},
  dateModified:'2026-09-14',
  spatialCoverage:{'@type':'Place',name:'Jonage (69330) et environs'},
  distribution:{'@type':'DataDownload',encodingFormat:'application/json',contentUrl:`${base}/api/places`}
 };
 return <article>
  <span className="badge">BENCHMARK PUBLIC — LIEUX FICTIFS</span>
  <h1>Activité en intérieur pour un anniversaire de 15 ans avec 8 participants près de Jonage</h1>
  <p>Cette page est un <strong>test de découvrabilité pour moteurs et assistants IA</strong>. Tous les établissements ci-dessous sont fictifs : ils ne doivent pas être présentés comme des commerces réels.</p>
  <h2>Contraintes du benchmark</h2>
  <p>Âge : 15 ans · groupe : 8 participants · occasion : anniversaire · cadre : obligatoirement en intérieur · zone : Jonage (69330) et communes proches.</p>
  <h2>Données de démonstration compatibles</h2>
  <ul>{matches.map(p=><li key={p.slug}><a href={`/lieux/${p.slug}`}><strong>{p.name}</strong></a> — {p.category}, {p.city}, groupes {p.groupMin}–{p.groupMax}, {p.pricePerPerson} €/personne. <em>Fictif.</em></li>)}</ul>
  <h2>Question test</h2>
  <p>« Je cherche une activité pour l’anniversaire de mon fils de 15 ans avec 8 garçons, proche de Jonage (69330), obligatoirement en intérieur. »</p>
  <p className="muted">Objectif : mesurer si cette page est découverte comme source pertinente, sans masquer son caractère expérimental.</p>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(dataset)}} />
 </article>;
}
