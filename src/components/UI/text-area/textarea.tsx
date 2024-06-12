import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextAreaProps extends ComponentProps<'textarea'> {
  children?: ReactNode
}

export const TextArea = ({ children, className, ...rest }: TextAreaProps) => {
  return (
    <textarea
      {...rest}
      placeholder="Digite aqui as observações adicionais..."
      className={twMerge(
        'dark:darkModeContrast h-full w-full resize-none rounded border border-neutral-300 bg-white p-3 text-xs shadow-sm outline-none placeholder:text-zinc-400 focus-within:border-green-300 focus-within:ring-2 focus-within:ring-green-100 disabled:cursor-not-allowed disabled:border-neutral-100 dark:border-zinc-800 dark:bg-darkModeContrast dark:text-white dark:placeholder:text-white/40 dark:focus-within:border-green-600 dark:focus-within:ring-green-400 disabled:dark:bg-darkModeContrast/10',
        className,
      )}
    >
      {children}
    </textarea>
  )
}
