'use client'

import { SearchIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SearchButtonProps = ComponentProps<'button'>

export const SearchButton = ({ className }: SearchButtonProps) => {
  return (
    <button
      className={twMerge(
        'focus-within:black dark:focus-within:white flex h-full w-12 items-center justify-center rounded bg-green-400 outline-none focus-within:border-green-800 focus-within:ring-2 focus-within:ring-green-800 hover:bg-green-500 dark:focus-within:border-white',
        className,
      )}
    >
      <SearchIcon className="h-4 w-4 text-white dark:text-zinc-700" />
    </button>
  )
}
