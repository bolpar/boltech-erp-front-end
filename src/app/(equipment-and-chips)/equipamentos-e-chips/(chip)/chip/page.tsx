import { Separator } from '@/components/separator'
import { ChipRegisterFieldset } from '@/views/equipment-and-chips/chip/chip-register-fieldset'
import { ChipTable } from '@/views/equipment-and-chips/chip/chip-table'

export default function Chip() {
  return (
    <form>
      <ChipRegisterFieldset />
      <Separator />
      <ChipTable />
    </form>
  )
}
