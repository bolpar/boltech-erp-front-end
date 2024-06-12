import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface PriceCardProps extends ComponentProps<'div'> {
  label: string
  price: string
}

export const PriceCard = ({ label, price, className }: PriceCardProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full flex-col items-center justify-center rounded border-b-4 border-blue-700 bg-gradient-to-bl from-blue-400 to-blue-600 py-8 text-lg text-white dark:text-zinc-700',
        className,
      )}
    >
      <label>{label}</label>
      <h2 className="font-bold">{price}</h2>
    </div>
  )
}
