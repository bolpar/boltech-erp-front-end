import * as Select from '@/components/UI/select'
import Image from 'next/image'

export const FieldsetHeader = () => {
  return (
    <fieldset className="flex h-full items-start gap-4">
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
          <div className="rounded-md bg-green-200 p-2 text-sm text-zinc-700 dark:bg-green-400">
            <span className="truncate font-bold">Gabriel Pedroso</span>
          </div>
        </div>

        <div className="ml-4 flex flex-col justify-center gap-1">
          <span className="text-xs text-zinc-700 dark:text-white">
            Nº do Pedido
          </span>
          <div className="rounded-md bg-green-200 p-2 text-sm text-zinc-700  dark:bg-green-400">
            <span className="truncate font-bold">#2323</span>
          </div>
        </div>
      </div>

      <div className="mt-1 h-24 w-px bg-zinc-100 dark:bg-borderDarkMode" />

      <Select.Root>
        <Select.Trigger
          label="Publicidade"
          placeholder="Selecione a publicidade..."
        />

        <Select.Content>
          <Select.Item value="instagram">Instagram</Select.Item>
          <Select.Item value="facebook">Facebook</Select.Item>
          <Select.Item value="twitter">Twitter</Select.Item>
          <Select.Item value="whatsapp">WhatsApp</Select.Item>
        </Select.Content>
      </Select.Root>
    </fieldset>
  )
}
