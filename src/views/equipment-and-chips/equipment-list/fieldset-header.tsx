import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'

export const FieldsetHeader = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputText.Root label="IMEI">
          <InputText.Input placeHolder="Digite aqui o seu IMEI..." />
        </InputText.Root>
        <Select.Root>
          <Select.Trigger
            label="Situação"
            placeholder="Selecione a situação atual..."
          />
          <Select.Content>
            <Select.Item value="ativo">Ativo</Select.Item>
            <Select.Item value="inativo">Inativo</Select.Item>
            <Select.Item value="cancelado">Cancelado</Select.Item>
          </Select.Content>
        </Select.Root>
        <InputText.Root label="Protocolo">
          <InputText.Input placeHolder="Digite aqui o protocolo..." />
        </InputText.Root>
      </div>
    </fieldset>
  )
}
