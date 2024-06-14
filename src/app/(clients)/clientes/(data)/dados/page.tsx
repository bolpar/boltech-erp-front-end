import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { ClientAddressFieldset } from '@/views/clients/data/client-address-fieldset'
import { ClientInfoFieldset } from '@/views/clients/data/client-info-fieldset'
import { ContactInfoFieldset } from '@/views/clients/data/contact-info-fieldset'
import { FinancialSummary } from '@/views/clients/data/financial-summary'
import { DataHeader } from '@/views/clients/data/header'
import { VehiclesTable } from '@/views/clients/data/vehicles-table'

export default function Data() {
  return (
    <form className="grid grid-cols-4 gap-4">
      <DataHeader className="col-span-full" />
      <ClientInfoFieldset />
      <ContactInfoFieldset />
      <ClientAddressFieldset />
      <Separator className="col-span-full my-2" />
      <Actions className="col-span-full" />
      <FinancialSummary />
      <VehiclesTable />
    </form>
  )
}
