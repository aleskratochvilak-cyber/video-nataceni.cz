import type { APIRoute } from 'astro';
import { paths, postPath } from '../i18n/ui';
import { posts } from '../data/posts';

// One <url> per page and language, each with links to its translations (hreflang).
// Pages are taken from `paths` in src/i18n/ui.ts, so a new page listed there is included automatically.
export const GET: APIRoute = ({ site }) => {
	const abs = (p: string) => new URL(p, site).href;
	const pages: Record<'cs' | 'en', string>[] = [
		...Object.values(paths),
		...posts.map((p) => ({ cs: postPath('cs', p.slug), en: postPath('en', p.slug) })),
	];
	const urls = pages.flatMap((page) =>
		(Object.keys(page) as (keyof typeof page)[]).map((lang) => {
			const alternates = [
				...(Object.keys(page) as (keyof typeof page)[]).map(
					(l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(page[l])}" />`,
				),
				`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page.cs)}" />`,
			].join('\n');
			return `  <url>\n    <loc>${abs(page[lang])}</loc>\n${alternates}\n  </url>`;
		}),
	);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
