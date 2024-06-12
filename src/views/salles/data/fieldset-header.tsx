import * as Select from '@/components/UI/select'
import * as Card from '@/components/card'

export const FieldsetHeader = () => {
  return (
    <fieldset className="flex h-full items-start gap-4">
      <Card.Root>
        <Card.Section title="Nº do Pedido" value="#2323" />
        <Card.Separator />
        <Card.ProfileImage />
        <Card.Section title="Vendedor" value="Gabriel Pedroso" />
      </Card.Root>

      <div className="mt-1 h-24 w-px bg-zinc-100 dark:bg-borderDarkMode" />

      <Select.Root>
        <Select.Trigger
          label="Publicidade"
          placeholder="Selecione a publicidade..."
        />

        <Select.Content>
          <Select.Item value="instagram">Instagram</Select.Item>
          <Select.Item value="facebook">Facebook</Select.Item>
          <Select.Item value="twitter">Twitter</Select.Item>
          <Select.Item value="whatsapp">WhatsApp</Select.Item>
        </Select.Content>
      </Select.Root>
    </fieldset>
  )
}
