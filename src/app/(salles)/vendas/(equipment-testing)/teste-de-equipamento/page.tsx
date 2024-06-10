import { Button } from '@/components/UI/button'
import { ChooseFileInput } from '@/components/UI/choose-file-input'
import * as InputText from '@/components/UI/input-text'
import * as Select from '@/components/UI/select'
import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { HistoryIcon, SquareChevronRightIcon } from 'lucide-react'

export default function EquipmentTesting() {
  return (
    <form>
      <div className="grid grid-cols-4 grid-rows-6 gap-4">
        <div className="col-span-2 row-span-5 grid grid-cols-2 gap-4">
          <InputText.Root label="IMEI">
            <InputText.Input placeHolder="Digite o seu IMEI..." />
          </InputText.Root>
          <InputText.Root label="Placa">
            <InputText.Input placeHolder="Digite a placa do veículo..." />
          </InputText.Root>
          <Select.Root>
            <Select.Trigger
              label="Com Bloqueio"
              placeholder="Selecione..."
              className="h-fit"
            />
            <Select.Content>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="abacaxi">Abacaxi</Select.Item>
              <Select.Item value="abacate">Abacate</Select.Item>
              <Select.Item value="uva">Uva</Select.Item>
            </Select.Content>
          </Select.Root>
          <Select.Root>
            <Select.Trigger
              label="Alimentação Constante"
              placeholder="Selecione..."
              className="h-fit"
            />
            <Select.Content>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="abacaxi">Abacaxi</Select.Item>
              <Select.Item value="abacate">Abacate</Select.Item>
              <Select.Item value="uva">Uva</Select.Item>
            </Select.Content>
          </Select.Root>
          <Select.Root>
            <Select.Trigger
              label="Fusível de Segurança"
              placeholder="Selecione..."
              className="h-fit"
            />
            <Select.Content>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="abacaxi">Abacaxi</Select.Item>
              <Select.Item value="abacate">Abacate</Select.Item>
              <Select.Item value="uva">Uva</Select.Item>
            </Select.Content>
          </Select.Root>

          <ChooseFileInput className="mt-4" />
        </div>

        <div className="col-span-2 row-span-6 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.9233518250335!2d-49.24915872426563!3d-25.474234734644032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4d6fa44c58f%3A0x57b27cc2d56c5873!2sR.%20Carlos%20de%20Laet%2C%201221%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081610-050!5e0!3m2!1spt-BR!2sbr!4v1716988466085!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="mt-2 flex items-center gap-2">
            <Button icon={SquareChevronRightIcon}>Comandos</Button>
            <Button icon={HistoryIcon}>Histórico</Button>
          </div>
        </div>
      </div>

      <Separator />
      <Actions />
    </form>
  )
}
