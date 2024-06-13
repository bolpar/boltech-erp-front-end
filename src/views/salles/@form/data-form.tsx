'use client'

import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { AddressFieldset } from '@/views/salles/data/address-fieldset'
import { BasicInfoFieldset } from '@/views/salles/data/basic-info-fieldset'
import { FieldsetHeader } from '@/views/salles/data/fieldset-header'
import { FinalValue } from '@/views/salles/data/final-value'
import { PlansAndPaymentFieldset } from '@/views/salles/data/plans-and-payment-fieldset'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { DataFromSallesForm, dataFormSchema } from './data-form-schema'

export const DataForm = () => {
  const { register, handleSubmit } = useForm<DataFromSallesForm>({
    resolver: zodResolver(dataFormSchema),
  })

  async function onSubmit() {
    // Chama a mutation aqui...
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldsetHeader />
      <BasicInfoFieldset register={register} />
      <AddressFieldset register={register} />
      <PlansAndPaymentFieldset register={register} />
      <Separator />
      <FinalValue />
      <Separator />
      <Actions />
    </form>
  )
}
