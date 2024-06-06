import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { FieldsetHeader } from '@/views/salles/vehicles-and-installer/fieldset-header'
import { InstallationFieldset } from '@/views/salles/vehicles-and-installer/installation-fieldset'
import { SchedullingFieldset } from '@/views/salles/vehicles-and-installer/scheduling-fieldset'
import { VehicleFieldset } from '@/views/salles/vehicles-and-installer/vehicle-fieldset'

export default function VehiclesAndInstaller() {
  return (
    <form>
      <FieldsetHeader />
      <VehicleFieldset />
      <InstallationFieldset />
      <SchedullingFieldset />
      <Separator />
      <Actions />
    </form>
  )
}
