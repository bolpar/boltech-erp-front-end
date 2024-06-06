import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { BalanceFieldset } from '@/views/salles/recepit/balance-fieldset'
import { FieldsetHeader } from '@/views/salles/recepit/fieldset-header'
import { ReceiptOfOrderFieldset } from '@/views/salles/recepit/receipt-of-order-fieldset'

export default function Receipt() {
  return (
    <form>
      <FieldsetHeader />
      <ReceiptOfOrderFieldset />
      <BalanceFieldset />
      <Separator />
      <Actions />
    </form>
  )
}
