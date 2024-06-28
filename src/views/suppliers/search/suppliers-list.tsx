import * as Table from '@/components/table/index'
import { getClients } from '@/graphql/query/getClients'
import { formatDate } from '@/utils/formatDate'
import { ComponentProps } from 'react'

interface SuppliersListProps extends ComponentProps<'div'> {}

export const SuppliersList = async ({ className }: SuppliersListProps) => {
  const clients = await getClients()

  return (
    <div className={className}>
      <Table.Root>
        <Table.Head>
          <Table.HeadItem>Cliente</Table.HeadItem>
          <Table.HeadItem>CPF/CNPJ</Table.HeadItem>
          <Table.HeadItem>Telefone</Table.HeadItem>
          <Table.HeadItem>Email</Table.HeadItem>
          <Table.HeadItem>Criado em</Table.HeadItem>
        </Table.Head>

        <Table.Body>
          {clients.map((client, index) => {
            const isAlternative = index % 2 === 0
            const date = formatDate(client.created_at)

            return (
              <Table.Row key={index}>
                <Table.BodyItem alternative={isAlternative}>
                  {client.nome}
                </Table.BodyItem>
                <Table.BodyItem alternative={isAlternative}>
                  {client.documento}
                </Table.BodyItem>
                <Table.BodyItem alternative={isAlternative}>-</Table.BodyItem>
                <Table.BodyItem alternative={isAlternative}>-</Table.BodyItem>
                <Table.BodyItem alternative={isAlternative}>
                  {date}
                </Table.BodyItem>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
