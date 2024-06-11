'use client'

import { TabItem } from '@/components/workflow-tabs/tab-item'

export const WorkFlowTabs = () => {
  return (
    <div className="mt-3.5 flex items-center gap-4 border-b border-zinc-200 dark:border-borderDarkMode">
      <TabItem title="Clientes" path="/clientes/pesquisa" state="success" />
      <TabItem title="Equipamento" path="/clientes/equipamento" />
      <TabItem title="Chip" path="/clientes/chip" />
      <TabItem title="Teste" path="/clientes/teste" />
    </div>
  )
}
