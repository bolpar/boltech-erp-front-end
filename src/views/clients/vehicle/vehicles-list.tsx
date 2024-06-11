import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type VehiclesListProps = ComponentProps<'div'>

export const VehiclesList = ({ className }: VehiclesListProps) => {
  return (
    <div className={twMerge('overflow-hidden rounded shadow-sm', className)}>
      <table className="w-full">
        <thead className="bg-green-400 dark:bg-green-500">
          <tr>
            <th className="py-2 text-xs text-green-800">PLACA</th>
            <th className="py-2 text-xs text-green-800">BT</th>
            <th className="py-2 text-xs text-green-800">INSTALADO</th>
            <th className="py-2 text-xs text-green-800">OBSERVAÇÕES</th>
          </tr>
        </thead>

        <tbody className="bg-white text-center text-sm text-zinc-800 dark:bg-neutral-600 dark:text-white">
          <tr>
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">999999999</td>
            <td className="py-2">11/11/2024</td>
            <td className="py-2">Cliente interessado...</td>
          </tr>

          <tr className="bg-zinc-200 dark:bg-neutral-800">
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">999999999</td>
            <td className="py-2">11/11/2024</td>
            <td className="py-2">Cliente interessado...</td>
          </tr>

          <tr>
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">999999999</td>
            <td className="py-2">11/11/2024</td>
            <td className="py-2">Cliente interessado...</td>
          </tr>

          <tr className="bg-zinc-200 dark:bg-neutral-800">
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">999999999</td>
            <td className="py-2">11/11/2024</td>
            <td className="py-2">Cliente interessado...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
