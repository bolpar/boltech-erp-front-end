import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex w-fit items-center justify-center rounded-lg border border-green-100/80 bg-green-100/30 p-4 shadow-sm dark:border-green-500">
      <div className="flex items-center justify-center gap-4">{children}</div>
    </div>
  )
}
