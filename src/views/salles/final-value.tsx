import { CircleDollarSignIcon } from 'lucide-react'

export const FinalValue = () => {
  return (
    <>
      <span className="text-xs text-zinc-700 dark:text-white">
        Confira a baixo o valor resultante
      </span>

      <div className="mt-2 flex w-fit items-center justify-center gap-2 rounded-lg border border-green-500 p-6 ">
        <CircleDollarSignIcon className="h-6 w-6 text-zinc-800 dark:text-green-500" />
        <h4 className="text-base text-zinc-800 dark:text-white">
          Valor Final:{' '}
          <b className="text-zinc-950 dark:text-green-500">R$ 474, 00</b>
        </h4>
      </div>
    </>
  )
}
