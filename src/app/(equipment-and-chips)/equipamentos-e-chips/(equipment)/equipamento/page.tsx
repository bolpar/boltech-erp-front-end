import { Separator } from '@/components/separator'
import { List } from '@/views/equipment-and-chips/equipment-list/list'
import { EquipmentRegisterFieldset } from '@/views/equipment-and-chips/equipment/equipment-register-fieldset'

export default function Equipment() {
  return (
    <form>
      <EquipmentRegisterFieldset />
      <Separator />
      <List />
    </form>
  )
}
