// YouTube video IDs, grouped into sections for the Tvorba part of the home page.
// Add a line to a section to add a video; the page numbers them automatically within each section.
export interface ProjectSection {
	title: { cs: string; en: string };
	videos: string[];
}

export const projectSections: ProjectSection[] = [
	{
		title: { cs: 'Městské slavnosti / Festivaly', en: 'City festivals / Festivals' },
		videos: ['MkVUpOZPOPU', 'fhmHPPZRN94'],
	},
	{
		title: { cs: 'Eventy', en: 'Events' },
		videos: ['WR7tUhXTH6c'],
	},
	{
		title: { cs: 'Sportovní akce', en: 'Sports events' },
		videos: ['oZxsMxNDnyQ'],
	},
	{
		title: { cs: 'Konference', en: 'Conferences' },
		videos: ['H_BA-Xo0QS8'],
	},
	{
		title: { cs: 'Videopodcasty', en: 'Video podcasts' },
		videos: ['0qCf8TXBEXM'],
	},
	{
		title: { cs: 'Svatby', en: 'Weddings' },
		videos: ['bJ5k_tBmGE0', '6RrWNdgY8LU', 'nPUO2rg4I4s'],
	},
	{
		title: { cs: 'Výběr z posledních projektů', en: 'A selection of recent projects' },
		videos: [
			'259ocAg6GoI',
			'dW1FZ62HjT8',
			'7RR1ZmXlvIc',
			'9E6mF6z2eMA',
			'X3Nv-IdeOgw',
			'gNBpqrUidkQ',
			'EPKq0Ownzks',
			'w-O5OYjCF9Y',
			'rwUJUpPTSGs',
			'KEID_HveeZY',
			'qhhKhz2Cu_A',
			'Ku66ZAAH9KA',
			'X3tjMIwPR0Q',
		],
	},
];
