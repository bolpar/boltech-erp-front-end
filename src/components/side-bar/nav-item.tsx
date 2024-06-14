'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  path: string
  icon: ElementType
}

export const NavItem = ({ title, path, icon: Icon }: NavItemProps) => {
  const pathname = usePathname()
  const formattedPath = path.split('/')
  const isActive = pathname.startsWith('/' + formattedPath[1])

  if (isActive) {
    return (
      <Link
        href={path}
        className="group flex items-center gap-3 rounded bg-green-100 px-3 py-2 dark:bg-green-300"
      >
        <Icon className="dark:group:text-green-900 h-5 w-5 font-bold text-green-500 dark:text-green-900" />
        <span className="group:text-green-500 dark:group:text-green-900 font-bold text-green-500 dark:text-green-900">
          {title}
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={path}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-green-100 dark:hover:bg-green-300"
    >
      <Icon className="h-5 w-5 text-zinc-500 dark:text-white dark:group-hover:text-green-900" />
      <span className="font-medium text-zinc-500 group-hover:text-green-500 dark:text-white dark:group-hover:text-green-900">
        {title}
      </span>
    </Link>
  )
}
