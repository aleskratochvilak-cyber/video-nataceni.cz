// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Pages serves a project site from /<repo>/. Set SITE_BASE=/ (and SITE_URL) for a root-domain host.
const base = process.env.SITE_BASE ?? '/video-nataceni.cz/';

export default defineConfig({
	site: process.env.SITE_URL ?? 'https://aleskratochvilak-cyber.github.io',
	base,
	redirects: {
		'/': `${base.replace(/\/$/, '')}/cs/`,
	},
	i18n: {
		defaultLocale: 'cs',
		locales: ['cs', 'en'],
		routing: {
			// /cs/... and /en/...; "/" redirects to the default locale
			prefixDefaultLocale: true,
		},
	},
});
