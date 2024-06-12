import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SeparatorProps = ComponentProps<'div'>

export const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={twMerge('h-16 w-px bg-green-400 dark:bg-green-500', className)}
    />
  )
}
