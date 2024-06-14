import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { EquipmentTable } from '@/views/equipment-and-chips/equipment-list/equipment-table'
import { FieldsetHeader } from '@/views/equipment-and-chips/equipment-list/fieldset-header'

export default function EquipmentList() {
  return (
    <form>
      <FieldsetHeader />
      <Separator />
      <EquipmentTable />
      <Separator />
      <Actions />
    </form>
  )
}
