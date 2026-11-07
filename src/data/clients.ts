// Client logos shown above the About section. Files live in public/media/clients/.
// Optional per-logo tweaks: `soft` = smaller and dimmer; `dim` = dimmer only; `pullLeft` = shifted toward the previous
// logo on wide screens (a narrow logo floats far from its neighbour otherwise).
export const clients: { name: string; file: string; soft?: boolean; dim?: boolean; pullLeft?: boolean }[] = [
	{ name: 'Tchibo', file: 'tchibo.png' },
	{ name: 'Česká televize', file: 'ct.png' },
	{ name: 'Plzeňský Prazdroj', file: 'pp.png' },
	{ name: 'Nova', file: 'nova.svg', soft: true },
	{ name: 'AMI Communications', file: 'ami.png' },
	{ name: 'Prima', file: 'prima.png' },
	{ name: 'Praha 10', file: 'praha10.png', dim: true, pullLeft: true },
];
