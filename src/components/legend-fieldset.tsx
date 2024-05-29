import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TitleFieldsetProps extends ComponentProps<'legend'> {
  children: ReactNode
}

export const LegendFieldset = ({ children, className }: TitleFieldsetProps) => {
  return (
    <legend
      className={twMerge(
        'my-10 flex w-full items-center justify-center text-sm font-bold text-zinc-600',
        className,
      )}
    >
      <div className="w-full border-b dark:border-borderDarkMode" />
      <h3 className="w-fit min-w-fit px-6 text-xs font-bold text-green-500">
        {children}
      </h3>
      <div className="w-full border-b dark:border-borderDarkMode" />
    </legend>
  )
}
