import { Button } from '@/components/UI/button'
import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { LegendFieldset } from '@/components/legend-fieldset'
import { CheckIcon } from 'lucide-react'

export const EquipmentSelectionFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset className="mb-10 mt-0">
        SELEÇÃO DE EQUIPAMENTO
      </LegendFieldset>
      <InputText.Root label="Tipo do Aparelho">
        <InputText.Input
          placeHolder="Digite o tipo do aparelho..."
          value="Aparelho Boltech"
          disabled
          readOnly
        />
      </InputText.Root>
      <InputText.Root label="Quantidade">
        <InputText.Input
          placeHolder="Digite a quantidade..."
          value="1/3"
          disabled
          readOnly
        />
      </InputText.Root>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-3 gap-4">
          <Select.Root>
            <Select.Trigger label="IMEI" placeholder="Selecione o IMEI..." />
            <Select.Content>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="abacaxi">Abacaxi</Select.Item>
              <Select.Item value="abacate">Abacate</Select.Item>
              <Select.Item value="uva">Uva</Select.Item>
            </Select.Content>
          </Select.Root>

          <InputText.Root label="Telefone">
            <InputText.Input placeHolder="Digite o número de telefone..." />
          </InputText.Root>

          <Select.Root>
            <Select.Trigger
              label="Operadora"
              placeholder="Selecione a Operadora..."
            />
            <Select.Content>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="abacaxi">Abacaxi</Select.Item>
              <Select.Item value="abacate">Abacate</Select.Item>
              <Select.Item value="uva">Uva</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <Button icon={CheckIcon} color="success">
        Cadastrar
      </Button>
    </fieldset>
  )
}
