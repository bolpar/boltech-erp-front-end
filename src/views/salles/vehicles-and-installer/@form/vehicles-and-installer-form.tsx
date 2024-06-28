'use client'

import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { FieldsetHeader } from '@/views/salles/vehicles-and-installer/fieldset-header'
import { InstallationFieldset } from '@/views/salles/vehicles-and-installer/installation-fieldset'
import { SchedullingFieldset } from '@/views/salles/vehicles-and-installer/scheduling-fieldset'
import { VehicleFieldset } from '@/views/salles/vehicles-and-installer/vehicle-fieldset'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  VehiclesAndInstallerFormData,
  vehiclesAndInstallerFormSchema,
} from './vehicles-and-installer-schema'

export const VehiclesAndInstallerForm = () => {
  const vehiclesAndInstallerForm = useForm<VehiclesAndInstallerFormData>({
    resolver: zodResolver(vehiclesAndInstallerFormSchema),
  })

  const { handleSubmit } = vehiclesAndInstallerForm

  async function onSubmitVehiclesAndInstallerData(
    data: VehiclesAndInstallerFormData,
  ) {
    console.log('Formulário: ', data)
  }

  return (
    <FormProvider {...vehiclesAndInstallerForm}>
      <form onSubmit={handleSubmit(onSubmitVehiclesAndInstallerData)}>
        <FieldsetHeader />
        <VehicleFieldset />
        <InstallationFieldset />
        <SchedullingFieldset />
        <Separator />
        <Actions />
      </form>
    </FormProvider>
  )
}
