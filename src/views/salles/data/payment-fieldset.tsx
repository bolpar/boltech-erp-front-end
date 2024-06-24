import * as InputField from '@/components/UI/input/index'
import * as Select from '@/components/UI/select'
import { Spinner } from '@/components/UI/spinner'
import { LegendFieldset } from '@/components/legend-fieldset'
import { useGetNumberOfInstallments } from '@/services/query/useGetNumberOfInstallments'
import { useGetPaymentMethods } from '@/services/query/useGetPaymentMethods'
import { Controller, useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'
import { FinalValue } from './final-value'

export const PaymentFieldset = () => {
  const {
    formState: { errors },
  } = useFormContext<DataFromSallesForm>()
  const { control, watch } = useFormContext<DataFromSallesForm>()
  const valueId = watch('input.pedidoVenda.valor.connect.id')
  const paymentMethodId = watch('input.pedidoVenda.formaPagamento.connect.id')

  const { data: paymentMethods, isLoading } = useGetPaymentMethods({
    id: valueId,
  })
  const {
    data: totalNumberOfInstallments,
    isLoading: isLoadingTotalNumberOfInstallments,
  } = useGetNumberOfInstallments({ id: paymentMethodId })

  const errorMessage = errors.input?.pedidoVenda

  return (
    <>
      <fieldset className="mb-4 grid grid-cols-3 gap-4">
        <LegendFieldset>PAGAMENTO</LegendFieldset>

        <div className="col-span-full grid grid-cols-3 gap-4">
          <Controller
            name="input.pedidoVenda.formaPagamento.connect.id"
            control={control}
            render={({ field: { onChange } }) => (
              <Select.Root onValueChange={onChange} disabled={!valueId}>
                <Select.Trigger
                  label="Forma de Pagamento"
                  placeholder="Selecione a forma de pagamento..."
                />
                <Select.Content>
                  {isLoading && <Spinner />}
                  {!isLoading &&
                    paymentMethods?.formasPagamentos.map(
                      (paymentMethod, index) => {
                        return (
                          <Select.Item key={index} value={paymentMethod.id}>
                            {paymentMethod.tipo}
                          </Select.Item>
                        )
                      },
                    )}
                </Select.Content>
                <Select.Error>
                  {errorMessage?.formaPagamento?.connect?.id?.message as string}
                </Select.Error>
              </Select.Root>
            )}
          />
        </div>

        <Controller
          name="input.pedidoVenda.parcelas"
          control={control}
          render={({ field: { onChange } }) => (
            <Select.Root disabled={!paymentMethodId} onValueChange={onChange}>
              <Select.Trigger
                label="Número de Parcelas"
                placeholder="Selecione o número de parcelas..."
                className="h-fit py-[0.605rem]"
              />
              <Select.Content>
                {isLoadingTotalNumberOfInstallments && <Spinner />}
                {!isLoadingTotalNumberOfInstallments &&
                  totalNumberOfInstallments?.parcelas &&
                  Array.from({
                    length: totalNumberOfInstallments?.parcelas,
                  }).map((_, index) => {
                    return (
                      <Select.Item
                        key={index + 1}
                        value={(index + 1).toString()}
                      >
                        {index + 1}
                        <span>x</span>
                      </Select.Item>
                    )
                  })}
              </Select.Content>
            </Select.Root>
          )}
        />

        <InputField.Root label="Desconto" optional>
          <InputField.Number
            fieldName="input.pedidoVenda.desconto"
            placeHolder="Digite o desconto..."
          />
          <InputField.Error>
            {errorMessage?.desconto?.message as string}
          </InputField.Error>
        </InputField.Root>

        <InputField.Root label="Acréscimo" optional>
          <InputField.Number
            fieldName="input.pedidoVenda.acrescimo"
            placeHolder="Digite o acrescimo..."
          />
          <InputField.Error>
            {errorMessage?.acrescimo?.message as string}
          </InputField.Error>
        </InputField.Root>
      </fieldset>

      <FinalValue />
    </>
  )
}
