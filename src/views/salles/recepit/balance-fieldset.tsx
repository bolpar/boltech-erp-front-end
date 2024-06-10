import { CircleDollarSignIcon } from 'lucide-react'

export const BalanceFieldset = () => {
  return (
    <>
      <span className="text-sm text-zinc-700 dark:text-white">
        Confira abaixo o saldo atual
      </span>

      <div className="mt-2 flex w-fit items-center justify-center gap-6 rounded-lg border-b-4 border-green-700 bg-green-400 p-4">
        <div className="rounded-full bg-white p-2 dark:bg-zinc-700">
          <CircleDollarSignIcon className="h-10 w-10 text-green-500" />
        </div>

        <div className="text-lg text-white dark:text-zinc-700">
          <span>Saldo Atual</span>
          <h4 className="font-black">R$ 1.080, 00 / R$ 0, 00</h4>
        </div>
      </div>
    </>
  )
}
