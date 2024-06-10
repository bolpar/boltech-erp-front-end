'use client'

import { TabItem } from './tab-item'

export const WorkFlowTabs = () => {
  return (
    <div className="mt-3.5 flex items-center gap-4 border-b border-zinc-200 dark:border-borderDarkMode">
      <TabItem
        title="Lista de Equipamentos"
        path="/equipamentos-e-chips/lista-de-equipamentos"
        state="success"
      />
      <TabItem title="Equipamento" path="/equipamentos-e-chips/equipamento" />
      <TabItem title="Chip" path="/equipamentos-e-chips/chip" />
      <TabItem title="Teste" path="/equipamentos-e-chips/teste" />
    </div>
  )
}
