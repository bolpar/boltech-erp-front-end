import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BodyProps extends ComponentProps<'tbody'> {
  children: ReactNode
}

export const Body = ({ children, className }: BodyProps) => {
  return <tbody className={className}>{children}</tbody>
}

interface RowProps extends ComponentProps<'tr'> {
  children: ReactNode
}

export const Row = ({ children, className }: RowProps) => {
  return <tr className={className}>{children}</tr>
}

interface BodyItemProps extends ComponentProps<'td'> {
  children: ReactNode
  alternative?: boolean
}

export const BodyItem = ({
  children,
  alternative,
  className,
}: BodyItemProps) => {
  if (alternative) {
    return (
      <td
        className={twMerge(
          'white:text-zinc-700 bg-zinc-200 py-2 text-center text-sm dark:bg-neutral-800 ',
          className,
        )}
      >
        {children}
      </td>
    )
  }

  return (
    <td
      className={twMerge(
        'white:text-zinc-700 bg-zinc-50 py-2 text-center text-sm dark:bg-neutral-700',
        className,
      )}
    >
      {children}
    </td>
  )
}
