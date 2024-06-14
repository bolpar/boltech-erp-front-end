import { Separator } from '@/components/separator'
import { EquipmentRegisterFieldset } from '@/views/equipment-and-chips/equipment/equipment-register-fieldset'
import { EquipmentTable } from '@/views/equipment-and-chips/equipment/equipment-table'

export default function Equipment() {
  return (
    <form>
      <EquipmentRegisterFieldset />
      <Separator />
      <EquipmentTable />
    </form>
  )
}
