import * as TextArea from '@/components/UI/text-area'
import * as Card from '@/components/card'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DataHeaderProps = ComponentProps<'header'>

export const DataHeader = ({ className }: DataHeaderProps) => {
  return (
    <header className={twMerge('flex items-center gap-4', className)}>
      <Card.Root>
        <Card.ProfileImage />
        <Card.Section title="Vendedor" value="Gabriel Pedroso" />
        <Card.Separator />
        <Card.Section title="Inscrição Estadual" value="#2323" />
        <Card.Separator />
        <Card.Section title="Tipo" value="Recorrente" />
      </Card.Root>

      <div className="mt-1 h-24 w-px bg-zinc-100 dark:bg-borderDarkMode" />

      <TextArea.Root label="Observações sobre o cliente" className="w-80">
        <TextArea.TextArea disabled>
          O cliente &quot;Gabriel Pedroso&quot; é um cliente que frequentemente
          faz uso de nosso serviço, além de sua empresa ter uma boa reputação.
        </TextArea.TextArea>
      </TextArea.Root>
    </header>
  )
}
