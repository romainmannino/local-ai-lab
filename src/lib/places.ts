export type Place = {
  slug: string;
  name: string;
  city: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  category: string;
  description: string;
  ageMin: number;
  ageMax: number | null;
  groupMin: number;
  groupMax: number;
  pricePerPerson: number;
  indoor: boolean;
  outdoor: boolean;
  birthday: boolean;
  reservationRequired: boolean;
  intents: string[];
  sourceType: 'demo';
  verifiedAt: string;
};

export const places: Place[] = [
  {
    slug: 'demo-paintball-nievroz', name: 'Demo Paintball Niévroz', city: 'Niévroz', postalCode: '01120',
    latitude: 45.8219, longitude: 5.0598, category: 'Paintball',
    description: 'Terrain de démonstration pour tester la compréhension d’une activité anniversaire ado proche de Jonage.',
    ageMin: 10, ageMax: 17, groupMin: 8, groupMax: 24, pricePerPerson: 22,
    indoor: false, outdoor: true, birthday: true, reservationRequired: true,
    intents: ['anniversaire ado 15 ans','groupe de 10 adolescents','activité compétitive','sortie entre copains','activité extérieure','proche de Jonage'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-kart-dagneux', name: 'Demo Kart Dagneux', city: 'Dagneux', postalCode: '01120',
    latitude: 45.8505, longitude: 5.0711, category: 'Karting',
    description: 'Karting de démonstration adapté aux groupes d’adolescents et anniversaires.',
    ageMin: 14, ageMax: null, groupMin: 6, groupMax: 16, pricePerPerson: 25,
    indoor: true, outdoor: false, birthday: true, reservationRequired: true,
    intents: ['anniversaire garçon 15 ans','groupe de 10 adolescents','activité compétitive','karting ado','activité intérieure','proche de Jonage'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-laser-dagneux', name: 'Demo Laser Dagneux', city: 'Dagneux', postalCode: '01120',
    latitude: 45.8498, longitude: 5.0732, category: 'Laser game',
    description: 'Laser game fictif pour tester les recommandations de groupe à proximité de Jonage.',
    ageMin: 8, ageMax: null, groupMin: 6, groupMax: 20, pricePerPerson: 20,
    indoor: true, outdoor: false, birthday: true, reservationRequired: true,
    intents: ['anniversaire ado','groupe 10 jeunes','activité intérieure','laser game','activité compétitive','proche de Jonage'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-vr-meyzieu', name: 'Demo VR Meyzieu', city: 'Meyzieu', postalCode: '69330',
    latitude: 45.7667, longitude: 5.0035, category: 'Réalité virtuelle',
    description: 'Expérience VR fictive pensée pour les adolescents et petits groupes.',
    ageMin: 12, ageMax: null, groupMin: 4, groupMax: 12, pricePerPerson: 28,
    indoor: true, outdoor: false, birthday: true, reservationRequired: true,
    intents: ['anniversaire ado','réalité virtuelle','activité intérieure','groupe 10 adolescents','proche de Jonage'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-escape-montluel', name: 'Demo Escape Montluel', city: 'Montluel', postalCode: '01120',
    latitude: 45.8512, longitude: 5.0573, category: 'Escape game',
    description: 'Escape game fictif avec scénarios pour adolescents.',
    ageMin: 13, ageMax: null, groupMin: 4, groupMax: 10, pricePerPerson: 27,
    indoor: true, outdoor: false, birthday: true, reservationRequired: true,
    intents: ['anniversaire ado','escape game','groupe 10 adolescents','activité réflexion','proche de Jonage'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-bowling-vaulx', name: 'Demo Bowling Vaulx', city: 'Vaulx-en-Velin', postalCode: '69120',
    latitude: 45.7780, longitude: 4.9207, category: 'Bowling',
    description: 'Bowling fictif pour groupes et anniversaires.',
    ageMin: 7, ageMax: null, groupMin: 4, groupMax: 20, pricePerPerson: 18,
    indoor: true, outdoor: false, birthday: true, reservationRequired: false,
    intents: ['anniversaire ado','bowling','groupe 10','activité intérieure'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-trampoline-decines', name: 'Demo Trampoline Décines', city: 'Décines-Charpieu', postalCode: '69150',
    latitude: 45.7680, longitude: 4.9590, category: 'Trampoline park',
    description: 'Parc de trampoline fictif pour tester une activité sportive adolescente.',
    ageMin: 8, ageMax: 17, groupMin: 6, groupMax: 20, pricePerPerson: 19,
    indoor: true, outdoor: false, birthday: true, reservationRequired: true,
    intents: ['anniversaire ado','activité sportive','groupe 10 adolescents','activité intérieure'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-accrobranche-miribel', name: 'Demo Accrobranche Miribel', city: 'Miribel', postalCode: '01700',
    latitude: 45.8250, longitude: 4.9545, category: 'Accrobranche',
    description: 'Accrobranche fictif pour groupes d’adolescents.',
    ageMin: 10, ageMax: null, groupMin: 6, groupMax: 30, pricePerPerson: 24,
    indoor: false, outdoor: true, birthday: true, reservationRequired: true,
    intents: ['anniversaire ado','activité extérieure','activité sportive','groupe 10 adolescents'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-laser-genas', name: 'Demo Laser Genas', city: 'Genas', postalCode: '69740',
    latitude: 45.7310, longitude: 5.0010, category: 'Laser game',
    description: 'Lieu fictif volontairement plus éloigné pour comparer le classement géographique.',
    ageMin: 8, ageMax: null, groupMin: 6, groupMax: 20, pricePerPerson: 20,
    indoor: true, outdoor: false, birthday: true, reservationRequired: true,
    intents: ['anniversaire ado','laser game','groupe 10 adolescents','activité intérieure'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  },
  {
    slug: 'demo-mini-kids-lyon', name: 'Demo Mini Kids Lyon', city: 'Lyon', postalCode: '69003',
    latitude: 45.7600, longitude: 4.8600, category: 'Parc enfants',
    description: 'Contre-exemple fictif destiné aux enfants de 3 à 8 ans, volontairement non pertinent pour des adolescents.',
    ageMin: 3, ageMax: 8, groupMin: 4, groupMax: 15, pricePerPerson: 15,
    indoor: true, outdoor: false, birthday: true, reservationRequired: true,
    intents: ['anniversaire enfant','activité 3 à 8 ans','parc enfants'],
    sourceType: 'demo', verifiedAt: '2026-09-14'
  }
];

export const getPlace = (slug: string) => places.find((p) => p.slug === slug);
