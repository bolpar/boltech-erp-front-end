import { Separator } from '@/components/separator'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CheckIcon } from 'lucide-react'

export const PlanThree = () => {
  return (
    <div className="flex flex-col items-center rounded border p-2 dark:border-darkModeContrast dark:bg-darkModeContrast">
      <label className="mb-2 flex w-full items-center gap-2 rounded border p-2 dark:border-borderDarkMode">
        <RadioGroup.Item
          value="comodato"
          className="flex h-6 w-6 cursor-default items-center justify-center rounded-full border bg-white outline-none dark:border-darkMode dark:bg-darkMode"
        >
          <RadioGroup.Indicator>
            <CheckIcon className="h-4 w-4 text-green-500" />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
        <span>
          Plano 3: <b>Comodato</b>
        </span>
      </label>

      <div className="w-full rounded bg-blue-500/90 p-2 text-center text-xs text-white">
        <h3>
          <b className="text-lg">R$ 200, 00</b> (de entrada)
        </h3>
        <span className="font-bold">+</span>
        <h3>
          <b className="text-lg">R$ 59, 90</b> (ao mês)
        </h3>
      </div>

      <Separator className="my-2" />

      <div className="flex flex-col items-center rounded bg-green-200 px-2 py-4 text-center text-sm dark:text-black">
        <h4 className="text-xs font-bold underline">COMODATO</h4>
        <p>
          entrada de R$ 200, 00 + 12x de R$ 59, 90 no cartão de crédito (não é
          recorrente)
        </p>
        <p>
          Fidelidade de um ano; Garantia vitalícia; Aparelho não é do cliente.
        </p>
      </div>

      <Separator className="my-2" />

      <div className="flex w-full flex-col items-center rounded bg-green-200 px-2 py-4 text-center text-sm dark:text-black">
        <h4 className="text-xs font-bold underline">VENDA</h4>
        <p>Plano 1</p>
        <span className="font-bold">ou</span>
        <p>Plano 2</p>
      </div>
    </div>
  )
}
