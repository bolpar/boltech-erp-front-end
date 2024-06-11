import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export const Root = ({ children, className }: RootProps) => {
  return (
    <div className={twMerge('overflow-hidden rounded shadow-sm', className)}>
      <table className="w-full">{children}</table>
    </div>
  )
}
