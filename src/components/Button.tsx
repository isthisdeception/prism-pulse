import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
    href?: undefined
  }

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  as = 'button',
  ...rest
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0f] disabled:opacity-50 disabled:pointer-events-none'

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-sm gap-1.5',
    md: 'text-sm tracking-normal px-5 py-2.5 rounded-sm gap-2',
    lg: 'text-base tracking-normal px-7 py-3 rounded-sm gap-2.5'
  }[size]

  const variantStyles = {
    primary:
      'bg-amber-400 text-neutral-950 font-semibold hover:bg-amber-300 active:bg-amber-500 shadow-sm shadow-amber-400/10',
    secondary:
      'bg-[#181a24] text-[#f3f3f6] border border-[#2e3346] hover:bg-[#222533] hover:border-[#3d435c] active:bg-[#12131a]',
    outline:
      'border border-neutral-700 text-neutral-200 hover:border-amber-400/80 hover:text-amber-300 hover:bg-amber-400/5',
    ghost:
      'text-neutral-400 hover:text-neutral-100 hover:bg-white/5 active:bg-white/10'
  }[variant]

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`

  if (as === 'a') {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  )
}
