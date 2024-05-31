'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface CheckboxProps extends CheckboxPrimitive.CheckboxIndicatorProps {
  label: string
}

export const Checkbox = ({ label, className }: CheckboxProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <CheckboxPrimitive.Root
        className={twMerge(
          'flex h-[25px] w-[25px] rounded-sm border border-neutral-300',
          className,
        )}
      >
        <CheckboxPrimitive.Indicator className="flex h-full w-full items-center justify-center bg-green-500">
          <CheckIcon className="ml-0.5 mt-0.5 h-4 w-4 text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className="text-xs text-zinc-700 dark:text-white">{label}</label>
    </div>
  )
}
