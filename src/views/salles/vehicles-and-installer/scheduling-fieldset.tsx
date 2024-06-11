import { LegendFieldset } from '@/components/legend-fieldset'
import * as Table from '@/components/table/index'

export const SchedullingFieldset = () => {
  return (
    <fieldset>
      <LegendFieldset>AGENDAMENTO</LegendFieldset>
      <Table.Root>
        <Table.Head>
          <Table.HeadItem>PLACA</Table.HeadItem>
          <Table.HeadItem>MODELO</Table.HeadItem>
          <Table.HeadItem>TÉCNICO</Table.HeadItem>
          <Table.HeadItem>DATA/HORA</Table.HeadItem>
          <Table.HeadItem>OBSERVAÇÃO</Table.HeadItem>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.BodyItem>ABC - 1234</Table.BodyItem>
            <Table.BodyItem>Modelo-030331</Table.BodyItem>
            <Table.BodyItem>Técnico</Table.BodyItem>
            <Table.BodyItem>Data/Hora</Table.BodyItem>
            <Table.BodyItem>Observação</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>ABC - 1234</Table.BodyItem>
            <Table.BodyItem alternative>Modelo-030331</Table.BodyItem>
            <Table.BodyItem alternative>Técnico</Table.BodyItem>
            <Table.BodyItem alternative>Data/Hora</Table.BodyItem>
            <Table.BodyItem alternative>Observação</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem>ABC - 1234</Table.BodyItem>
            <Table.BodyItem>Modelo-030331</Table.BodyItem>
            <Table.BodyItem>Técnico</Table.BodyItem>
            <Table.BodyItem>Data/Hora</Table.BodyItem>
            <Table.BodyItem>Observação</Table.BodyItem>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </fieldset>
  )
}
