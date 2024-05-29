import { SwitchTheme } from '@/components/UI/switch-theme'
import { WorkFlowTabs } from '@/components/workflow-tabs'
import { ShoppingBasketIcon } from 'lucide-react'

export default function SalesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white pt-8 dark:bg-darkMode">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBasketIcon className="h-5 w-5 text-zinc-500 dark:text-white" />
            <h1 className="text-lg font-medium text-zinc-500 dark:text-white">
              Fluxo de Vendas (Dados)
            </h1>
          </div>
          <SwitchTheme />
        </div>

        <WorkFlowTabs />
      </header>

      <section className="mt-10">{children}</section>
    </>
  )
}
