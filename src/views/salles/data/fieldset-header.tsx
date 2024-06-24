import * as Select from '@/components/UI/select'
import * as Card from '@/components/card'
import { Controller, useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'

export const FieldsetHeader = () => {
  const { control } = useFormContext<DataFromSallesForm>()

  return (
    <fieldset className="flex h-full items-start gap-4">
      <Card.Root>
        <Card.ProfileImage />
        <Card.Section title="Vendedor" value="Gabriel Pedroso" />
        <Card.Separator />
        <Card.Section title="Nº do Pedido" value="#2323" />
      </Card.Root>

      <div className="mt-1 h-24 w-px bg-zinc-100 dark:bg-borderDarkMode" />

      <Controller
        name="input.pedidoVenda.lead.upsert.publicidade"
        control={control}
        render={({ field: { onChange } }) => (
          <Select.Root onValueChange={onChange}>
            <Select.Trigger
              label="Publicidade"
              placeholder="Selecione a publicidade..."
            />

            <Select.Content>
              <Select.Item value="instagram">Instagram</Select.Item>
              <Select.Item value="facebook">Facebook</Select.Item>
              <Select.Item value="whatsapp">WhatsApp</Select.Item>
            </Select.Content>
          </Select.Root>
        )}
      />
    </fieldset>
  )
}
