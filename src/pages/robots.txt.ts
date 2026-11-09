import type { APIRoute } from 'astro';
import { withBase } from '../i18n/ui';

// Everything may be crawled. Do NOT add Disallow lines for removed/spam URLs: Google must be able to
// visit them to see they are gone.
export const GET: APIRoute = ({ site }) => {
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap.xml'), site).href}\n`;
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
