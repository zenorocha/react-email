import * as React from 'react';
import { Button } from './button';

type HeroElement = React.ElementRef<'main'>;
type RootProps = React.ComponentPropsWithoutRef<'main'>;

interface HeroProps extends RootProps {}

export const Hero = React.forwardRef<HeroElement, Readonly<HeroProps>>(
  ({ ...props }, forwardedRef) => (
    <main
      ref={forwardedRef}
      className="flex flex-col justify-center max-w-3xl mx-auto"
      {...props}
    >
      <h1 className="text-4xl md:text-[70px] font-bold text-center leading-[104%] text-opacity-[85%] text-white before:content-['The_next_generation_of_writing_emails'] before:absolute before:left-0 before:top-0 before:bg-clip-text before:text-transparent before:bg-[length:200%] before:bg-shine before:w-full before:animate-[shine_2s_ease-in-out_infinite] relative">
        The next generation of writing emails
      </h1>
      <p className="text-lg md:text-[22px] text-center tracking-[-1px] leading-[155%] font-normal text-[#A0A0A0] mt-6">
        A collection of high-quality, unstyled components for creating beautiful
        emails. It reduces the pain of coding responsive emails with dark mode
        support.
      </p>

      <div className="flex items-center gap-4 justify-center mt-6">
        <Button size="4">
          Explore components
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
      </div>
    </main>
  ),
);

Hero.displayName = 'Hero';
