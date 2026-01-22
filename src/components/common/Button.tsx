import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50',

  {
    variants: {
      variant: {
        brownLight:
          'bg-[var(--color-brown-2)] hover:opacity-90',
        brownDark:
          'bg-[var(--color-brown-4)] hover:opacity-90',
      },
      size: {
        normal: 'px-8 py-3 text-body-medium',
        large: 'px-15 py-3 text-body-large',
      },
      textColor: {
        white: 'text-white',
        brown: 'text-[var(--color-brown-4)]',
      },
    },
        defaultVariants: {
          variant: 'brownLight',
          size: 'normal',
          textColor: 'white',
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
