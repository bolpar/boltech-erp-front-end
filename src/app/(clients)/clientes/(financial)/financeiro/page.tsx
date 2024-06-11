import { Separator } from '@/components/separator'
import { ClientsList } from '@/views/clients/financial/clients-list'
import { FinancialHeader } from '@/views/clients/financial/financial-header'

export default function Financial() {
  return (
    <>
      <FinancialHeader />
      <Separator />
      <ClientsList />
    </>
  )
}
