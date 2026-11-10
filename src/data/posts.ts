// Blog articles. To add an article, add an entry at the TOP of the list (newest first)
// and give it a unique `slug` (it becomes the address: /cs/blog/<slug>/ and /en/blog/<slug>/).
import type { Lang } from '../i18n/ui';

export type Block =
	| { type: 'p'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'list'; items: { term: string; text: string }[] };

export interface PostText {
	title: string;
	body: Block[];
	/** Highlighted box at the end of the article (same look as "Mediální trénink" on the home page) */
	callout?: { title: string; text: string };
}

export interface Post {
	slug: string;
	/** ISO date, YYYY-MM-DD */
	date: string;
	text: Record<Lang, PostText>;
}

export const posts: Post[] = [
	{
		slug: 'reels-jako-efektivni-doplnek-marketingu',
		date: '2026-11-10',
		text: {
			cs: {
				title: 'Reels jako efektivní doplněk marketingu: Buďte vidět každý den',
				body: [
					{
						type: 'p',
						text: 'Reels jsou dnes motorem sociálních sítí. Zatímco klasické video buduje vaši prestiž na webu, krátké a dynamické formáty na Instagramu, Facebooku nebo LinkedInu zajišťují, že na vás zákazníci a klienti nezapomenou.',
					},
					{
						type: 'p',
						text: 'Tato služba je šitá na míru firmám, institucím a místním podnikům (jako jsou pivovary, restaurace či městské části), které chtějí špičkovou vizuální prezentaci, ale nevyplatí se jim držet vlastního interního markétera nebo platit předražené agentury.',
					},
					{ type: 'h2', text: 'Proč uvažovat o pravidelné spolupráci na tvorbě videí?' },
					{
						type: 'list',
						items: [
							{
								term: 'Cena, která dává smysl:',
								text: 'Za zlomek nákladů na stálého zaměstnance získáte profesionální videoobsah na celý měsíc.',
							},
							{
								term: 'Marketingový přesah:',
								text: 'Nejsme jen „přidržovači kamery“. Poradíme vám, jaký obsah bude u vaší cílové skupiny reálně fungovat a přinášet výsledky.',
							},
							{
								term: 'Konec trémy před kamerou:',
								text: 'Díky našemu mediálnímu tréninku vás i vaše kolegy naučíme před kamerou mluvit přirozeně, přesvědčivě a sebevědomě.',
							},
						],
					},
				],
				callout: {
					title: 'Naše garance',
					text: 'Soustřeďte se na svůj byznys a správu obce – my se postaráme o to, aby vás na sociálních sítích bylo vidět každý den.',
				},
			},
			// English text is a translation of the Czech original
			en: {
				title: 'Reels as an effective marketing add-on: be seen every day',
				body: [
					{
						type: 'p',
						text: 'Reels are the engine of social media today. While a classic video builds your prestige on the web, short, dynamic formats on Instagram, Facebook or LinkedIn make sure your customers and clients don’t forget about you.',
					},
					{
						type: 'p',
						text: 'This service is tailored to companies, institutions and local businesses (such as breweries, restaurants or city districts) that want first-class visual presentation but can’t justify keeping an in-house marketer or paying overpriced agencies.',
					},
					{ type: 'h2', text: 'Why consider working together on videos on a regular basis?' },
					{
						type: 'list',
						items: [
							{
								term: 'A price that makes sense:',
								text: 'For a fraction of the cost of a full-time employee, you get professional video content for the whole month.',
							},
							{
								term: 'Marketing know-how:',
								text: 'We are not just “camera holders”. We will advise you on what content will actually work for your target audience and deliver results.',
							},
							{
								term: 'No more camera fright:',
								text: 'Thanks to our media training, we will teach you and your colleagues to speak on camera naturally, convincingly and confidently.',
							},
						],
					},
				],
				callout: {
					title: 'Our guarantee',
					text: 'Focus on your business and on running your municipality – we will make sure you are seen on social media every day.',
				},
			},
		},
	},
];
