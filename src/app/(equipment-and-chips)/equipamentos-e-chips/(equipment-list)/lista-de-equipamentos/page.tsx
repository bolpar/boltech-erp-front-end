import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { FieldsetHeader } from '@/views/equipment-and-chips/equipment-list/fieldset-header'
import { List } from '@/views/equipment-and-chips/equipment-list/list'

export default function EquipmentList() {
  return (
    <form>
      <FieldsetHeader />
      <Separator />
      <List />
      <Separator />
      <Actions />
    </form>
  )
}
