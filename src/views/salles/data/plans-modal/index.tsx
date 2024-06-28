'use client'

import { Button } from '@/components/UI/button'
import * as SelectionModal from '@/components/UI/selection-modal'
import { Spinner } from '@/components/UI/spinner'
import { useGetContracts } from '@/services/useGetContracts'
import { useGetCookie } from '@/services/useGetCookie'
import { getValueCookie } from '@/utils/getValueCookie'
import { setCookie } from '@/utils/setCookie'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CheckCircleIcon, ShieldAlertIcon } from 'lucide-react'
import { ComponentProps, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'
import { Plan } from './plan'

interface PlansModalProps extends ComponentProps<'div'> {}

export const PlansModal = ({ className }: PlansModalProps) => {
  const { data: contracts, isLoading } = useGetContracts()
  const {
    control,
    formState: { errors },
  } = useFormContext<DataFromSallesForm>()
  const [currentOption, setCurrentOption] = useState('')
  const { refetch } = useGetCookie({
    cookieName: 'currentOption',
  })

  const errorMessage = errors.input?.pedidoVenda

  async function handleStoreChoosenPlan() {
    await setCookie({ name: 'currentOption', value: currentOption })
    refetch()
  }

  async function handleGetChoosenPlan() {
    const optionSaved = await getValueCookie('currentOption')
    setCurrentOption(optionSaved)
  }

  // handleGetChoosenPlan()

  return (
    <SelectionModal.Root
      label="Selecione o plano desejado"
      className={className}
    >
      <SelectionModal.Trigger title="Planos" />

      <SelectionModal.Content className="flex max-w-[1400px] flex-col items-center gap-4 dark:bg-darkMode">
        <div className="flex items-center justify-center gap-4">
          {isLoading ? (
            <Spinner />
          ) : (
            <Controller
              name="input.pedidoVenda.modeloContrato.connect.id"
              control={control}
              render={({ field: { onChange } }) => (
                <RadioGroup.Root
                  defaultValue={currentOption}
                  onValueChange={(value) => {
                    onChange(value)
                    setCurrentOption(String(value))
                  }}
                >
                  <div className="flex items-center gap-4">
                    {contracts.map((contract) => {
                      return (
                        <Plan
                          key={contract.id}
                          id={contract.id}
                          currentOption={currentOption}
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
        </div>

        {!isLoading && (
          <SelectionModal.Close>
            <Button
              icon={CheckCircleIcon}
              variant="success"
              onClick={handleStoreChoosenPlan}
            >
              Confirmar
            </Button>
          </SelectionModal.Close>
        )}
      </SelectionModal.Content>

      <div className="flex flex-col gap-1">
        {errorMessage?.modeloContrato?.connect?.id?.message && (
          <div className="flex items-center gap-1">
            <ShieldAlertIcon className="h-4 w-4 text-red-500" />
            <span className="text-xs text-red-500">
              {errorMessage?.modeloContrato?.connect?.id?.message}
            </span>
          </div>
        )}

        {errorMessage?.valor?.connect?.id?.message && (
          <div className="flex items-center gap-1">
            <ShieldAlertIcon className="h-4 w-4 text-red-500" />
            <span className="text-xs text-red-500">
              {errorMessage?.valor?.connect?.id?.message}
            </span>
          </div>
        )}
      </div>
    </SelectionModal.Root>
  )
}
