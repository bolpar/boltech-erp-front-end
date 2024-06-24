import * as InputField from '@/components/UI/input'
import * as Select from '@/components/UI/select'
import { Spinner } from '@/components/UI/spinner'
import { TextArea } from '@/components/UI/textarea'
import { LegendFieldset } from '@/components/legend-fieldset'
import { useGetEquipamentTypes } from '@/services/query/useGetEquipamentTypes'
import { Controller, useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'

export const EquipmentFieldset = () => {
  const {
    formState: { errors },
    control,
  } = useFormContext<DataFromSallesForm>()
  const errorMessage = errors?.input?.pedidoVenda?.equipamentoPedido
  const { data: equipamentTypes, isLoading } = useGetEquipamentTypes()

  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>EQUIPAMENTO</LegendFieldset>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Controller
            control={control}
            name="input.pedidoVenda.equipamentoPedido.equipamentoTipo.connect.id"
            render={({ field: { onChange } }) => (
              <Select.Root onValueChange={onChange}>
                <Select.Trigger
                  label="Tipo do Aparelho"
                  placeholder="Selecione seu tipo de aparelho..."
                  className=""
                />
                <Select.Content>
                  {isLoading && <Spinner />}

                  {!isLoading &&
                    equipamentTypes.map((equipament) => {
                      if (!equipament.status) return null

                      return (
                        <Select.Item key={equipament.id} value={equipament.id}>
                          {equipament.nome}
                        </Select.Item>
                      )
                    })}
                </Select.Content>
                <Select.Error className="mt-2">
                  {errorMessage?.equipamentoTipo?.connect?.id?.message}
                </Select.Error>
              </Select.Root>
            )}
          />
        </div>

        <InputField.Root label="Quantidade">
          <InputField.Number
            fieldName="input.pedidoVenda.equipamentoPedido.quantidade"
            min={1}
            placeHolder="Digite a quantidade..."
          />
          <InputField.Error>
            {errorMessage?.quantidade?.message as string}
          </InputField.Error>
        </InputField.Root>
      </div>

      <TextArea
        fieldName="input.pedidoVenda.equipamentoPedido.observacao"
        label="Observações Adicionais"
        optional
        className="mb-4"
      />
    </fieldset>
  )
}
