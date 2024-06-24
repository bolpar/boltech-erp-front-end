import { Separator } from '@/components/separator'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CheckIcon } from 'lucide-react'

interface PlanOneProps {
  value: string
  id: string
}

export const PlanOne = ({ value, id }: PlanOneProps) => {
  return (
    <div className="flex flex-col items-center rounded border p-2 dark:border-darkModeContrast dark:bg-darkModeContrast">
      <label className="mb-2 flex w-full items-center gap-2 rounded border p-2 dark:border-borderDarkMode">
        <RadioGroup.Item
          value={value}
          id={id}
          className="flex h-6 w-6 cursor-default items-center justify-center rounded-full border bg-white outline-none dark:border-darkMode dark:bg-darkMode"
        >
          <RadioGroup.Indicator>
            <CheckIcon className="h-4 w-4 text-green-500" />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
        <span>
          Plano 1: <b>Recorrência</b>
        </span>
      </label>

      <div className="w-full rounded bg-blue-500/90 p-2 text-center text-xs text-white">
        <h3>
          <b className="text-lg">R$ 559, 00</b> (de entrada)
        </h3>
        <span className="font-bold">+</span>
        <h3>
          <b className="text-lg">R$ 33, 97</b> (ao mês)
        </h3>
      </div>

      <Separator className="my-2" />

      <div className="flex flex-col items-center rounded bg-green-200 px-2 py-4 text-center text-sm dark:text-black">
        <h4 className="text-xs font-bold underline">PRIMEIRO ANO</h4>
        <p>
          entrada de R$ 559, 00 em até 4x no cartão de crédito + recorrência
        </p>
        <span className="font-bold">ou</span>
        <p>
          R$ 474, 00 á vista no pix ou dinheiro + recorrência de R$ 33, 97 ao
          mês
        </p>
      </div>

      <Separator className="my-2" />

      <div className="flex flex-col items-center rounded bg-green-200 px-2 py-4 text-center text-sm dark:text-black">
        <h4 className="text-xs font-bold underline">SEGUNDO ANO</h4>
        <p>Recorrência R$ 33, 97 ao mês cartão de crédito/pix/boleto</p>
        <span className="font-bold">ou</span>
        <p>R$ 389, 00 em atéw 4x no cartão</p>
        <span className="font-bold">ou</span>
        <p>R$ 359, 00 a vista no pix ou dinheiro</p>
        <div className="mx-2 my-2 h-px w-full bg-green-400" />
        <h5>* Sem fidelidade, plano de venda (o aparelho é do cliente)</h5>
      </div>
    </div>
  )
}
