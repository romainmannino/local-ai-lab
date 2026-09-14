import { places } from '@/lib/places';

export default function Home() {
  return <>
    <section className="hero">
      <span className="badge">EXPÉRIENCE PUBLIQUE — DONNÉES DE DÉMONSTRATION</span>
      <h1>Une petite base locale conçue pour être comprise par les IA.</h1>
      <p className="muted">10 lieux fictifs, une structure riche, des intentions explicites et des endpoints publics. Objectif : mesurer si les moteurs et assistants IA découvrent mieux ces données qu’un annuaire classique.</p>
      <div className="notice"><strong>Important :</strong> aucun établissement présenté ici n’est réel. Les fiches sont volontairement fictives et servent uniquement à un test d’indexation et de compréhension machine.</div>
    </section>
    <h2>Les 10 fiches test</h2>
    <div className="grid">{places.map(p => <a className="card" href={`/lieux/${p.slug}`} key={p.slug}><strong>{p.name}</strong><p>{p.category} · {p.city}</p><p className="muted">{p.ageMin}+ ans · {p.groupMin}–{p.groupMax} pers. · {p.pricePerPerson} €/pers.</p></a>)}</div>
  </>;
}
