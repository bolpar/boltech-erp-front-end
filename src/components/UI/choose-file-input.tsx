import { FileImageIcon, FileInputIcon, XIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from './button'

type ChooseFileInputProps = ComponentProps<'div'>

export const ChooseFileInput = ({ className }: ChooseFileInputProps) => {
  return (
    <div
      className={twMerge(
        'col-span-full w-fit rounded border-2 border-dashed p-4 dark:border-neutral-800 dark:bg-darkModeContrast',
        className,
      )}
    >
      <div className="mb-2">
        <span className="text-xs">
          Faça o upload de imagens clicando em <b>Enviar Fotos</b>
        </span>
      </div>

      <Button variant="edit" icon={FileInputIcon}>
        Enviar Fotos
      </Button>

      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between rounded bg-neutral-100 p-2 dark:bg-borderDarkMode">
          <div className="flex items-center  gap-1">
            <FileImageIcon className="h-4 w-4 text-neutral-400" />
            <span className="text-xs text-neutral-400">
              carro_do_cliente2.png
            </span>
          </div>

          <button className="rounded-full bg-neutral-200 p-1 hover:bg-neutral-300 dark:bg-neutral-500 dark:hover:bg-neutral-600">
            <XIcon className="h-3 w-3 text-zinc-500  dark:text-white" />
          </button>
        </div>

        <div className="flex items-center justify-between rounded bg-neutral-100 p-2 dark:bg-borderDarkMode">
          <div className="flex items-center  gap-1">
            <FileImageIcon className="h-4 w-4 text-neutral-400" />
            <span className="text-xs text-neutral-400">
              carro_do_cliente2.png
            </span>
          </div>

          <button className="rounded-full bg-neutral-200 p-1 hover:bg-neutral-300 dark:bg-neutral-500 dark:hover:bg-neutral-600">
            <XIcon className="h-3 w-3 text-zinc-500  dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
