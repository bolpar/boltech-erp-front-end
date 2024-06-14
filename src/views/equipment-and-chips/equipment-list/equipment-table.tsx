import * as Table from '@/components/table/index'

export const EquipmentTable = () => {
  return (
    <Table.Root>
      <Table.Head>
        <Table.HeadItem>PLACA</Table.HeadItem>
        <Table.HeadItem>MODELO</Table.HeadItem>
        <Table.HeadItem>TÉCNICO</Table.HeadItem>
        <Table.HeadItem>DATA E HORA</Table.HeadItem>
        <Table.HeadItem>OBSERVAÇÃO</Table.HeadItem>
      </Table.Head>

      <Table.Body>
        <Table.Row>
          <Table.BodyItem>ABC - 1234</Table.BodyItem>
          <Table.BodyItem>Modelo-030331</Table.BodyItem>
          <Table.BodyItem>244 - Liderauto</Table.BodyItem>
          <Table.BodyItem>18/05/2024 - 08:23:41</Table.BodyItem>
          <Table.BodyItem>ABC - 1234</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem alternative>ABC - 1234</Table.BodyItem>
          <Table.BodyItem alternative>Modelo-030331</Table.BodyItem>
          <Table.BodyItem alternative>244 - Liderauto</Table.BodyItem>
          <Table.BodyItem alternative>18/05/2024 - 08:23:41</Table.BodyItem>
          <Table.BodyItem alternative>ABC - 1234</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem>ABC - 1234</Table.BodyItem>
          <Table.BodyItem>Modelo-030331</Table.BodyItem>
          <Table.BodyItem>244 - Liderauto</Table.BodyItem>
          <Table.BodyItem>18/05/2024 - 08:23:41</Table.BodyItem>
          <Table.BodyItem>ABC - 1234</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem alternative>ABC - 1234</Table.BodyItem>
          <Table.BodyItem alternative>Modelo-030331</Table.BodyItem>
          <Table.BodyItem alternative>244 - Liderauto</Table.BodyItem>
          <Table.BodyItem alternative>18/05/2024 - 08:23:41</Table.BodyItem>
          <Table.BodyItem alternative>ABC - 1234</Table.BodyItem>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
