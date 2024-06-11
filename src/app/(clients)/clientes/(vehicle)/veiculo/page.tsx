import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { RegisterClientForm } from '@/views/clients/vehicle/register-client-form'
import { VehiclesList } from '@/views/clients/vehicle/vehicles-list'

export default function Vehicle() {
  return (
    <>
      <RegisterClientForm />
      <Separator />
      <Actions />
      <Separator />
      <VehiclesList />
    </>
  )
}
