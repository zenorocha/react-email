import * as React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Button } from './button';

type MenuElement = React.ElementRef<'nav'>;
type RootProps = React.ComponentPropsWithoutRef<'nav'>;

interface MenuProps extends RootProps {}

const GITHUB_URL = 'https://github.com/zenorocha/react-email';
const DISCORD_URL = 'https://github.com/zenorocha/react-email';

export const Menu = React.forwardRef<MenuElement, Readonly<MenuProps>>(
  ({ className, ...props }, forwardedRef) => (
    <nav
      ref={forwardedRef}
      className={classnames('flex items-center gap-6', className)}
      {...props}
    >
      <ul className="hidden sm:block">
        <MenuItem href={GITHUB_URL}>GitHub</MenuItem>
        <MenuItem href={DISCORD_URL}>Discord</MenuItem>
      </ul>
      <span className="bg-[#34343A] h-[20px] w-px mr-2 hidden sm:block" />
      <Button appearance="gradient" size="3">
        Go to Docs
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.75 6.75L19.25 12L13.75 17.25"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 12H4.75"
          />
        </svg>
      </Button>
    </nav>
  ),
);

Menu.displayName = 'Menu';

type MenuItemElement = React.ElementRef<'li'>;
type ItemProps = React.ComponentPropsWithoutRef<'li'>;

interface MenuItemProps extends ItemProps {
  href: string;
}

const MenuItem = React.forwardRef<MenuItemElement, Readonly<MenuItemProps>>(
  ({ className, children, href, ...props }, forwardedRef) => (
    <li
      ref={forwardedRef}
      className="inline-flex items-center justify-center"
      {...props}
    >
      <Link
        className={classnames(
          'inline-flex items-center justify-center text-[14px] px-4 font-medium rounded-md h-10',
          'hover:bg-white/10',
          'focus:bg-white/10 outline-none focus:ring-2 focus:ring-white/20',
          className,
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  ),
);

MenuItem.displayName = 'MenuItem';
