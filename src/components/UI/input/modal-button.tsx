'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { FilePenIcon, XIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalButtonProps {
  children: ReactNode
}

export const ModalButton = ({ children }: ModalButtonProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="focus-within:black dark:focus-within:white flex h-full w-40 items-center justify-center gap-2 rounded bg-green-400 text-white outline-none focus-within:border-green-800 focus-within:ring-2 focus-within:ring-green-800 hover:bg-green-500 dark:text-zinc-700 dark:focus-within:border-white ">
          Incluir
          <FilePenIcon className="h-4 w-4 text-white dark:text-zinc-700" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/80" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Dialog.Content className="fixed right-0 top-0 z-50 h-screen w-[50rem] bg-white dark:bg-darkMode">
            <Dialog.Close className="absolute right-4 top-4 rounded bg-neutral-200 p-2 dark:bg-darkModeContrast">
              <XIcon />
            </Dialog.Close>
            <div className="mx-4 mt-20">{children}</div>
          </Dialog.Content>
        </motion.div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
