// Blog articles (Czech only). To add an article, add an entry at the TOP of the list (newest first)
// and give it a unique `slug` (it becomes the address: /cs/blog/<slug>/).
export type Block =
	| { type: 'p'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'list'; items: { term: string; text: string }[] };

export interface Post {
	slug: string;
	/** ISO date, YYYY-MM-DD */
	date: string;
	title: string;
	body: Block[];
	/** Highlighted box at the end of the article (same look as "Mediální trénink" on the home page) */
	callout?: { title: string; text: string };
}

export const posts: Post[] = [
	{
		slug: 'reels-jako-efektivni-doplnek-marketingu',
		date: '2026-11-10',
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
];
