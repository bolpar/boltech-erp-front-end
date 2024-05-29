import Link from 'next/link'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  path: string
  icon: ElementType
}

export const NavItem = ({ title, path, icon: Icon }: NavItemProps) => {
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
