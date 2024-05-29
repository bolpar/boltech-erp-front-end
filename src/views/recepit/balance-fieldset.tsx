import { CircleDollarSignIcon } from 'lucide-react'

export const BalanceFieldset = () => {
  return (
    <>
      <span className="text-xs text-zinc-700 dark:text-white">Saldo</span>

      <div className="mt-2 flex w-fit items-center justify-center gap-2 rounded-lg border border-green-500 p-6 ">
        <CircleDollarSignIcon className="h-6 w-6 text-zinc-800 dark:text-green-500" />
        <h4 className="font-bold text-zinc-950 dark:text-green-500">
          R$ 1.080 / R$ 0, 00
        </h4>
      </div>
    </>
  )
}
