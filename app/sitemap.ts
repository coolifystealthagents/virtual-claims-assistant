import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { blogPosts, researchPosts, LAST_CONTENT_REVIEW } from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{const base=`https://${site.domain}`;const reviewed=new Date(LAST_CONTENT_REVIEW);const staticRoutes=['','/about','/services','/contact-us','/blog','/research','/privacy','/terms'];return[...staticRoutes.map((path)=>({url:`${base}${path}`,lastModified:reviewed})),...site.services.map((s)=>({url:`${base}/services/${s.slug}`,lastModified:reviewed})),...blogPosts.map((p)=>({url:`${base}/blog/${p.slug}`,lastModified:reviewed})),...researchPosts.map((p)=>({url:`${base}/research/${p.slug}`,lastModified:reviewed}))]}
