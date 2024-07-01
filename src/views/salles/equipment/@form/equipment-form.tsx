'use client'

import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { FormProvider, useForm } from 'react-hook-form'
import { EquipmentSelectionFieldset } from '../equipment-selection-fieldset'
import { MobileDeviceRecordsFieldset } from '../mobile-device-records-fieldset'

export const EquipmentForm = () => {
  const equipmentForm = useForm<object>()
  const { handleSubmit } = equipmentForm

  function onSubmitEquipmentForm(data: object) {
    console.log(data)
  }

  return (
    <FormProvider {...equipmentForm}>
      <form onSubmit={handleSubmit(onSubmitEquipmentForm)}>
        <EquipmentSelectionFieldset />
        <MobileDeviceRecordsFieldset />
        <Separator />
        <Actions />
      </form>
    </FormProvider>
  )
}
