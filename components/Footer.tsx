import { ThemeToggle } from './ThemeToggle';

const Footer = () => {
	return (
		<div className='flex items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800'>
			<div className='container flex items-center justify-between'>
				<div className='text-xs text-neutral-500'>
					Built by @Seb| ©2023 Seb. All Rights Reserved
				</div>
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Footer;
