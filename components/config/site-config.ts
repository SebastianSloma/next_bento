export type GridItemLayout = '1x2' | '2x1' | '2x2' | '2x4'; // First number is width, second is height
export type GridItemType = 'social' | 'equipment' | 'mentor' | 'project';
export type EqiupmentItem = {
	title: string;
	link: string;
};

export interface GridItemInterface {
	layout: GridItemLayout;
	type: GridItemType;
	title: string;
	icon?: string;
	username?: string;
	description?: string;
	color?: string;
	buttonTitle?: string;
	buttonLink?: string;
	buttonSecondaryText?: string;
	/* Mentor */
	promotion?: string;
	price?: string;
	oldPrice?: string;
	/* Project */
	stars?: number;
	/* Equipments */
	equipments?: EqiupmentItem[];
	image?: string;
}

const GridItems: GridItemInterface[] = [
	{
		layout: '2x2',
		type: 'social',
		title: 'Youtube',
		icon: 'youtube',
		username: '@seb',
		description: 'Web Development.',
		color: '#FF0000',
		buttonTitle: 'Subscribe',
		buttonLink: 'https://www.youtube.com',
		buttonSecondaryText: '1.1K',
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Discord',
		icon: 'discord',
		username: '@seb',
		buttonTitle: 'Join',
		buttonLink: 'https://discord.com',
		buttonSecondaryText: '44',
		color: '#5865F2',
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Github',
		icon: 'github',
		username: '@seb',
		buttonTitle: 'Follow',
		buttonSecondaryText: '36',
		buttonLink: 'https://github.com',
		color: '#070707',
	},
	{
		layout: '2x4',
		type: 'equipment',
		title: 'MacStuff',
		image: '/2.png',
		equipments: [
			{
				title: 'MacBook Pro',
				link: 'https://www.amazon.com/',
			},
			{
				title: 'AirPods Pro',
				link: 'https://www.amazon.com/',
			},
			{
				title: 'IPhone 12',
				link: 'https://www.amazon.com/',
			},
			{
				title: 'Magic Mouse',
				link: 'https://www.amazon.com/',
			},
		],
	},
	{
		layout: '2x2',
		type: 'social',
		title: 'Twitter',
		icon: 'twitter',
		username: '@Seb',
		buttonTitle: 'Follow',
		buttonLink: 'https://twitter.com/',
		buttonSecondaryText: '279',
		color: '#1DA1F2',
		description:
			'Full-stack Developer',
	},
	{
		layout: '2x1',
		type: 'mentor',
		title: 'Next.js',
		icon: 'superpeer',
		promotion: 'Dev',
		oldPrice: '$100',
		price: '$50',
		buttonLink: 'Next.js',
	},
	{
		layout: '2x1',
		type: 'mentor',
		title: 'Supabase',
		icon: 'superpeer',
		promotion: 'Dev',
		oldPrice: '$100',
		price: '$50',
		buttonLink: 'https://superpeer.com/',
	},
	{
		layout: '2x1',
		type: 'project',
		title: 'Dev',
		icon: 'github',
		color: '#070707',
		buttonLink: 'https://github.com/',
		stars: 73,
	},
	{
		layout: '2x2',
		type: 'social',
		title: 'Full-stack',
		username: '@seb',
		description:
			'Full-stack.',
		icon: 'udemy',
		buttonTitle: 'Enroll',
		buttonSecondaryText: '%90 OFF',
		buttonLink:
			'https://www.udemy.com',
	},
	{
		layout: '2x1',
		type: 'project',
		title: 'Dev',
		icon: 'github',
		stars: 19,
		color: '#070707',
		buttonLink: 'https://github.com',
	},
];

export const siteConfig = {
	creator: 'Sebastian',
	title: 'Front-end Dev',
	bio: " I'm focusing on growth TypeScript, React and Next.js skills. I enjoy coding, and I'm moving towards full stack. https://bento.me/sebastiansloma",
	location: 'Ibiza, España',
	locationLink: 'https://maps.app.goo.gl/Ky3Wk5xhD5kEjxBe9',
	email: 'sebastiansloma@gmail.com',
	items: GridItems,
} as const;
