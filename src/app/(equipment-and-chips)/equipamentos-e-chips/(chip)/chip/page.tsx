import { Separator } from '@/components/separator'
import { ChipRegisterFieldset } from '@/views/equipment-and-chips/chip/chip-register-fieldset'
import { List } from '@/views/equipment-and-chips/chip/list'

export default function Chip() {
  return (
    <form>
      <ChipRegisterFieldset />
      <Separator />
      <List />
    </form>
  )
}
