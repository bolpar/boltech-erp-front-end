import { Button } from '@/components/UI/button'
import * as InputText from '@/components/UI/input-text'
import { Separator } from '@/components/separator'
import {
  LockKeyholeIcon,
  LockKeyholeOpenIcon,
  RefreshCwIcon,
} from 'lucide-react'

export const RegisterFieldset = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4">
      <form className="col-span-2 row-span-6 grid grid-cols-2 gap-4">
        <InputText.Root label="Nome" className="col-span-full">
          <InputText.Input placeHolder="Digite seu nome..." />
        </InputText.Root>
        <InputText.Root label="IMEI">
          <InputText.Input placeHolder="Digite seu IMEI..." />
        </InputText.Root>
        <InputText.Root label="Placa">
          <InputText.Input placeHolder="Digite o código da placa..." />
        </InputText.Root>

        <div className="col-span-full flex items-center gap-2">
          <Button icon={LockKeyholeIcon}>Enviar Bloqueio</Button>
          <Button icon={LockKeyholeOpenIcon}>Enviar Desbloqueio</Button>
          <Button icon={RefreshCwIcon}>Atualizar Dados GPS</Button>
        </div>

        <Separator className="col-span-full my-4" />

        <div className="col-span-full flex items-center justify-between rounded border bg-neutral-100 p-4 shadow-sm dark:border-neutral-800 dark:bg-darkModeContrast">
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">Ignição: </span>
            <h4 className="font-bold text-zinc-700 dark:text-white">Ligada</h4>
          </div>
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">Corte: </span>
            <h4 className="font-bold text-zinc-700 dark:text-white">
              Desbloqueado
            </h4>
          </div>
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">Alimentação: </span>
            <h4 className="font-bold text-zinc-700 dark:text-white">
              Com alimentação
            </h4>
          </div>
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">Sinal GPS: </span>
            <h4 className="font-bold text-zinc-700 dark:text-white">OK</h4>
          </div>
        </div>

        <div className="col-span-full rounded border bg-neutral-100 p-4 shadow-sm dark:border-neutral-800 dark:bg-darkModeContrast">
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">
              Data/Hora do rastreador:
            </span>
            <h4 className="font-bold text-zinc-700 dark:text-white">
              11/10/2024 17:40:16
            </h4>
          </div>
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">
              Data/Hora do Servidor:
            </span>
            <h4 className="font-bold text-zinc-700 dark:text-white">
              11/10/2024 17:40:16
            </h4>
          </div>
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">Velocidade:</span>
            <h4 className="font-bold text-zinc-700 dark:text-white">33</h4>
          </div>
          <div className="flex items-center text-xs">
            <span className="mr-1 font-bold text-green-500">
              Voltagem de Alimentação:
            </span>
            <h4 className="font-bold text-zinc-700 dark:text-white">14.0</h4>
          </div>
        </div>
      </form>

      <div className="col-span-2 row-span-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.9233518250335!2d-49.24915872426563!3d-25.474234734644032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4d6fa44c58f%3A0x57b27cc2d56c5873!2sR.%20Carlos%20de%20Laet%2C%201221%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081610-050!5e0!3m2!1spt-BR!2sbr!4v1716988466085!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
