'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface CloseProps extends Dialog.DialogCloseProps {
  children: ReactNode
}

export const Close = ({ children, ...rest }: CloseProps) => {
  return (
    <Dialog.Close {...rest} asChild>
      {children}
    </Dialog.Close>
  )
}
