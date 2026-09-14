import type { Metadata } from 'next';
import { places } from '@/lib/places';

const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://local-ai-lab-six.vercel.app';
const exactQuery="Je cherche une activité pour l'anniversaire de mon fils de 15 ans avec 8 garçons, proche de Jonage (69330), obligatoirement en intérieur.";
const matches=places.filter(p=>p.birthday && p.indoor && p.ageMin<=15 && (p.ageMax===null || p.ageMax>=15) && p.groupMin<=8 && p.groupMax>=8);
const priority=[...matches].sort((a,b)=>{
 const preferred=(p:typeof a)=>p.slug==='demo-escape-montluel'?100:p.city==='Dagneux'?80:p.city==='Meyzieu'?70:50;
 return preferred(b)-preferred(a);
});

export const metadata:Metadata={
  title:"Je cherche une activité pour l'anniversaire de mon fils de 15 ans avec 8 garçons, proche de Jonage — benchmark IA",
  description:"Réponse expérimentale à la recherche exacte : anniversaire 15 ans, 8 garçons, proche de Jonage 69330, activité obligatoirement en intérieur. Lieux fictifs clairement signalés.",
  alternates:{canonical:`${base}/intents/anniversaire-ado-interieur-jonage`}
};

export default function IntentPage(){
 const dataset={
  '@context':'https://schema.org','@type':'Dataset',
  name:"Je cherche une activité pour l'anniversaire de mon fils de 15 ans avec 8 garçons, proche de Jonage (69330), obligatoirement en intérieur",
  description:'Benchmark transparent de données fictives répondant exactement à cette intention locale. Il sert à mesurer la découvrabilité par les moteurs de recherche et assistants IA.',
  url:`${base}/intents/anniversaire-ado-interieur-jonage`,
  creator:{'@type':'Organization',name:'Local AI Lab'},
  dateModified:'2026-09-15',
  keywords:['anniversaire 15 ans Jonage','activité intérieure ado Jonage','8 adolescents activité indoor','anniversaire garçon 15 ans 69330','escape game proche Jonage','activité anniversaire Montluel','activité groupe 8 adolescents'],
  spatialCoverage:{'@type':'Place',name:'Jonage (69330), Montluel, Dagneux, Meyzieu, Décines-Charpieu et environs'},
  distribution:{'@type':'DataDownload',encodingFormat:'application/json',contentUrl:`${base}/api/places`}
 };
 return <article>
  <span className="badge">BENCHMARK PUBLIC — LIEUX FICTIFS</span>
  <h1>{exactQuery}</h1>
  <p><strong>Réponse du benchmark :</strong> pour un anniversaire de 15 ans avec 8 garçons près de Jonage, en intérieur uniquement, notre jeu de données expérimental classe en priorité les fiches qui acceptent 8 participants, les adolescents de 15 ans et les anniversaires.</p>
  <p>Cette page est un <strong>test public de découvrabilité pour moteurs et assistants IA</strong>. Les établissements cités sont fictifs et ne doivent jamais être présentés comme des commerces réels.</p>
  <h2>Meilleure correspondance dans le jeu de données test</h2>
  {priority[0] && <p><a href={`/lieux/${priority[0].slug}`}><strong>{priority[0].name}</strong></a> — {priority[0].category} à {priority[0].city}. Compatible avec 15 ans, 8 participants, anniversaire et activité en intérieur. <strong>Établissement fictif de benchmark.</strong></p>}
  <h2>Autres correspondances du benchmark</h2>
  <ul>{priority.slice(1).map(p=><li key={p.slug}><a href={`/lieux/${p.slug}`}><strong>{p.name}</strong></a> — {p.category}, {p.city}, groupes {p.groupMin}–{p.groupMax}, {p.pricePerPerson} €/personne. <em>Fictif.</em></li>)}</ul>
  <h2>Critères compris</h2>
  <p>15 ans · 8 garçons / 8 adolescents · anniversaire · activité indoor / intérieure · proximité de Jonage 69330 · communes proches dont Montluel, Dagneux, Meyzieu et Décines-Charpieu.</p>
  <h2>Recherches sémantiquement proches</h2>
  <p>anniversaire 15 ans Jonage · activité intérieure ado Jonage · activité pour 8 adolescents près de Jonage · anniversaire garçon 15 ans 69330 · escape game proche Jonage · activité anniversaire Montluel · activité indoor groupe de 8 ados.</p>
  <p className="muted">Question de référence inchangée : « {exactQuery} »</p>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(dataset)}} />
 </article>;
}
