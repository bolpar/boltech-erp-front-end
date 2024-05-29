import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { AddressFieldset } from '@/views/salles/address-fieldset'
import { BasicInfoFieldset } from '@/views/salles/basic-info-fieldset'
import { FieldsetHeader } from '@/views/salles/fieldset-header'
import { FinalValue } from '@/views/salles/final-value'
import { PlansAndPaymentFieldset } from '@/views/salles/plans-and-payment-fieldset'

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
