import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { AddressFieldset } from '@/views/salles/data/address-fieldset'
import { BasicInfoFieldset } from '@/views/salles/data/basic-info-fieldset'
import { FieldsetHeader } from '@/views/salles/data/fieldset-header'
import { FinalValue } from '@/views/salles/data/final-value'
import { PlansAndPaymentFieldset } from '@/views/salles/data/plans-and-payment-fieldset'

export default function Data() {
  return (
    <form>
      <FieldsetHeader />
      <BasicInfoFieldset />
      <AddressFieldset />
      <PlansAndPaymentFieldset />
      <Separator />
      <FinalValue />
      <Separator />
      <Actions />
    </form>
  )
}
