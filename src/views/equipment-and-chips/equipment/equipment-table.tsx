import * as Table from '@/components/table/index'

export const EquipmentTable = () => {
  return (
    <Table.Root>
      <Table.Head>
        <Table.HeadItem>IMEI</Table.HeadItem>
        <Table.HeadItem>BT</Table.HeadItem>
        <Table.HeadItem>SITUAÇÃO</Table.HeadItem>
        <Table.HeadItem>NÚMERO CHIP</Table.HeadItem>
        <Table.HeadItem>OBSERVAÇÕES</Table.HeadItem>
      </Table.Head>

      <Table.Body>
        <Table.Row>
          <Table.BodyItem>63221045072582</Table.BodyItem>
          <Table.BodyItem>BT072582</Table.BodyItem>
          <Table.BodyItem>ATIVO</Table.BodyItem>
          <Table.BodyItem>41 9 8403-0800</Table.BodyItem>
          <Table.BodyItem>Cliente Interessado</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem alternative>63221045072582</Table.BodyItem>
          <Table.BodyItem alternative>BT072582</Table.BodyItem>
          <Table.BodyItem alternative>ATIVO</Table.BodyItem>
          <Table.BodyItem alternative>41 9 8403-0800</Table.BodyItem>
          <Table.BodyItem alternative>Cliente Interessado</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem>63221045072582</Table.BodyItem>
          <Table.BodyItem>BT072582</Table.BodyItem>
          <Table.BodyItem>ATIVO</Table.BodyItem>
          <Table.BodyItem>41 9 8403-0800</Table.BodyItem>
          <Table.BodyItem>Cliente Interessado</Table.BodyItem>
        </Table.Row>

        <Table.Row>
          <Table.BodyItem alternative>63221045072582</Table.BodyItem>
          <Table.BodyItem alternative>BT072582</Table.BodyItem>
          <Table.BodyItem alternative>ATIVO</Table.BodyItem>
          <Table.BodyItem alternative>41 9 8403-0800</Table.BodyItem>
          <Table.BodyItem alternative>Cliente Interessado</Table.BodyItem>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
