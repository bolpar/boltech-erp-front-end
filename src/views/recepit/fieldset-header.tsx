import * as InputText from '@/components/UI/input-text'
import * as Card from '@/components/card'

export const FieldsetHeader = () => {
  return (
    <fieldset className="grid grid-cols-2 gap-4">
      <div className="col-span-full grid grid-cols-3">
        <InputText.Root label="Número do Pedido">
          <InputText.Input placeHolder="Digite o número do pedido..." />
          <InputText.SearchButton />
        </InputText.Root>
      </div>

      <Card.Root>
        <Card.ProfileImage />
        <Card.Section title="Vendedor" value="Gabriel Pedroso" />
      </Card.Root>
    </fieldset>
  )
}
