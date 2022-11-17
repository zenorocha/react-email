import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import Link from 'next/link';

type FooterElement = React.ElementRef<'footer'>;
type RootProps = React.ComponentPropsWithoutRef<'footer'>;

export const Footer = React.forwardRef<FooterElement, Readonly<RootProps>>(
  ({ className, ...props }, forwardedRef) => (
    <footer
      ref={forwardedRef}
      className={classnames(
        'text-center h-[80px] flex items-center justify-center',
        className,
      )}
      {...props}
    >
      <p className="text-xs md:text-[14px] text-[#a0a0a0] inline-flex items-center gap-2">
        Created by{' '}
        <Link href="/" className="inline-flex items-center gap-2 text-white">
          <Image
            className="rounded-full inline-block border border-gray-8"
            src="/static/bu.jpg"
            alt={''}
            width="20"
            height="20"
          />
          Bu Kinoshita
        </Link>{' '}
        and{' '}
        <Link href="/" className="inline-flex items-center gap-2 text-white">
          <Image
            className="rounded-full inline-block border border-gray-8"
            src="/static/zeno.jpg"
            alt={''}
            width="20"
            height="20"
          />
          Zeno Rocha
        </Link>
      </p>
    </footer>
  ),
);

Footer.displayName = 'Footer';
