import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDownIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface TriggerProps extends SelectPrimitive.SelectTriggerProps {
  label: string
  placeholder: string
}

export const Trigger = ({ label, placeholder, className }: TriggerProps) => {
  return (
    <div className="relative flex flex-col">
      <label className="mb-2 pl-2 text-xs font-bold text-zinc-700 before:absolute before:mr-2 before:mt-[0.10rem] before:h-3 before:w-0.5 before:-translate-x-[0.50rem]  before:bg-green-500 dark:text-white">
        {label}
      </label>
      <SelectPrimitive.Trigger
        className={twMerge(
          'flex h-full items-center justify-between gap-2 rounded border border-neutral-300 bg-white p-2 text-xs text-zinc-700 shadow-sm outline-none focus-within:border-green-300 focus-within:ring-2 focus-within:ring-green-100 dark:border-green-500 dark:bg-neutral-600 dark:text-white dark:focus-within:border-green-600 dark:focus-within:ring-green-400',
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDownIcon className="h-5 w-5 text-zinc-700 dark:text-white" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    </div>
  )
}
