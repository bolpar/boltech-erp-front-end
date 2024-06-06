import { Button } from '@/components/UI/button'
import * as Select from '@/components/UI/select'
import * as Card from '@/components/card'
import { Separator } from '@/components/separator'
import { Table } from '@/components/table'
import { CheckIcon, XIcon } from 'lucide-react'

export const CardReceiptModalContent = () => {
  return (
    <>
      <header>
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-white">
          Recebimento Cartão
        </h2>
      </header>

      <Separator className="my-4" />

      <div>
        <Card.Root>
          <Card.Section title="Valor" value="R$ 559, 90" />
        </Card.Root>

        <Separator className="my-4" />

        <div className="grid grid-cols-2 gap-4">
          <Select.Root>
            <Select.Trigger
              placeholder="Selecione o cartão..."
              label="Cartão"
            />
            <Select.Content>
              <Select.Item value="credito">Crédito</Select.Item>
              <Select.Item value="debito">Débito</Select.Item>
            </Select.Content>
          </Select.Root>
          <Select.Root>
            <Select.Trigger
              placeholder="Selecione o número de parcelas..."
              label="Parcelas"
            />
            <Select.Content>
              <Select.Item value="1">1x</Select.Item>
              <Select.Item value="2">2x</Select.Item>
              <Select.Item value="3">3x</Select.Item>
              <Select.Item value="4">4x</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <Button variant="register" icon={CheckIcon} className="mt-4">
          Incluir
        </Button>

        <Separator className="my-4" />

        <Table />

        <Separator />

        <footer className="flex items-center justify-end gap-2">
          <Button icon={CheckIcon} variant="register">
            Confirmar
          </Button>
          <Button icon={XIcon} variant="error">
            Cancelar
          </Button>
        </footer>
      </div>
    </>
  )
}
