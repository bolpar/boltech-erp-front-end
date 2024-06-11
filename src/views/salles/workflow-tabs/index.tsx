'use client'

import { TabItem } from '@/components/workflow-tabs/tab-item'

export const WorkFlowTabs = () => {
  return (
    <div className="mt-3.5 flex items-center gap-4 border-b border-zinc-200 dark:border-borderDarkMode">
      <TabItem title="Dados" path="/vendas/dados" state="success" />
      <TabItem title="Veículos Instalador" path="/vendas/veiculos-instalador" />
      <TabItem title="Equipamento" path="/vendas/equipamento" />
      <TabItem title="Recebimento" path="/vendas/recebimento" />
      <TabItem title="Contrato" path="/vendas/contrato" state="error" />
      <TabItem
        title="Teste de Equipamento"
        path="/vendas/teste-de-equipamento"
      />
      <TabItem title="Resumo e Conclusão" path="/vendas/resumo-e-conclusao" />
    </div>
  )
}
