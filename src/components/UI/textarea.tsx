import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextAreaProps extends ComponentProps<'label'> {
  label: string
}

export const TextArea = ({ label, className }: TextAreaProps) => {
  return (
    <label className={twMerge('col-span-2', className)}>
      <span className="justify-centerfont-medium mb-2 flex w-fit min-w-fit items-center pl-2 text-xs text-zinc-700 before:absolute before:mr-2 before:mt-[0.10rem] before:h-3 before:w-0.5 before:-translate-x-[0.50rem] before:bg-green-500 dark:text-white">
        {label}
      </span>
      <textarea
        placeholder="Digite aqui as observações adicionais..."
        className="dark:darkModeContrast h-full w-full rounded border border-neutral-300 bg-white p-3 text-xs shadow-sm outline-none focus-within:border-green-300 focus-within:ring-2 focus-within:ring-green-100 dark:border-green-500 dark:bg-darkModeContrast dark:text-white dark:placeholder:text-white dark:focus-within:border-green-600 dark:focus-within:ring-green-400"
      />
    </label>
  )
}
