import { ComponentProps, ElementType, ReactNode, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'px-4 py-2 font-medium text-sm font-normal rounded transition-all flex items-center justify-center gap-1 outline-none focus-within:border-black focus-within:ring-2 focus-within:ring-black dark:focus-within:border-white dark:focus-within:ring-2 dark:focus-within:ring-white text-white w-fit dark:text-zinc-900',

  variants: {
    variant: {
      default: 'bg-blue-500 hover:bg-blue-600',
      register: 'bg-green-500 hover:bg-green-600',
      success: 'bg-green-500 hover:bg-green-600',
      error: 'bg-red-500 hover:bg-red-600',
      pendent: 'bg-yellow-500 hover:bg-yellow-600',
      edit: 'bg-blue-500 hover:bg-blue-600',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  icon: ElementType
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon: Icon, children, variant, className, ...props }, ref) => {
    return (
      <button {...props} ref={ref} className={button({ variant, className })}>
        <Icon className="h-4 w-4 text-white dark:text-zinc-900" />
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
