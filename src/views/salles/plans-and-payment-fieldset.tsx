import * as InputText from '@/components/UI/input-text'
import { TextArea } from '@/components/UI/textarea'
import { LegendFieldset } from '@/components/legend-fieldset'
import { ListIcon } from 'lucide-react'

export const PlansAndPaymentFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>PLANOS E PAGAMENTO</LegendFieldset>

      <div className="mb-10 flex w-fit flex-col items-center justify-center gap-4 rounded border px-8 py-4 shadow-sm dark:border-green-500 dark:bg-neutral-600">
        <span className="text-sm text-zinc-700 dark:text-white">
          Selecione o plano desejado
        </span>
        <button className="flex items-center justify-center gap-2 rounded bg-blue-400 px-4 py-2 text-sm font-medium text-white focus-within:ring-black dark:focus-within:border-white dark:focus-within:ring-2 dark:focus-within:ring-white">
          <ListIcon className="h-4 w-4" />
          Planos
        </button>
      </div>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <InputText.Root label="Plano">
          <InputText.Input
            placeHolder="Digite seu plano..."
            value="Plano Recorrente -  Valor (R$ 559, 00)*"
            readOnly
            disabled
          />
        </InputText.Root>
        <InputText.Root label="Tipo do Aparelho">
          <InputText.Input placeHolder="Digite seu tipo de aparelho..." />
        </InputText.Root>
        <InputText.Root label="Quantidade">
          <InputText.Input placeHolder="Digite a quantidade..." />
        </InputText.Root>
      </div>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <InputText.Root label="Forma de Pagamento">
          <InputText.Input placeHolder="Digite sua forma de pagamento..." />
        </InputText.Root>
        <InputText.Root label="Parcela">
          <InputText.Input placeHolder="Digite o número de parcelas..." />
        </InputText.Root>

        <div className="col-span-1 grid grid-cols-2 items-center gap-4">
          <InputText.Root label="Desconto e Acrescimo">
            <InputText.Input placeHolder="Digite o o desconto e acrescimo..." />
          </InputText.Root>
          <InputText.Root label="Valor Desconto e Acrescimo">
            <InputText.Input placeHolder="Digite o desconto e acrescio..." />
          </InputText.Root>
        </div>
      </div>

      <TextArea label="Observações Adicionais" className="mb-8 mt-6" />
    </fieldset>
  )
}
