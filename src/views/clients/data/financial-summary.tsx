import { LegendFieldset } from '@/components/legend-fieldset'
import { PriceCard } from '@/components/price-card'

export const FinancialSummary = () => {
  return (
    <>
      <LegendFieldset className="col-span-full my-0">
        RESUMO FINANCEIRO
      </LegendFieldset>
      <div className="col-span-full my-10 flex items-center justify-between gap-8">
        <PriceCard label="Faturas Pagas" price="2/12" />
        <PriceCard label="Total Geral Recebido" price="R$ 119, 80" />
        <PriceCard label="Recebido" price="R$ 119, 80" />
        <PriceCard label="A Receber" price="R$ 599, 00" />
      </div>
    </>
  )
}
