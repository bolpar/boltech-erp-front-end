'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends ComponentProps<'div'> {
  label: string
  children: ReactNode
}

export const Root = ({ label, children, className }: RootProps) => {
  return (
    <Dialog.Root>
      <div
        className={twMerge(
          'mb-10 flex w-fit flex-col items-center justify-center gap-4 rounded border px-8 py-4 shadow-sm dark:border-green-500 dark:bg-neutral-600',
          className,
        )}
      >
        <span className="text-sm text-zinc-700 dark:text-white">{label}</span>
        {children}
      </div>
    </Dialog.Root>
  )
}
