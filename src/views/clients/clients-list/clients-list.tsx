import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ClientsListProps extends ComponentProps<'div'> {}

export const ClientsList = ({ className }: ClientsListProps) => {
  return (
    <div className={twMerge('overflow-hidden rounded shadow-sm', className)}>
      <table className="w-full">
        <thead className="bg-green-400 dark:bg-green-500">
          <tr>
            <th className="py-2 text-xs text-green-800">Cliente</th>
            <th className="py-2 text-xs text-green-800">CPF/CNPJ</th>
            <th className="py-2 text-xs text-green-800">Telefone</th>
            <th className="py-2 text-xs text-green-800">Email</th>
          </tr>
        </thead>

        <tbody className="bg-white text-center text-sm text-zinc-800 dark:bg-neutral-600 dark:text-white">
          <tr>
            <td className="py-2">Gabriel Pedroso</td>
            <td className="py-2">999.999999-99</td>
            <td className="py-2">41 9 8403-0800</td>
            <td className="py-2">gabrielpedroso@email.com</td>
          </tr>

          <tr className="bg-zinc-200 dark:bg-neutral-800">
            <td className="py-2">Gabriel Pedroso</td>
            <td className="py-2">999.999999-99</td>
            <td className="py-2">41 9 8403-0800</td>
            <td className="py-2">gabrielpedroso@email.com</td>
          </tr>

          <tr>
            <td className="py-2">Gabriel Pedroso</td>
            <td className="py-2">999.999999-99</td>
            <td className="py-2">41 9 8403-0800</td>
            <td className="py-2">gabrielpedroso@email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
