'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { State } from './state'

interface TabItemProps {
  title: string
  path: string
  state?: 'success' | 'error' | 'pendent'
}

export const TabItem = ({ title, path, state = 'pendent' }: TabItemProps) => {
  const router = usePathname()
  const isSelected = router === path

  return (
    <Link href={path}>
      <button className="relative flex items-center justify-center gap-4 px-4 py-3 text-center text-xs font-medium text-zinc-600 dark:text-white">
        <span
          className={
            isSelected
              ? 'flex items-center justify-center gap-4 text-center text-green-400'
              : 'flex items-center justify-center gap-4 rounded-lg text-center transition-all hover:text-green-300'
          }
        >
          {title}
          <State state={state} />
        </span>

        {isSelected && (
          <motion.div
            // layoutId="activeTab"
            className="absolute -bottom-px  left-0 right-0 h-0.5 bg-green-400"
          />
        )}
      </button>
    </Link>
  )
}
