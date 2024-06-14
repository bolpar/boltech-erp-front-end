import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadProps extends ComponentProps<'thead'> {
  children: ReactNode
}

export const Head = ({ children, className }: HeadProps) => {
  return (
    <thead
      className={twMerge(
        'bg-gradient-to-tl from-green-300 to-green-500',
        className,
      )}
    >
      <tr>{children}</tr>
    </thead>
  )
}

interface HeadItemProps extends ComponentProps<'th'> {
  children: ReactNode
}

export const HeadItem = ({ children, className }: HeadItemProps) => {
  return (
    <th className={twMerge('py-2 text-xs text-green-800', className)}>
      {children}
    </th>
  )
}
