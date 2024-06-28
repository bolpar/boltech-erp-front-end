'use client'

import { Path } from '@/utils/pathType'
import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface TextAreaProps<FormFieldInput> extends ComponentProps<'label'> {
  fieldName?: Path<FormFieldInput>
  label: string
  optional?: boolean
}

export function TextArea<FormFieldInput>({
  label,
  optional,
  fieldName,
  className,
}: TextAreaProps<FormFieldInput>) {
  const { register } = useFormContext()

  return (
    <label className={twMerge('col-span-2', className)}>
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

      <textarea
        className="dark:darkModeContrast h-full w-full resize-none rounded border border-neutral-300 bg-white p-3 text-xs shadow-sm outline-none placeholder:text-zinc-400 focus-within:border-green-300 focus-within:ring-2 focus-within:ring-green-100 dark:border-zinc-800 dark:bg-darkModeContrast dark:text-white dark:placeholder:text-white/40 dark:focus-within:border-green-600  dark:focus-within:ring-green-400"
        placeholder="Digite aqui as observações adicionais..."
        {...(fieldName && { ...register(fieldName) })}
      />
    </label>
  )
}
