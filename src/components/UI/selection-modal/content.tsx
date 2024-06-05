'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContentProps extends Dialog.DialogContentProps {
  children: ReactNode
}

export const Content = ({ children, className }: ContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />
      <Dialog.Content
        className={twMerge(
          'fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] focus:outline-none',
          className,
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
