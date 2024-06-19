import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends ComponentProps<'label'> {
  label?: string
  children: ReactNode
  optional?: boolean
}

export const Root = ({ label, children, optional, className }: RootProps) => {
  return (
    <label
      className={twMerge(
        'col-span-1 flex h-full flex-col text-xs text-zinc-700',
        className,
      )}
    >
      {label && (
        <div className="flex items-center justify-between">
          <span className="justify-centerfont-medium mb-2 flex w-fit min-w-fit items-center pl-2 text-xs font-semibold text-zinc-700 before:absolute before:mr-2 before:mt-[0.10rem] before:h-3 before:w-0.5 before:-translate-x-[0.50rem] before:bg-green-500 dark:text-white">
            {label}
          </span>

          {optional && (
            <span className="text-[0.7rem] text-zinc-700 dark:text-white/80">
              (Opcional)
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2">{children}</div>
    </label>
  )
}
