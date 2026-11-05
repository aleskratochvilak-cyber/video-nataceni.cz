export const languages = {
	cs: 'Čeština',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const langPaths: Lang[] = Object.keys(languages) as Lang[];

/** Prefix a root-relative path with the site base (e.g. /video-nataceni.cz) */
export const withBase = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;

/** Page paths per language (the contact slug differs: kontakt / contact) */
export const paths = {
	home: { cs: withBase('/cs/'), en: withBase('/en/') },
	contact: { cs: withBase('/cs/kontakt/'), en: withBase('/en/contact/') },
	gdpr: { cs: withBase('/cs/gdpr/'), en: withBase('/en/gdpr/') },
} as const satisfies Record<string, Record<Lang, string>>;

export const contact = {
	phone: '+420 608 121 114',
	phoneHref: 'tel:+420608121114',
	email: 'info@video-nataceni.cz',
	emailHref: 'mailto:info@video-nataceni.cz',
};

interface Service {
	title: string;
	text: string;
	tags: string[];
}

interface Content {
	meta: { title: string; description: string };
	nav: { services: string; work: string; about: string; contact: string; menu: string; close: string };
	hero: { kicker: string; line1: string; line2: string; sub: string; cta: string; formats: string[] };
	services: { heading: string; items: Service[] };
	clients: { label: string };
	work: { heading: string; play: string; video: string; close: string };
	about: { heading: string; lead: string; paragraphs: string[]; trainingTitle: string; training: string };
	contact: { heading: string; lead: string; phone: string; email: string; area: string; areaValue: string };
	contactPage: {
		metaTitle: string; metaDescription: string; eyebrow: string; heading: string; lead: string;
		name: string; namePh: string; email: string; emailPh: string; phone: string; phoneOptional: string; phonePh: string;
		message: string; messagePh: string; consentPre: string; consentLink: string; consentPost: string;
		send: string; sending: string; successTitle: string; successText: string; back: string; error: string; fallback: string;
	};
	footer: { rights: string };
}

export const content: Record<Lang, Content> = {
	cs: {
		meta: {
			title: 'Video-natáčení – svatby, firemní akce i promo videa',
			description:
				'Tvoříme svatební videa, firemní spoty a eventové záznamy, které zaujmou emoce i klienty. Kameraman, videomaker, producent.',
		},
		nav: { services: 'Služby', work: 'Tvorba', about: 'O nás', contact: 'Kontakt', menu: 'Menu', close: 'Zavřít' },
		hero: {
			kicker: 'Kameraman · Videomaker · Producent',
			line1: 'Videa, která',
			line2: 'vyprávějí příběh.',
			sub: 'Od prvního záběru po poslední střih. Pomůžeme vaší značce obrazem.',
			cta: 'Nezávazná poptávka',
			formats: ['Eventy', 'Firemní videa & konference', 'Videoklipy', 'Svatby'],
		},
		services: {
			heading: 'Služby',
			items: [
				{
					title: 'Natáčení videí na míru',
					text: 'Promo video, reklamní spot nebo dokumentace vaší akce. Pracujeme s profesionální technikou a zakládáme si na autenticitě a kvalitním výsledku bez kompromisů.',
					tags: ['prezentace značky', 'záznamy akcí', 'spoty a reportáže', 'video vizitky'],
				},
				{
					title: 'Střih a postprodukce',
					text: 'Záběr je jen začátek. V postprodukci videu vtiskneme tempo, atmosféru i profesionální vzhled a poskládáme příběh, který zaujme.',
					tags: ['střih a dramaturgie', 'color grading', 'titulky a grafika', 'mastering zvuku'],
				},
				{
					title: 'Firemní a produktová videa',
					text: 'Představte firmu, službu nebo produkt efektivně a důvěryhodně. Video, které vystihne to nejdůležitější a působí profesionálně i lidsky.',
					tags: ['firemní prezentace', 'produktová videa', 'náborová videa', 'case studies'],
				},
				{
					title: 'Klipy, eventy, dokumenty',
					text: 'Milujeme výzvy a emoce. Kreativní projekty, kde video vypráví silné příběhy, zaznamenává neopakovatelné okamžiky nebo podtrhuje hudební atmosféru.',
					tags: ['hudební klipy', 'koncerty a festivaly', 'krátké dokumenty', 'aftermovie'],
				},
				{
					title: 'Natáčení dronem',
					text: 'Letecké záběry koncertů, festivalů, firemních budov, sportovišť i krajiny. Plynulé a detailní záběry, které dodají projektu moderní nádech.',
					tags: ['festivaly', 'budovy a areály', 'reklamní videa'],
				},
				{
					title: 'Videa na web',
					text: 'Krátký spot na webu ukáže vaše prostředí, výrobu či službu líp než dlouhý text. Posiluje důvěryhodnost značky a prodlužuje čas strávený na stránce.',
					tags: ['restaurace a hotely', 'výroba', 'kanceláře a prodejny'],
				},
			],
		},
		clients: { label: 'Klienti' },
		work: {
			heading: 'Tvorba',
			play: 'Přehrát',
			video: 'Ukázka',
			close: 'Zavřít video',
		},
		about: {
			heading: 'O nás',
			lead: 'Sehraný tým kameramanů, střihačů, zvukařů a grafiků s dlouholetou praxí ve videoprodukci.',
			paragraphs: [
				'Naše práce je zároveň naší vášní. Zajišťujeme kompletní výrobu reportáží, prezentačních a firemních videí pro web, sociální sítě i televizní vysílání. Součástí služeb je také fotografie, postprodukce a natáčení dronem.',
				'Díky zkušenostem z televizního a filmového prostředí nabízíme vysoký standard produkce – od eventových videí z konferencí, festivalů a firemních večírků přes promo videa z food festivalů a slavností na hradech až po svatební klipy a videoklipy pro umělce.',
				'Spolupracujeme s televizními společnostmi i produkčními domy na českém trhu, takže zvládneme velkou firemní akci stejně jako menší soukromý projekt.',
			],
			trainingTitle: 'Mediální trénink',
			training:
				'Připravíme vás nebo váš tým na vystupování před kamerou: přirozený projev, zvládání trémy, řeč těla a hlas. Ideální pro mluvčí, manažery, moderátory i lektory.',
		},
		contact: {
			heading: 'Napište nám',
			lead: 'Víte přesně, co chcete, nebo jen tušíte? Rádi záměr probereme a vymyslíme nejlepší řešení právě pro vás.',
			phone: 'Telefon',
			email: 'E-mail',
			area: 'Působnost',
			areaValue: 'Celá ČR',
		},
		contactPage: {
			metaTitle: 'Nezávazná poptávka – video-natáčení',
			metaDescription:
				'Napište nám, co potřebujete natočit. Ozveme se vám s nezávaznou kalkulací svatebního, firemního nebo eventového videa.',
			eyebrow: 'Nezávazná poptávka',
			heading: 'Napište nám',
			lead: 'Víte přesně, co chcete, nebo jen tušíte? Napište pár vět, rádi záměr probereme a nabídneme nejlepší řešení.',
			name: 'Jméno / Název společnosti',
			namePh: 'Zadejte jméno…',
			email: 'E-mail',
			emailPh: 'Zadejte e-mail…',
			phone: 'Telefon',
			phoneOptional: 'nepovinné',
			phonePh: '+420 …',
			message: 'Zpráva',
			messagePh: 'Co potřebujete natočit? Kdy a kde? Přibližná délka…',
			consentPre: 'Odesláním souhlasíte se',
			consentLink: 'zpracováním osobních údajů',
			consentPost: '.',
			send: 'Odeslat poptávku',
			sending: 'Odesílám…',
			successTitle: 'Vaše zpráva byla odeslána!',
			successText: 'Děkujeme. Ozveme se vám co nejdříve s nezávaznou kalkulací.',
			back: 'Zpět na úvod',
			error: 'Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám napište na',
			fallback: 'Otevřel se váš e-mailový program s připravenou zprávou. Stačí ji odeslat.',
		},
		footer: { rights: 'Všechna práva vyhrazena.' },
	},
	en: {
		meta: {
			title: 'Video-natáčení – weddings, corporate events and promo videos',
			description:
				'Wedding films, company spots and event coverage that move people and win clients. Cameraman, videomaker, producer.',
		},
		nav: { services: 'Services', work: 'Work', about: 'About', contact: 'Contact', menu: 'Menu', close: 'Close' },
		hero: {
			kicker: 'Cameraman · Videomaker · Producer',
			line1: 'Videos that',
			line2: 'tell your story.',
			sub: 'From the first shot to the final cut, we help your brand through the picture.',
			cta: 'Get a free quote',
			formats: ['Events', 'Corporate videos & conferences', 'Music videos', 'Weddings'],
		},
		services: {
			heading: 'Services',
			items: [
				{
					title: 'Custom video production',
					text: 'A promo video, an ad spot or coverage of your event. Professional equipment, authenticity, and a quality result without compromise.',
					tags: ['brand presentation', 'event coverage', 'spots and reportage', 'video profiles'],
				},
				{
					title: 'Editing and post-production',
					text: 'The shot is only the beginning. In post we give the video its pace, atmosphere and professional look, and assemble a story that grabs attention.',
					tags: ['editing and storytelling', 'color grading', 'titles and graphics', 'audio mastering'],
				},
				{
					title: 'Corporate and product videos',
					text: 'Introduce your company, service or product effectively and credibly. A video that captures what matters most and feels both professional and human.',
					tags: ['company presentations', 'product videos', 'recruiting videos', 'case studies'],
				},
				{
					title: 'Music videos, events, documentaries',
					text: 'We love challenges and emotion. Creative projects where video tells strong stories, captures one-off moments or underlines the mood of the music.',
					tags: ['music videos', 'concerts and festivals', 'short documentaries', 'aftermovies'],
				},
				{
					title: 'Drone filming',
					text: 'Aerial footage of concerts, festivals, company buildings, sports venues and landscapes. Smooth, detailed shots that give a project a modern edge.',
					tags: ['festivals', 'buildings and sites', 'advertising'],
				},
				{
					title: 'Videos for your website',
					text: 'A short spot on your site shows your space, production or service better than long text. It builds trust and keeps visitors on the page longer.',
					tags: ['restaurants and hotels', 'production', 'offices and shops'],
				},
			],
		},
		clients: { label: 'Clients' },
		work: {
			heading: 'Work',
			play: 'Play',
			video: 'Sample',
			close: 'Close video',
		},
		about: {
			heading: 'About',
			lead: 'A close-knit team of cameramen, editors, sound engineers and graphic designers with years of video production experience.',
			paragraphs: [
				'Our work is also our passion. We handle complete production of reportage, presentation and corporate videos for the web, social media and television. We also offer photography, post-production and drone filming.',
				'With a background in television and film, we deliver a high standard of production, from event videos of conferences, festivals and company parties, through promo videos from food festivals and castle celebrations, to wedding films and music videos for artists.',
				'We work with television companies and production houses on the Czech market, so we can handle a large corporate event as well as a smaller private project.',
			],
			trainingTitle: 'Media training',
			training:
				'We prepare you or your team to appear on camera: natural delivery, handling nerves, body language and voice. Ideal for spokespeople, managers, presenters and lecturers.',
		},
		contact: {
			heading: 'Get in touch',
			lead: 'Know exactly what you want, or only have a hunch? We are happy to talk it through and find the best solution for you.',
			phone: 'Phone',
			email: 'E-mail',
			area: 'Coverage',
			areaValue: 'All of Czechia',
		},
		contactPage: {
			metaTitle: 'Free quote request – video-natáčení',
			metaDescription:
				'Tell us what you need filmed. We will get back to you with a free quote for wedding, corporate or event video.',
			eyebrow: 'Free quote',
			heading: 'Get in touch',
			lead: 'Know exactly what you want, or only have a hunch? Write a few lines and we will talk it through and suggest the best solution.',
			name: 'Name / Company',
			namePh: 'Enter your name…',
			email: 'E-mail',
			emailPh: 'Enter your e-mail…',
			phone: 'Phone',
			phoneOptional: 'optional',
			phonePh: '+420 …',
			message: 'Message',
			messagePh: 'What do you need filmed? When and where? Approximate length…',
			consentPre: 'By sending you agree to the',
			consentLink: 'processing of personal data',
			consentPost: '.',
			send: 'Send request',
			sending: 'Sending…',
			successTitle: 'Your message has been sent!',
			successText: 'Thank you. We will get back to you shortly with a free quote.',
			back: 'Back to home',
			error: 'The message could not be sent. Please try again, or write to us at',
			fallback: 'Your e-mail app has opened with a prepared message. Just send it.',
		},
		footer: { rights: 'All rights reserved.' },
	},
};
