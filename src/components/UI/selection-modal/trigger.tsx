'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ListIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { Button } from '../button'

interface TriggerProps extends ComponentProps<'button'> {
  title: string
}

export const Trigger = ({ title }: TriggerProps) => {
  return (
    <Dialog.Trigger asChild>
      <Button variant="default" icon={ListIcon}>
        {title}
      </Button>
    </Dialog.Trigger>
  )
}
