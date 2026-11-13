// YouTube video IDs, grouped into sections for the Tvorba part of the home page.
// Add a line to a section to add a video; the page numbers them automatically within each section.
export interface ProjectSection {
	/** Anchor id on the page (#id), used by the links in the hero */
	id: string;
	title: { cs: string; en: string };
	/** Shorter label for the links in the hero, if different from the title */
	nav?: { cs: string; en: string };
	/** Leave this section out of the links in the hero (it still shows in Tvorba) */
	skipInHero?: boolean;
	videos: string[];
}

export const projectSections: ProjectSection[] = [
	{
		id: 'festivaly',
		title: { cs: 'Městské slavnosti / Festivaly', en: 'City festivals / Festivals' },
		nav: { cs: 'Festivaly', en: 'Festivals' },
		videos: ['MkVUpOZPOPU', 'fhmHPPZRN94', 'oIXmNXaeOhg'],
	},
	{
		id: 'eventy',
		title: { cs: 'Eventy', en: 'Events' },
		videos: ['WR7tUhXTH6c', 'oxQrtq5ykog'],
	},
	{
		id: 'sportovni-akce',
		title: { cs: 'Sportovní akce', en: 'Sports events' },
		videos: ['oZxsMxNDnyQ', '_VfmD4miTNg'],
	},
	{
		id: 'konference',
		title: { cs: 'Konference', en: 'Conferences' },
		videos: ['H_BA-Xo0QS8'],
	},
	{
		id: 'videopodcasty',
		title: { cs: 'Videopodcasty', en: 'Video podcasts' },
		videos: ['0qCf8TXBEXM'],
	},
	{
		id: 'svatby',
		title: { cs: 'Svatby', en: 'Weddings' },
		videos: ['bJ5k_tBmGE0', 'nPUO2rg4I4s'],
	},
	{
		id: 'hudebni-klipy',
		title: { cs: 'Hudební klipy', en: 'Music videos' },
		videos: ['qhhKhz2Cu_A'],
	},
	{
		id: 'propagacni-videa',
		title: { cs: 'Propagační videa', en: 'Promotional videos' },
		videos: ['rRz8V0_ts_k'],
	},
	{
		id: 'vyber-projektu',
		skipInHero: true,
		title: { cs: 'Další realizace & aftermovie', en: 'More projects & aftermovies' },
		videos: [
			'259ocAg6GoI',
			'dW1FZ62HjT8',
			'7RR1ZmXlvIc',
			'9E6mF6z2eMA',
			'X3Nv-IdeOgw',
			'gNBpqrUidkQ',
			'DF43c0dtMwM',
		],
	},
];
