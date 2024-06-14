import { LegendFieldset } from '@/components/legend-fieldset'
import * as Table from '@/components/table/index'

export const VehiclesTable = () => {
  return (
    <>
      <LegendFieldset className="col-span-full mt-0">VEÍCULOS</LegendFieldset>

      <Table.Root className="col-span-full">
        <Table.Head>
          <Table.HeadItem>PLACA</Table.HeadItem>
          <Table.HeadItem>BT</Table.HeadItem>
          <Table.HeadItem>OPERADORA</Table.HeadItem>
          <Table.HeadItem>PLANO</Table.HeadItem>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.BodyItem>ABC-1234</Table.BodyItem>
            <Table.BodyItem>BT-12345</Table.BodyItem>
            <Table.BodyItem>Algar</Table.BodyItem>
            <Table.BodyItem>Comodato</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>ABC-1234</Table.BodyItem>
            <Table.BodyItem alternative>BT-12345</Table.BodyItem>
            <Table.BodyItem alternative>Vivo</Table.BodyItem>
            <Table.BodyItem alternative>Comodato</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem>ABC-1234</Table.BodyItem>
            <Table.BodyItem>BT-12345</Table.BodyItem>
            <Table.BodyItem>Claro</Table.BodyItem>
            <Table.BodyItem>Recorrente</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>ABC-1234</Table.BodyItem>
            <Table.BodyItem alternative>BT-12345</Table.BodyItem>
            <Table.BodyItem alternative>Oi</Table.BodyItem>
            <Table.BodyItem alternative>Anual</Table.BodyItem>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  )
}
