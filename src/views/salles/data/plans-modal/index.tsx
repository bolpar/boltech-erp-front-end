'use client'

import * as SelectionModal from '@/components/UI/selection-modal'
import { Spinner } from '@/components/UI/spinner'
import { useGetContracts } from '@/services/query/useGetContracts'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ComponentProps } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from '../../@form/data-form-schema'
import { Plan } from './plan'

type PlansModalProps = ComponentProps<'div'>

export const PlansModal = ({ className }: PlansModalProps) => {
  const { data: contracts, isLoading } = useGetContracts()
  const { control } = useFormContext<DataFromSallesForm>()

  return (
    <SelectionModal.Root
      label="Selecione o plano desejado"
      className={className}
    >
      <SelectionModal.Trigger title="Planos" />

      <SelectionModal.Content className="flex max-w-[1400px] items-center justify-center gap-4 dark:bg-darkMode">
        {isLoading ? (
          <Spinner />
        ) : (
          <Controller
            name="input.pedidoVenda.modeloContrato.connect.id"
            control={control}
            render={({ field: { onChange } }) => (
              <RadioGroup.Root onValueChange={onChange}>
                <div className="flex items-center gap-4">
                  {contracts.map((contract) => {
                    return (
                      <Plan
                        key={contract.id}
                        id={contract.id}
                        value={contract.id}
                        contract={contract}
                      />
                    )
                  })}
                </div>
              </RadioGroup.Root>
            )}
          />
        )}
      </SelectionModal.Content>
    </SelectionModal.Root>
  )
}
