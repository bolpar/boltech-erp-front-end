import { ShieldAlert } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ErrorProps extends ComponentProps<'span'> {
  children: ReactNode
}

export const Error = ({ children, className }: ErrorProps) => {
  return (
    <span
      className={twMerge(
        'col-span-full flex items-center gap-1 text-xs text-red-500',
        className,
      )}
    >
      {children && (
        <>
          <ShieldAlert className="h-4 w-4" />
          {children}
        </>
      )}
    </span>
  )
}
