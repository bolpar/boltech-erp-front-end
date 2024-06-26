import { Path } from '@/utils/pathType'
import { ComponentProps, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputProps<FormFieldInput> extends ComponentProps<'input'> {
  fieldName?: Path<FormFieldInput>
  children?: ReactNode
  placeHolder: string
}

export function Number<FormFieldInput>({
  fieldName,
  placeHolder,
  children,
  className,
  ...rest
}: InputProps<FormFieldInput>) {
  const { register } = useFormContext()

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        min={0}
        placeholder={placeHolder}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
          }
        }}
        className={twMerge(
          'dark:darkModeContrast h-full w-full truncate rounded border border-neutral-300 bg-white p-3 shadow-sm outline-none placeholder:text-opacity-65 focus-within:border-green-300 focus-within:ring-2 focus-within:ring-green-100 disabled:cursor-not-allowed disabled:border-neutral-100 disabled:text-zinc-400 dark:border-neutral-800 dark:bg-darkModeContrast dark:text-white dark:placeholder:text-white/40 dark:focus-within:border-green-600 dark:focus-within:ring-green-400 disabled:dark:bg-darkModeContrast/10 disabled:dark:text-white/20',
          className,
        )}
        {...(fieldName && { ...register(fieldName) })}
        {...rest}
      />
      {children}
    </div>
  )
}
