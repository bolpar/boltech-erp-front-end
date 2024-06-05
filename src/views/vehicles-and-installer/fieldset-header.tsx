import * as Card from '@/components/card'

export const FieldsetHeader = () => {
  return (
    <fieldset className="flex h-full items-start gap-4">
      <fieldset className="flex h-full items-start gap-4">
        <Card.Root>
          <Card.Section title="Tipo do Aparelho" value="Valor do aparelho" />
          <Card.Section title="Quantidade" value="1/1" />
        </Card.Root>
      </fieldset>
    </fieldset>
  )
}
