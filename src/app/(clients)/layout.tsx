import { SwitchTheme } from '@/components/UI/switch-theme'
import { WorkFlowTabs } from '@/views/clients/work-flow-tabs'
import { UsersIcon } from 'lucide-react'
import { cookies } from 'next/headers'

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-white pt-8 dark:bg-darkMode">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5 text-zinc-500 dark:text-white" />
            <h1 className="text-lg font-medium text-zinc-500 dark:text-white">
              Clientes
            </h1>
          </div>

          <SwitchTheme cookieTheme={theme?.value as string} />
        </div>

        <WorkFlowTabs />
      </header>

      <section className="mt-10">{children}</section>
    </>
  )
}
