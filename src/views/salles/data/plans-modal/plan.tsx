import * as Select from '@/components/UI/select'
import { formatPrice } from '@/utils/formatPrice'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CheckIcon } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from '../../@form/data-form-schema'

interface PlanProps extends RadioGroup.RadioGroupItemProps {
  value: string
  id: string
  contract: {
    id: string
    descricao: string
    modalidade: string
    valor_total: number
    valor_mensal: number
    valor_ativacao: number
    valores: Array<{
      id: string
      nome: string
      valor: number
      formasPagamentos: Array<{
        id: string
        tipo: string
        parcelas: number
      }>
    }>
  }
}

export const Plan = ({ value, id, contract, ...rest }: PlanProps) => {
  const { control } = useFormContext<DataFromSallesForm>()

  return (
    <div className="flex flex-col items-center rounded border p-2 dark:border-darkModeContrast dark:bg-darkModeContrast">
      <label className="mb-2 flex w-full items-center gap-2  rounded border p-2 dark:border-borderDarkMode">
        <RadioGroup.Item
          value={value}
          id={id}
          className="flex h-6 w-6 cursor-default items-center justify-center rounded-full border bg-white outline-none dark:border-darkMode dark:bg-darkMode"
          {...rest}
        >
          <RadioGroup.Indicator>
            <CheckIcon className="h-4 w-4 text-green-500" />
          </RadioGroup.Indicator>
        </RadioGroup.Item>

        <span>
          Plano {id}: <b>{contract.modalidade}</b>
        </span>
      </label>

      <div className="mb-4 flex w-72 flex-col items-center rounded bg-gradient-to-tr from-green-100 to-green-300 p-4 text-center text-sm dark:bg-gradient-to-tr dark:from-green-300 dark:to-green-500 dark:text-black">
        <label className="flex w-full items-center justify-between">
          Valor Mensal:{' '}
          <span className="font-bold">
            {formatPrice(contract.valor_mensal)}
          </span>
        </label>
        <label className="flex w-full items-center justify-between">
          Valor Ativação:{' '}
          <span className="font-bold">
            {formatPrice(contract.valor_ativacao)}
          </span>
        </label>
        {/*
         <label className="items-cente flex w-full justify-between">
          Formas de Pagamento:
            <span className="font-bold">
              {contract.valores.length > 0
                ? contract.valores.map((valor) => valor.nome)
                : '-'}
            </span>
          </label>
        */}
      </div>

      <div className="w-full">
        <Controller
          name="input.pedidoVenda.valor.connect.id"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select.Root onValueChange={onChange}>
              <Select.Trigger
                label="Valores Disponíveis"
                placeholder="Selecione o valor"
              />
              <Select.Content>
                {contract.valores.map((contractValue) => {
                  return (
                    <Select.Item
                      key={contractValue.id}
                      value={contractValue.id}
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <span>{`${contractValue.nome} - `}</span>
                        <span className="font-bold">
                          {formatPrice(contractValue.valor)}
                        </span>
                      </div>
                    </Select.Item>
                  )
                })}
              </Select.Content>
            </Select.Root>
          )}
        />
      </div>
    </div>
  )
}
