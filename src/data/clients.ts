// Client logos shown above the About section. Files live in public/media/clients/.
// `soft: true` shows a logo smaller and dimmer than the rest (for logos that look too strong next to the others).
export const clients: { name: string; file: string; soft?: boolean }[] = [
	{ name: 'Tchibo', file: 'tchibo.png' },
	{ name: 'Česká televize', file: 'ct.png' },
	{ name: 'Plzeňský Prazdroj', file: 'pp.png' },
	{ name: 'Nova', file: 'nova.svg', soft: true },
	{ name: 'AMI Communications', file: 'ami.png' },
	{ name: 'Prima', file: 'prima.png' },
];
