import type { MetadataRoute } from 'next';
import { places } from '@/lib/places';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://local-ai-lab-six.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: '2026-09-14', changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/discover`, lastModified: '2026-09-14', changeFrequency: 'weekly', priority: 0.8 },
    ...places.map((p) => ({
      url: `${base}/lieux/${p.slug}`,
      lastModified: p.verifiedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    }))
  ];
}
