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
	hero: { kicker: string; line1: string; line2: string; sub: string; cta: string };
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
			kicker: 'Kameraman · Videomaker · Produkce',
			line1: 'Videa, která',
			line2: 'vyprávějí příběh.',
			sub: 'Od prvního záběru po poslední střih. Pomůžeme vaší značce obrazem.',
			cta: 'Nezávazná poptávka',
		},
		services: {
			heading: 'Služby',
			items: [
				{
					title: 'Natáčení videí na míru',
					text: 'Kompletní video produkce pro firmy i jednotlivce. Tvoříme promo videa, reklamní spoty i dokumentace akcí s důrazem na autenticitu a špičkovou obrazovou kvalitu.',
					tags: ['prezentace značky', 'záznamy akcí', 'spoty a reportáže', 'video vizitky'],
				},
				{
					title: 'Střih a postprodukce',
					text: 'Vtiskneme vašemu videu správné tempo, atmosféru a profesionální švih. Od dynamického střihu a color gradingu až po mastering zvuku a titulky.',
					tags: ['střih a dramaturgie', 'color grading', 'mastering zvuku'],
				},
				{
					title: 'Firemní a produktová videa',
					text: 'Ukažte firmu, produkt nebo službu efektivně. Natáčíme firemní akce, konference i produktové spoty, které budují důvěru a zaujmou zákazníky.',
					tags: ['firemní akce a konference', 'produkce a značka', 'služby'],
				},
				{
					title: 'Klipy, eventy, slavnosti',
					text: 'Zachytíme emoce a neopakovatelnou atmosféru. Od hudebních klipů a slavností až po dynamická aftermovie, svatby a videopodcasty plné příběhů.',
					tags: ['hudební klipy', 'slavnosti a eventy', 'videopodcasty'],
				},
				{
					title: 'Natáčení dronem',
					text: 'Plynulé a detailní letecké záběry z nadhledu dodají každému projektu, koncertu, sportovišti nebo krajině moderní a velkolepý rozměr.',
					tags: ['letecké záběry', 'dron 4K', 'festivaly a krajina'],
				},
				{
					title: 'Videa na sociální sítě & Reels',
					text: 'Tvoříme poutavá Reels, TikTok videa a Shorts, která zaujmou během prvních sekund. Vertikální formáty z eventů i cílené reklamní spoty přivedou nové zákazníky a zvýší dosah.',
					tags: ['Instagram Reels & TikTok', 'eventy a akce', 'marketingová videa'],
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
			lead: 'Sehraný tým kameramanů, střihačů, zvukařů a grafiků s dlouholetou praxí ve videoprodukci. Naše práce je zároveň naší vášní.',
			paragraphs: [
				'Zajišťujeme kompletní výrobu reportáží, prezentačních a firemních videí pro web, sociální sítě i televizní vysílání. Součástí našich služeb je také profesionální fotografie, postprodukce a natáčení dronem.',
				'Díky zkušenostem z televizního a filmového prostředí přinášíme vysoký standard produkce. Natočíme pro vás eventy z konferencí, festivalů a firemních večírků, promo videa z food festivalů a slavností na hradech, ale i procítěné svatební klipy a videoklipy pro umělce.',
				'Spolupracujeme s televizními společnostmi i produkčními domy na českém trhu, takže hravě zvládneme velkou firemní akci stejně jako menší soukromý projekt.',
			],
			trainingTitle: 'Mediální trénink',
			training:
				'Připravíme vás nebo váš tým na vystupování před kamerou. Naučíme vás přirozený projev, zvládání trémy, práci s řečí těla i hlasem. Ideální pro firemní mluvčí, manažery, moderátory i lektory.',
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
		nav: { services: 'Services', work: 'Work', about: 'About us', contact: 'Contact', menu: 'Menu', close: 'Close' },
		hero: {
			kicker: 'Cameraman · Videomaker · Production',
			line1: 'Videos that',
			line2: 'tell your story.',
			sub: 'From the first shot to the final cut, we help your brand through the picture.',
			cta: 'Get a free quote',
		},
		services: {
			heading: 'Services',
			items: [
				{
					title: 'Custom video production',
					text: 'Complete video production for companies and individuals. We create promo videos, ad spots and event documentation with an emphasis on authenticity and top image quality.',
					tags: ['brand presentation', 'event coverage', 'spots and reportage', 'video profiles'],
				},
				{
					title: 'Editing and post-production',
					text: 'We give your video the right pace, atmosphere and a professional edge. From dynamic editing and color grading to audio mastering and subtitles.',
					tags: ['editing and storytelling', 'color grading', 'audio mastering'],
				},
				{
					title: 'Corporate and product videos',
					text: 'Show your company, product or service effectively. We film corporate events, conferences and product spots that build trust and win over customers.',
					tags: ['corporate events and conferences', 'production and brand', 'services'],
				},
				{
					title: 'Music videos, events, celebrations',
					text: 'We capture emotion and one-of-a-kind atmosphere. From music videos and celebrations to dynamic aftermovies, weddings and video podcasts full of stories.',
					tags: ['music videos', 'celebrations and events', 'video podcasts'],
				},
				{
					title: 'Drone filming',
					text: 'Smooth, detailed aerial footage from above gives every project, concert, sports venue or landscape a modern and grand dimension.',
					tags: ['aerial footage', '4K drone', 'festivals and landscapes'],
				},
				{
					title: 'Social media videos & Reels',
					text: 'We create engaging Reels, TikTok videos and Shorts that grab attention within the first seconds. Vertical formats from events and targeted ad spots bring new customers and increase reach.',
					tags: ['Instagram Reels & TikTok', 'events and shows', 'marketing videos'],
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
			heading: 'About us',
			lead: 'A close-knit team of cameramen, editors, sound engineers and graphic designers with years of experience in video production. Our work is also our passion.',
			paragraphs: [
				'We provide complete production of reportages, presentation and corporate videos for the web, social media and television broadcast. Our services also include professional photography, post-production and drone filming.',
				'Thanks to our experience in television and film, we deliver a high standard of production. We will film events for you from conferences, festivals and company parties, promo videos from food festivals and celebrations at castles, as well as heartfelt wedding films and music videos for artists.',
				'We work with television companies and production houses on the Czech market, so we can easily handle a large corporate event as well as a smaller private project.',
			],
			trainingTitle: 'Media training',
			training:
				'We will prepare you or your team for appearing in front of the camera. We will teach you a natural delivery, how to handle nerves, and how to work with body language and voice. Ideal for company spokespeople, managers, presenters and lecturers.',
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
