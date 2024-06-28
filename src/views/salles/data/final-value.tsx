import { formatPrice } from '@/utils/formatPrice'
import { CircleDollarSignIcon } from 'lucide-react'

interface FinalValueProps {
  label: string
  value: number
}

export const FinalValue = ({ label, value }: FinalValueProps) => {
  return (
    <div className="flex w-fit items-center justify-center gap-4 rounded-lg border-b-4 border-green-700 bg-green-200 bg-gradient-to-br from-green-500 to-green-300 p-4 dark:bg-gradient-to-tr dark:from-green-300 dark:to-green-500">
      <div className="rounded-full bg-white p-1 dark:bg-zinc-700">
        <CircleDollarSignIcon className="h-12 w-12 text-green-500" />
      </div>

      <div className="text-lg text-white dark:text-zinc-700">
        <span>{label}</span>
        <h4 className="text-2xl font-black">{formatPrice(value)}</h4>
      </div>
    </div>
  )
}
