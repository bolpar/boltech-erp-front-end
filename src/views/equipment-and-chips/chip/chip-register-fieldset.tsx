import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { TextArea } from '@/components/UI/textarea'
import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'

export const ChipRegisterFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <InputText.Root label="Situação">
        <InputText.Input placeHolder="Digite aqui a situação..." />
      </InputText.Root>
      <InputText.Root label="Plano">
        <InputText.Input placeHolder="Digite aqui o plano..." />
      </InputText.Root>
      <InputText.Root label="Status">
        <InputText.Input placeHolder="Digite aqui o status..." />
      </InputText.Root>

      <InputText.Root label="Valor">
        <InputText.Input placeHolder="Digite aqui o valor..." />
      </InputText.Root>
      <InputText.Root label="Número do Chip">
        <InputText.Input placeHolder="Digite aqui o número do chip..." />
      </InputText.Root>
      <InputText.Root label="Fornecedor">
        <InputText.Input placeHolder="Digite aqui o fornecedor..." />
      </InputText.Root>

      <Select.Root>
        <Select.Trigger
          label="Operadora"
          placeholder="Selecione o tipo de operadora..."
        />
        <Select.Content>
          <Select.Item value="operadora-1">Operadora 1</Select.Item>
          <Select.Item value="operadora-2">Operadora 2</Select.Item>
          <Select.Item value="operadora-3">Operadora 3</Select.Item>
        </Select.Content>
      </Select.Root>
      <InputText.Root label="Data da Compra">
        <InputText.Input placeHolder="Digite aqui a data da compra..." />
      </InputText.Root>

      <Select.Root>
        <Select.Trigger
          label="Campo Ativação"
          placeholder="Selecione o campo de ativação..."
        />
        <Select.Content>
          <Select.Item value="operadora-1">Operadora 1</Select.Item>
          <Select.Item value="operadora-2">Operadora 2</Select.Item>
          <Select.Item value="operadora-3">Operadora 3</Select.Item>
        </Select.Content>
      </Select.Root>
      <Select.Root>
        <Select.Trigger
          label="Campo Carencia"
          placeholder="Selecione o campo carencia..."
        />
        <Select.Content>
          <Select.Item value="operadora-1">Operadora 1</Select.Item>
          <Select.Item value="operadora-2">Operadora 2</Select.Item>
          <Select.Item value="operadora-3">Operadora 3</Select.Item>
        </Select.Content>
      </Select.Root>

      <TextArea label="Observações" className="col-span-full" />

      <Separator className="col-span-full" />

      <div className="col-span-full">
        <Actions />
      </div>
    </fieldset>
  )
}
