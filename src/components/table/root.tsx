import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export const Root = ({ children, className }: RootProps) => {
  return (
    <div
      className={twMerge(
        'overflow-hidden rounded border border-neutral-300 shadow-sm dark:border-neutral-700',
        className,
      )}
    >
      <table className="w-full">{children}</table>
    </div>
  )
}
