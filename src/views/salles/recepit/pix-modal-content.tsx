import * as Card from '@/components/card'
import { Separator } from '@/components/separator'
import { Button } from '@/components/UI/button'
import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { TextArea } from '@/components/UI/textarea'
import { CheckIcon, XIcon } from 'lucide-react'
import Image from 'next/image'

export const PixModalContent = () => {
  return (
    <>
      <header>
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-white">
          Cobrança PIX
        </h2>
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
          <TextArea label="Observações" />
        </div>

        <Separator />

        <div className="flex items-end gap-4">
          <Image
            src="/assets/pix.png"
            alt="QRCode Pix"
            width={142}
            height={129}
          />
          <Button icon={CheckIcon} variant="register">
            Incluir
          </Button>
        </div>

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
