import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { AddressFieldset } from '@/views/data/address-fieldset'
import { BasicInfoFieldset } from '@/views/data/basic-info-fieldset'
import { FieldsetHeader } from '@/views/data/fieldset-header'
import { FinalValue } from '@/views/data/final-value'
import { PlansAndPaymentFieldset } from '@/views/data/plans-and-payment-fieldset'

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
