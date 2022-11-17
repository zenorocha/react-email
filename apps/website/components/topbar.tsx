import * as React from 'react';
import { Logo } from './logo';
import { Menu } from './menu';
import classnames from 'classnames';

type TopbarElement = React.ElementRef<'header'>;
type RootProps = React.ComponentPropsWithoutRef<'header'>;

interface TopbarProps extends RootProps {}

export const Topbar = React.forwardRef<TopbarElement, Readonly<TopbarProps>>(
  ({ className, ...props }, forwardedRef) => (
    <header
      className={classnames(
        'h-[80px] md:h-[100px] flex items-center justify-between',
        className,
      )}
      {...props}
    >
      <Logo />
      <Menu />
    </header>
  ),
);

Topbar.displayName = 'Topbar';
