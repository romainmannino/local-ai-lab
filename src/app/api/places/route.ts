import { places } from '@/lib/places';
export async function GET(){return Response.json({dataset:'local-ai-lab-demo',is_demo:true,updated_at:'2026-09-14',count:places.length,places});}
