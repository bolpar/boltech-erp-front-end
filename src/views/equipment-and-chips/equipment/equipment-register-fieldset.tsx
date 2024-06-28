import * as InputText from '@/components/UI/input'
import * as Select from '@/components/UI/select'
import { TextArea } from '@/components/UI/textarea'
import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'

export const EquipmentRegisterFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <InputText.Root label="IMEI">
        <InputText.Text placeHolder="Digite aqui o seu IMEI..." />
      </InputText.Root>
      <InputText.Root label="Data da Compra">
        <InputText.Text placeHolder="Digite aqui a data da compra..." />
      </InputText.Root>
      <Select.Root>
        <Select.Trigger
          label="Número do Chip"
          placeholder="Selecione o número do chip..."
        />
        <Select.Content>
          <Select.Item value="8181">8181</Select.Item>
          <Select.Item value="8182">8182</Select.Item>
          <Select.Item value="8183">8183</Select.Item>
        </Select.Content>
      </Select.Root>

      <InputText.Root label="Situação">
        <InputText.Text placeHolder="Digite aqui a situação..." />
      </InputText.Root>
      <InputText.Root label="Data da Venda">
        <InputText.Text placeHolder="Digite aqui a data da venda..." />
      </InputText.Root>
      <Select.Root>
        <Select.Trigger
          label="Operadora"
          placeholder="Selecione a operadora..."
        />
        <Select.Content>
          <Select.Item value="tim">Tim</Select.Item>
          <Select.Item value="oi">Oi</Select.Item>
          <Select.Item value="vivo">Vivo</Select.Item>
        </Select.Content>
      </Select.Root>

      <InputText.Root label="Protocolo">
        <InputText.Text placeHolder="Digite aqui o protocolo..." />
      </InputText.Root>
      <InputText.Root label="IP do Servidor">
        <InputText.Text placeHolder="Digite aqui o IP do servidor..." />
      </InputText.Root>
      <InputText.Root label="Porta do Servidor">
        <InputText.Text placeHolder="Digite aqui a porta do servidor..." />
      </InputText.Root>

      <InputText.Root label="Modelo">
        <InputText.Text placeHolder="Digite aqui o modelo..." />
      </InputText.Root>
      <Select.Root>
        <Select.Trigger
          label="Bateria"
          placeholder="Selecione a tipo de bateria..."
        />
        <Select.Content>
          <Select.Item value="bateria-1">Bateria 1</Select.Item>
          <Select.Item value="bateria-2">Bateria 2</Select.Item>
          <Select.Item value="bateria-3">Bateria 3</Select.Item>
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
