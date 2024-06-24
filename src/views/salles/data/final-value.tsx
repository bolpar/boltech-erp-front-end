import { CircleDollarSignIcon } from 'lucide-react'

export const FinalValue = () => {
  return (
    <div className="mt-2 flex w-fit items-center justify-center gap-6 rounded-md border-b-4 border-green-700 bg-green-200 bg-gradient-to-br from-green-500 to-green-300 p-4 dark:bg-gradient-to-tr dark:from-green-300 dark:to-green-500">
      <div className="rounded-full bg-white p-2 dark:bg-zinc-700">
        <CircleDollarSignIcon className="h-10 w-10 text-green-500" />
      </div>

      <div className="text-lg text-white dark:text-zinc-700">
        <span>Valor Final</span>
        <h4 className="text-3xl font-black">R$ 422, 00</h4>
      </div>
    </div>
  )
}
