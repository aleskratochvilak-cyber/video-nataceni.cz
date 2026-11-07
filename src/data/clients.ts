// Client logos shown above the About section. Files live in public/media/clients/.
// Optional per-logo tweaks: `soft` = smaller and dimmer; `dim` = dimmer only; `pullLeft` = shifted left by that many rem
// toward the previous logo on wide screens (a narrow logo floats far from its neighbour otherwise).
export const clients: { name: string; file: string; soft?: boolean; dim?: boolean; pullLeft?: number }[] = [
	{ name: 'Tchibo', file: 'tchibo.png' },
	{ name: 'Česká televize', file: 'ct.png' },
	{ name: 'Plzeňský Prazdroj', file: 'pp.png' },
	{ name: 'Nova', file: 'nova.svg', soft: true, pullLeft: 1.2 },
	{ name: 'AMI Communications', file: 'ami.png' },
	{ name: 'Prima', file: 'prima.png' },
	{ name: 'Praha 10', file: 'praha10.png', dim: true, pullLeft: 3.2 },
];
