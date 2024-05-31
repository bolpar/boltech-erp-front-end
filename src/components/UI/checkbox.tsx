'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface CheckboxProps extends CheckboxPrimitive.CheckboxIndicatorProps {
  label: string
}

export const Checkbox = ({ label, className }: CheckboxProps) => {
  return (
    <label className="flex items-center justify-center gap-2">
      <CheckboxPrimitive.Root
        className={twMerge(
          'flex h-[25px] w-[25px] rounded-sm border border-neutral-300 dark:border-green-500',
          className,
        )}
      >
        <CheckboxPrimitive.Indicator className="flex h-full w-full items-center justify-center border border-green-500 bg-green-500">
          <CheckIcon className="h-4 w-4 text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span className="text-xs text-zinc-700 dark:text-white">{label}</span>
    </label>
  )
}
