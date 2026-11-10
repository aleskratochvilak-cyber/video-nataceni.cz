// Google reviews shown in the "reviews" section of the home page (in their original language).
// Add an entry to add a review; the order here is the order they rotate in (the first one shown is random).
export interface Review {
	text: string;
	name: string;
	stars: number;
}

export const reviews: Review[] = [
	{
		text: 'Spolupráce před, během natáčení i po natáčení výborná! Stejně tak i odvedené dílo. Těšíme se na spolupráci na VědaFestu 2027. Za celý organizační tým akce doporučujeme.',
		name: 'Irena K.',
		stars: 5,
	},
	{
		text: 'Využila jsem pro natáčení videa - reportáže z akce a maximální spokojenost. Profesionální přístup a velmi povedené video zachytilo perfektně atmosféru akce.',
		name: 'Lucie V.',
		stars: 5,
	},
	{
		text: 'Profi přístup i vystupování, domluva na jedničku a perfektní video jako výsledek - co víc si přát? Moc děkuji za spolupráci!',
		name: 'Ondřej S.',
		stars: 5,
	},
	{
		text: 'S firmou jsme spolupracovali již několikrát. Jsme vždy spokojeni jak s komunikací, tak přípravou kameramana i výsledným dílem :)',
		name: 'CVIK CB',
		stars: 5,
	},
	{
		text: 'Velmi profesionální spolupráce.',
		name: 'Jiří B.',
		stars: 5,
	},
	{
		text: 'Naprostá spokojenost :-)',
		name: 'Lucie H.',
		stars: 5,
	},
	{
		text: 'Točit s panem Kratochvílem je v tom nejlepším slova smyslu náročné. Ví přesně, co chce, a ví, jak se k tomu dostat. Je to kameraman a profík každým coulem, vidí kompozici, úhly, barvy i hloubku obrazu tisíckrát lépe než vy, a přesto si dá tu práci a trpělivě vám všechno vysvětlí. Vymáčkne z vás to nejlepší a dostane z vás víc, než jste si mysleli, že ve vás je. Výsledek pak stojí za to, je lepší, než jste si dokázali představit. To je zkušenost, když jednáte s opravdovým profesionálem. A tím pan Kratochvíl bezpochyby je.',
		name: 'Jan J.',
		stars: 5,
	},
	{
		text: 'Naprosto perfektní spolupráce. Aleš pro nás točil aftermovie z akce pro 2 600 lidí s poměrně náročnými požadavky (záběry pouze plných hal, dostatečná vizibilita hlavních partnerů, výhradně pozitivní a aktivní interakce). Vše se povedlo na výbornou. Dále musím vypíchnout rychlou a profesionální přípravu i odevzdání finálního výstupu. Skvělá a rychlá komunikace, profesionální a zároveň přátelský přístup a perfektní zapracování našich připomínek do finálního střihu. Pokud hledáte někoho, na koho je spolehnutí i u velkých akcí, o koho se nebudete muset příliš starat, protože je za kamerou jako doma - Aleš je jasná volba',
		name: 'Tereza K.',
		stars: 5,
	},
	{
		text: 'Jsme velice spokojeni. Město Nový Knín.',
		name: 'Radek H.',
		stars: 5,
	},
];
