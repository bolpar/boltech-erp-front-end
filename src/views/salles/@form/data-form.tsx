'use client'

import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { createBasicInfo } from '@/services/mutations/create-basic-info'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AddressFieldset } from '../data/address-fieldset'
import { BasicInfoFieldset } from '../data/basic-info-fieldset'
import { FieldsetHeader } from '../data/fieldset-header'
import { FinalValue } from '../data/final-value'
import { PlansAndPaymentFieldset } from '../data/plans-and-payment-fieldset'
import { DataFromSallesForm, dataFormSchema } from './data-form-schema'

export const DataForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFromSallesForm>({
    resolver: zodResolver(dataFormSchema),
    defaultValues: {
      input: {
        pedidoVenda: {
          // desconto: 1,
          contatos: {
            create: [
              {
                tipo: 'Email',
                padrao: true,
              },
              {
                tipo: 'Telefone',
                padrao: true,
              },
              {
                tipo: 'Celular',
                padrao: true,
              },
            ],
          },
          // equipamentoPedido: {
          //   equipamentoTipo: {
          //     connect: {
          //       id: '1',
          //     },
          //   },
          //   quantidade: 10,
          // },
          formaPagamento: {
            connect: {
              id: '1',
            },
          },
          // modeloContrato: {
          //   connect: {
          //     id: '1',
          //   },
          // },
          valor: {
            connect: {
              id: '1',
            },
          },
          lead: {
            upsert: {
              nome: 'Teste',
              data_nascimento: '1999-01-01',
              documento: '04721151110',
              documento_tipo: 'CPF',
              is_cliente: false,
              observacao: 'teste',
              publicidade: 'teste',
            },
          }
        },
      },
    },
  })

  async function onSubmitData(data: DataFromSallesForm) {
    console.log(`Formulário: ${JSON.stringify(data)}`)

    try {
      const response = await createBasicInfo({ input: data.input })
      console.log(`Resposta: ${JSON.stringify(response)}`)
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <FieldsetHeader />
      <BasicInfoFieldset register={register} errors={errors} />
      <AddressFieldset register={register} errors={errors} />
      <PlansAndPaymentFieldset register={register} errors={errors} />
      <Separator />
      <FinalValue />
      <Separator />
      <Actions />
    </form>
  )
}
