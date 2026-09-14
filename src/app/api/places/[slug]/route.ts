import { getPlace } from '@/lib/places';
export async function GET(_:Request,{params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getPlace(slug);if(!p)return Response.json({error:'not_found'},{status:404});return Response.json({is_demo:true,place:p});}
