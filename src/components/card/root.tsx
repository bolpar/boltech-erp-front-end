import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex w-fit items-center justify-center rounded-xl bg-green-200 p-4 dark:bg-gradient-to-tr dark:from-green-300 dark:to-green-500">
      <div className="flex items-center justify-center gap-4">{children}</div>
    </div>
  )
}
