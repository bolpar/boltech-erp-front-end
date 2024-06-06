import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { EquipmentSelectionFieldset } from '@/views/salles/equipment/equipment-selection-fieldset'
import { MobileDeviceRecordsFieldset } from '@/views/salles/equipment/mobile-device-records-fieldset'

export default function Equipment() {
  return (
    <form>
      <EquipmentSelectionFieldset />
      <MobileDeviceRecordsFieldset />
      <Separator />
      <Actions />
    </form>
  )
}
