import { ElementType, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'px-4 py-2 font-medium text-sm font-normal rounded transition-all flex items-center justify-center gap-1 outline-none focus-within:border-black focus-within:ring-2 focus-within:ring-black dark:focus-within:border-white dark:focus-within:ring-2 dark:focus-within:ring-white text-white w-fit dark:text-zinc-900',

  variants: {
    color: {
      success: 'bg-green-500 hover:bg-green-600',
      error: 'bg-red-500 hover:bg-red-600',
      pendent: 'bg-yellow-500 hover:bg-yellow-600',
      edit: 'bg-blue-500 hover:bg-blue-600 ',
    },
  },
})

interface ButtonProps extends VariantProps<typeof button> {
  children: ReactNode
  icon: ElementType
}

export const Button = ({ color, icon: Icon, children }: ButtonProps) => {
  return (
    <button className={button({ color })}>
      <Icon className="h-4 w-4 text-white dark:text-zinc-900" />
      {children}
    </button>
  )
}
