'use client'

import { TabItem } from '@/components/workflow-tabs/tab-item'

export const WorkFlowTabs = () => {
  return (
    <div className="mt-3.5 flex items-center gap-4 border-b border-zinc-200 dark:border-borderDarkMode">
      <TabItem
        title="Fornecedores"
        path="/fornecedores/pesquisa"
        state="success"
      />
      <TabItem title="Dados" path="/fornecedores/dados" />
      <TabItem title="Financeiro" path="/fornecedores/financeiro" />
    </div>
  )
}
