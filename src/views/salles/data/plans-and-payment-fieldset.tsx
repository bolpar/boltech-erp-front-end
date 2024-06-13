import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { TextArea } from '@/components/UI/textarea'
import { LegendFieldset } from '@/components/legend-fieldset'
import { UseFormRegister } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'
import { PlansModal } from './plans-modal'

interface PlansAndPaymentFieldsetProps {
  register: UseFormRegister<DataFromSallesForm>
}

export const PlansAndPaymentFieldset = ({
  register,
}: PlansAndPaymentFieldsetProps) => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>PLANOS E PAGAMENTO</LegendFieldset>

      <PlansModal />

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
        <Select.Root>
          <Select.Trigger
            placeholder="Selecione a forma de pagamento..."
            label="Forma de Pagamento"
          />
          <Select.Content>
            <Select.Item value="debito">Débito</Select.Item>
            <Select.Item value="credito">Credito</Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root>
          <Select.Trigger
            placeholder="Selecione o número de parcelas..."
            label="Parcela"
          />
          <Select.Content>
            <Select.Item value="1">1x</Select.Item>
            <Select.Item value="2">2x</Select.Item>
            <Select.Item value="3">3x</Select.Item>
            <Select.Item value="4">4x</Select.Item>
          </Select.Content>
        </Select.Root>

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
