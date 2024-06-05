import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { SwitchTheme } from '@/components/UI/switch-theme'
import * as Card from '@/components/card'
import { Separator } from '@/components/separator'

export const CardReceiptModalContent = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-white">
          Recebimento Cartão
        </h2>
        <SwitchTheme />
      </header>

      <Separator className="my-4" />

      <div>
        <Card.Root>
          <Card.Section title="Valor" value="R$ 559, 90" />
        </Card.Root>

        <Separator className="my-4" />

        <div className="grid grid-cols-2 gap-4">
          <InputText.Root label="Valor">
            <InputText.Input placeHolder="Digite o valor..." />
          </InputText.Root>
          <Select.Root>
            <Select.Trigger
              placeholder="Selecione a data de vencimento..."
              label="Vencimento"
            />
            <Select.Content>
              <Select.Item value="maio">Maio</Select.Item>
              <Select.Item value="junho">Junho</Select.Item>
              <Select.Item value="julho">Julho</Select.Item>
              <Select.Item value="agosto">Agosto</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </>
  )
}
