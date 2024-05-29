import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SeparatorProps = ComponentProps<'div'>

export const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={twMerge(
        'my-10 h-px w-full bg-slate-200 dark:bg-borderDarkMode',
        className,
      )}
    />
  )
}
