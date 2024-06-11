import * as Table from '@/components/table/index'
import { ComponentProps } from 'react'

interface ClientsListProps extends ComponentProps<'div'> {}

export const ClientsList = ({ className }: ClientsListProps) => {
  return (
    <div className={className}>
      <Table.Root>
        <Table.Head>
          <Table.HeadItem>Cliente</Table.HeadItem>
          <Table.HeadItem>CPF/CNPJ</Table.HeadItem>
          <Table.HeadItem>Telefone</Table.HeadItem>
          <Table.HeadItem>Email</Table.HeadItem>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.BodyItem>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem>999.999999-99</Table.BodyItem>
            <Table.BodyItem>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem>gabrielpedroso@email.com</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem alternative>999.999999-99</Table.BodyItem>
            <Table.BodyItem alternative>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem alternative>
              gabrielpedroso@email.com
            </Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem>999.999999-99</Table.BodyItem>
            <Table.BodyItem>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem>gabrielpedroso@email.com</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem alternative>999.999999-99</Table.BodyItem>
            <Table.BodyItem alternative>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem alternative>
              gabrielpedroso@email.com
            </Table.BodyItem>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  )
}
