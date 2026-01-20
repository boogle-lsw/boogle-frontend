import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  `
    inline-flex items-center justify-center
    rounded-lg font-semibold whitespace-nowrap
    transition-colors
    disabled:pointer-events-none disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        brownLight: `
          bg-[var(--color-brown-2)]
          text-white
          hover:opacity-90
        `,
        brownDark: `
          bg-[var(--color-brown-4)]
          text-white
          hover:opacity-90
        `,
      },
      size: {
        normal: 'px-5 py-3 text-body-medium',
        large: 'px-6 py-4 text-body-large',
      },
    },
    defaultVariants: {
      variant: 'brownLight',
      size: 'normal',
    },
  }
);

type ButtonProps =
  PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>
  >;

export default function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
