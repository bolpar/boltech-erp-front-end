import * as InputText from '@/components/UI/input-text'
import Image from 'next/image'

export const FieldsetHeader = () => {
  return (
    <fieldset className="grid grid-cols-2 gap-4">
      <div className="col-span-full grid grid-cols-3">
        <InputText.Root label="Número do Pedido">
          <InputText.Input placeHolder="Digite o número do pedido..." />
          <InputText.SearchButton />
        </InputText.Root>
      </div>

      <div className="flex w-fit items-center justify-center rounded-lg border border-green-100/80 bg-green-100/30 p-4 shadow-sm dark:border-green-500">
        <Image
          src="https://github.com/HiLucred.png"
          alt="Foto de perfil"
          width={100}
          height={100}
          className="h-16 w-16 rounded-full border-2 border-white dark:border-green-500"
        />

        <div className="mx-4 h-16 w-px bg-zinc-200/80 dark:bg-green-500" />

        <div className="flex flex-col justify-center gap-1">
          <span className="text-xs text-zinc-700 dark:text-white">
            Vendedor
          </span>
          <div className="mt-1 rounded-md bg-green-200 p-2 text-sm text-zinc-700 dark:border-green-500 dark:bg-green-400">
            <span className="truncate font-bold">Gabriel Pedroso</span>
          </div>
        </div>
      </div>
    </fieldset>
  )
}
