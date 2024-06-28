import { Button } from '@/components/UI/button'
import * as InputText from '@/components/UI/input'
import {
  FlaskConicalIcon,
  HistoryIcon,
  LockIcon,
  RefreshCwIcon,
  UnlockIcon,
} from 'lucide-react'

export const RegisterClientForm = () => {
  return (
    <form className="grid grid-cols-4 gap-4">
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <InputText.Root label="Placa">
          <InputText.Text placeHolder="Digite o placa..." />
        </InputText.Root>
        <InputText.Root label="Modelo">
          <InputText.Text placeHolder="Digite o modelo..." />
        </InputText.Root>
        <InputText.Root label="Ano">
          <InputText.Text placeHolder="Digite o ano..." />
        </InputText.Root>
        <InputText.Root label="Marca">
          <InputText.Text placeHolder="Digite o a marca..." />
        </InputText.Root>
        <InputText.Root label="Apelido" className="col-span-full">
          <InputText.Text placeHolder="Digite o apelido..." />
        </InputText.Root>
        <InputText.Root label="Tipo do Veículo" className="col-span-full">
          <InputText.Text placeHolder="Digite o tipo do veículo..." />
        </InputText.Root>
      </div>

      <div className="col-span-2 row-span-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.9233518250335!2d-49.24915872426563!3d-25.474234734644032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4d6fa44c58f%3A0x57b27cc2d56c5873!2sR.%20Carlos%20de%20Laet%2C%201221%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081610-050!5e0!3m2!1spt-BR!2sbr!4v1716988466085!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="mt-4 flex items-center gap-2">
          <Button icon={RefreshCwIcon}>Atualizar</Button>
          <Button icon={FlaskConicalIcon}>Testar</Button>
          <Button icon={LockIcon}>Bloquear</Button>
          <Button icon={UnlockIcon}>Desbloquear</Button>
          <Button icon={HistoryIcon}>Histórico</Button>
        </div>
      </div>
    </form>
  )
}
