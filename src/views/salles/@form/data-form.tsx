'use client'

import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { AddressFieldset } from '@/views/salles/data/address-fieldset'
import { BasicInfoFieldset } from '@/views/salles/data/basic-info-fieldset'
import { FieldsetHeader } from '@/views/salles/data/fieldset-header'
import { FinalValue } from '@/views/salles/data/final-value'
import { PlansAndPaymentFieldset } from '@/views/salles/data/plans-and-payment-fieldset'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import { BasicInfoForm, basicInfoFormSchema } from './data-form-schema'

export const DataForm = () => {
  // const { register, handleSubmit } = useForm<BasicInfoForm>({
  //   resolver: zodResolver(basicInfoFormSchema),
  // })

  // async function onSubmit() {
  //   // Chama a mutation aqui...
  // }

  return (
    <form>
      <FieldsetHeader />
      <BasicInfoFieldset />
      <AddressFieldset />
      <PlansAndPaymentFieldset />
      <Separator />
      <FinalValue />
      <Separator />
      <Actions />
    </form>
  )
}
