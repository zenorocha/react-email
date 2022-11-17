import * as React from 'react';
import classnames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

type ButtonElement = React.ElementRef<'button'>;
type RootProps = React.ComponentPropsWithoutRef<'button'>;

type Appearance = 'white' | 'gradient';
type Size = '1' | '2' | '3' | '4';

interface ButtonProps extends RootProps {
  appearance?: Appearance;
  size?: Size;
}

export const Button = React.forwardRef<ButtonElement, Readonly<ButtonProps>>(
  (
    { appearance = 'white', className, children, size = '2', ...props },
    forwardedRef,
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={classnames(
          getSize(size),
          getAppearance(appearance),
          'inline-flex items-center font-medium border',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

const getAppearance = (appearance: Appearance | undefined) => {
  switch (appearance) {
    default:
    case 'white':
      return [
        'bg-white text-black',
        'hover:bg-white/90',
        'focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-white/90',
      ];
    case 'gradient':
      return [
        'bg-gradient backdrop-blur-[20px] border-[#34343A]',
        'hover:bg-gradientHover',
        'focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-gradientHover',
      ];
  }
};

const getSize = (size: Size | undefined) => {
  switch (size) {
    case '1':
      return '';
    default:
    case '2':
      return 'text-[14px] h-8 px-3 rounded-md gap-2';
    case '3':
      return 'text-[14px] h-10 px-4 rounded-md gap-2';
    case '4':
      return 'text-base h-11 px-4 rounded-md gap-2';
  }
};
