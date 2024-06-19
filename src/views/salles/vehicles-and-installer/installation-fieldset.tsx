import { Button } from '@/components/UI/button'
import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { TextArea } from '@/components/UI/textarea'
import { LegendFieldset } from '@/components/legend-fieldset'
import { CheckIcon } from 'lucide-react'

export const InstallationFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>INSTALAÇÃO</LegendFieldset>

      <InputText.Root label="Técnico">
        <InputText.Input placeHolder="Digite aqui o técnico...">
          <InputText.SearchButton />
        </InputText.Input>
      </InputText.Root>
      <InputText.Root label="Valor de Instalação">
        <InputText.Input placeHolder="Digite aqui o valor de instalação..." />
      </InputText.Root>
      <InputText.Root label="Valor de Deslocamento">
        <InputText.Input placeHolder="Digite aqui o valor de deslocamento..." />
      </InputText.Root>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <Select.Root>
          <Select.Trigger
            label="Endereço"
            placeholder="Selecione o endereço..."
          />
          <Select.Content>
            <Select.Item value="1">Rua Carlos de Laer 1221, Hauer</Select.Item>
            <Select.Item value="2">Rua Carlos de Laer 1221, Hauer</Select.Item>
            <Select.Item value="3">Rua Carlos de Laer 1221, Hauer</Select.Item>
          </Select.Content>
        </Select.Root>

        <InputText.Root label="Data e Hora">
          <InputText.Input placeHolder="Digite aqui a data e hora..." />
        </InputText.Root>
      </div>

      <TextArea label="Observações" />

      <div className="col-span-full mt-8">
        <Button variant="success" icon={CheckIcon}>
          Cadastrar
        </Button>
      </div>
    </fieldset>
  )
}
