import * as Table from '@/components/table/index'
import { ComponentProps } from 'react'

type VehiclesListProps = ComponentProps<'div'>

export const VehiclesList = ({ className }: VehiclesListProps) => {
  return (
    <Table.Root className={className}>
      <Table.Head>
        <Table.HeadItem>PLACA</Table.HeadItem>
        <Table.HeadItem>BT</Table.HeadItem>
        <Table.HeadItem>INSTALADO</Table.HeadItem>
        <Table.HeadItem>OBSERVAÇÕES</Table.HeadItem>
      </Table.Head>

      <Table.Body>
        <Table.Row>
          <Table.BodyItem>ABC - 1234</Table.BodyItem>
          <Table.BodyItem>999999999</Table.BodyItem>
          <Table.BodyItem>11/11/2024</Table.BodyItem>
          <Table.BodyItem>Cliente interessado...</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem alternative>ABC - 1234</Table.BodyItem>
          <Table.BodyItem alternative>999999999</Table.BodyItem>
          <Table.BodyItem alternative>11/11/2024</Table.BodyItem>
          <Table.BodyItem alternative>Cliente interessado...</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem>ABC - 1234</Table.BodyItem>
          <Table.BodyItem>999999999</Table.BodyItem>
          <Table.BodyItem>11/11/2024</Table.BodyItem>
          <Table.BodyItem>Cliente interessado...</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem alternative>ABC - 1234</Table.BodyItem>
          <Table.BodyItem alternative>999999999</Table.BodyItem>
          <Table.BodyItem alternative>11/11/2024</Table.BodyItem>
          <Table.BodyItem alternative>Cliente interessado...</Table.BodyItem>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
