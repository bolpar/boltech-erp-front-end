'use client'

import { FilePenIcon } from 'lucide-react'

export const ModalButton = () => {
  return (
    <button className="focus-within:black dark:focus-within:white flex h-full w-40 items-center justify-center gap-2 rounded bg-green-400 text-white outline-none focus-within:border-green-800 focus-within:ring-2 focus-within:ring-green-800 hover:bg-green-500 dark:text-zinc-700 dark:focus-within:border-white ">
      Incluir
      <FilePenIcon className="h-4 w-4 text-white dark:text-zinc-700" />
    </button>
  )
}
