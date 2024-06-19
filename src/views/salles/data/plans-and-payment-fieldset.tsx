import * as InputText from '@/components/UI/input-text/index'
import * as Select from '@/components/UI/select'
import { TextArea } from '@/components/UI/textarea'
import { LegendFieldset } from '@/components/legend-fieldset'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'
import { PlansModal } from './plans-modal'

interface PlansAndPaymentFieldsetProps {
  register: UseFormRegister<DataFromSallesForm>
  errors: FieldErrors<DataFromSallesForm>
}

export const PlansAndPaymentFieldset = ({
  register,
  errors,
}: PlansAndPaymentFieldsetProps) => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>PLANOS E PAGAMENTO</LegendFieldset>

      <PlansModal />

      <div className="col-span-full grid grid-cols-3 gap-4">
        <InputText.Root label="Plano">
          <InputText.Input
            placeHolder="Plano Recorrente -  Valor (R$ 559, 00)*"
            value="1"
            // readOnly
            // disabled
            register={register('input.pedidoVenda.modeloContrato.connect.id')}
          />
        </InputText.Root>
        <InputText.Root label="Tipo do Aparelho">
          <InputText.Input
            placeHolder="Digite seu tipo de aparelho..."
            value="1"
            readOnly
            register={register(
              'input.pedidoVenda.equipamentoPedido.equipamentoTipo.connect.id',
            )}
          />
          <InputText.Error>
            {
              errors?.input?.pedidoVenda?.equipamentoPedido?.equipamentoTipo
                ?.connect?.id?.message as string
            }
          </InputText.Error>
        </InputText.Root>
        <InputText.Root label="Quantidade">
          <InputText.Input
            type="number"
            min={1}
            // value={10}
            placeHolder="Digite a quantidade..."
            register={register(
              'input.pedidoVenda.equipamentoPedido.quantidade',
            )}
            // pattern="[0-9]*"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <InputText.Error>
            {
              errors?.input?.pedidoVenda?.equipamentoPedido?.quantidade?.message as string
            }
          </InputText.Error>
        </InputText.Root>
      </div>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <Select.Root>
          <Select.Trigger
            placeholder="Selecione a forma de pagamento..."
            label="Forma de Pagamento"
            className="h-fit"
          />
          <Select.Content>
            <Select.Item value="debito">Débito</Select.Item>
            <Select.Item value="credito">Credito</Select.Item>
          </Select.Content>
          {
            errors.input?.pedidoVenda?.formaPagamento?.connect?.id
              ?.message as string
          }
        </Select.Root>
        <Select.Root>
          <Select.Trigger
            placeholder="Selecione o número de parcelas..."
            label="Parcela"
            className="h-fit"
          />
          <Select.Content>
            <Select.Item value="1">1x</Select.Item>
            <Select.Item value="2">2x</Select.Item>
            <Select.Item value="3">3x</Select.Item>
            <Select.Item value="4">4x</Select.Item>
          </Select.Content>
        </Select.Root>
        {errors.input?.pedidoVenda?.parcelas?.message}

        <div className="col-span-1 grid grid-cols-2 items-center gap-4">
          <InputText.Root label="Desconto">
            <InputText.Input
              type="number"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeHolder="Digite o o desconto..."
              register={register('input.pedidoVenda.desconto')}
            />
            <InputText.Error>
              {errors?.input?.pedidoVenda?.desconto?.message as string}
            </InputText.Error>
          </InputText.Root>
          <InputText.Root label="Acrescimo">
            <InputText.Input
              type="number"
              min={1}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeHolder="Digite o acrescimo..."
              register={register('input.pedidoVenda.acrescimo')}
            />
            <InputText.Error>
              {errors?.input?.pedidoVenda?.acrescimo?.message as string}
            </InputText.Error>
          </InputText.Root>
        </div>
      </div>

      <TextArea label="Observações Adicionais" className="mb-8 mt-6" />
    </fieldset>
  )
}
