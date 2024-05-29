import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableProps extends ComponentProps<'table'> {}

export const Table = ({ className }: TableProps) => {
  return (
    <div
      className={twMerge(
        'overflow-hidden rounded border border-green-500 shadow-sm',
        className,
      )}
    >
      <table className="w-full">
        <thead className="bg-green-400 dark:bg-green-500">
          <tr>
            <th className="py-2 text-xs text-green-800">PLACA</th>
            <th className="py-2 text-xs text-green-800">MODELO</th>
            <th className="py-2 text-xs text-green-800">TÉCNICO</th>
            <th className="py-2 text-xs text-green-800">DATA E HORA</th>
            <th className="py-2 text-xs text-green-800">OBSERVAÇÃO</th>
          </tr>
        </thead>

        <tbody className="bg-white text-center text-sm text-zinc-800 dark:bg-neutral-600 dark:text-white">
          <tr>
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">Modelo-030331</td>
            <td className="py-2">244 - Liderauto</td>
            <td className="py-2">18/05/2024 - 08:23:41</td>
            <td className="py-2">ABC - 1234</td>
          </tr>

          <tr className="bg-zinc-200 dark:bg-neutral-800">
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">Modelo-030331</td>
            <td className="py-2">244 - Liderauto</td>
            <td className="py-2">18/05/2024 - 08:23:41</td>
            <td className="py-2">ABC - 1234</td>
          </tr>

          <tr>
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">Modelo-030331</td>
            <td className="py-2">244 - Liderauto</td>
            <td className="py-2">18/05/2024 - 08:23:41</td>
            <td className="py-2">ABC - 1234</td>
          </tr>

          <tr className="bg-zinc-200 dark:bg-neutral-800">
            <td className="py-2">ABC - 1234</td>
            <td className="py-2">Modelo-030331</td>
            <td className="py-2">244 - Liderauto</td>
            <td className="py-2">18/05/2024 - 08:23:41</td>
            <td className="py-2">ABC - 1234</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
