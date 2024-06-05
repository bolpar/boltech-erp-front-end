import { Button } from '@/components/UI/button'
import { Checkbox } from '@/components/UI/checkbox'
import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { LegendFieldset } from '@/components/legend-fieldset'
import { CheckIcon } from 'lucide-react'

export const EquipmentSelectionFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 grid-rows-5 gap-4">
      <LegendFieldset className="mb-10 mt-0">
        SELEÇÃO DE EQUIPAMENTO
      </LegendFieldset>

      <div className="col-span-2 row-span-3 grid grid-cols-2 gap-4">
        <InputText.Root label="Tipo do Aparelho" className="row-span-1">
          <InputText.Input
            placeHolder="Digite o tipo do aparelho..."
            value="Aparelho Boltech"
            disabled
            readOnly
          />
        </InputText.Root>
        <InputText.Root label="Quantidade" className="row-span-1">
          <InputText.Input
            placeHolder="Digite a quantidade..."
            value="1/3"
            disabled
            readOnly
          />
        </InputText.Root>

        <div className="col-span-full grid h-fit grid-cols-3 gap-4">
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
              className="h-full"
            />
            <Select.Content>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="abacaxi">Abacaxi</Select.Item>
              <Select.Item value="abacate">Abacate</Select.Item>
              <Select.Item value="uva">Uva</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div>
          <Button icon={CheckIcon} variant="success">
            Cadastrar
          </Button>
        </div>
      </div>

      <div className="col-span-1 row-span-5 flex flex-col items-start gap-4 rounded border border-neutral-300 p-6 dark:border-green-500 dark:bg-darkModeContrast">
        <span className="text-xs font-semibold text-zinc-700 dark:text-white">
          Checklist saída de rastreador
        </span>
        <Checkbox label="Rastreador" />
        <Checkbox label="Chicote" />
        <Checkbox label="Rele" />
        <Checkbox label="Fusível" />
        <Checkbox label="Manual" />
        <Checkbox label="Contrato" />
        <Checkbox label="Etiqueta Garantia" />
      </div>
    </fieldset>
  )
}
