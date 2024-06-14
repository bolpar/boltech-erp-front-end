import * as Table from '@/components/table/index'

export const ChipTable = () => {
  return (
    <section>
      <Table.Root>
        <Table.Head>
          <Table.HeadItem>IMEI</Table.HeadItem>
          <Table.HeadItem>BT</Table.HeadItem>
          <Table.HeadItem>SITUAÇÃO</Table.HeadItem>
          <Table.HeadItem>NÚMERO DO CHIP</Table.HeadItem>
          <Table.HeadItem>OBSERVAÇÕES</Table.HeadItem>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.BodyItem>632210462873827</Table.BodyItem>
            <Table.BodyItem>BT072582</Table.BodyItem>
            <Table.BodyItem>ATIVO</Table.BodyItem>
            <Table.BodyItem>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem>
              Cliente interessado em saber mais sobre o rastreador...
            </Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>632210462873827</Table.BodyItem>
            <Table.BodyItem alternative>BT072582</Table.BodyItem>
            <Table.BodyItem alternative>ATIVO</Table.BodyItem>
            <Table.BodyItem alternative>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem alternative>
              Cliente interessado em saber mais sobre o rastreador...
            </Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem>632210462873827</Table.BodyItem>
            <Table.BodyItem>BT072582</Table.BodyItem>
            <Table.BodyItem>ATIVO</Table.BodyItem>
            <Table.BodyItem>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem>
              Cliente interessado em saber mais sobre o rastreador...
            </Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>632210462873827</Table.BodyItem>
            <Table.BodyItem alternative>BT072582</Table.BodyItem>
            <Table.BodyItem alternative>ATIVO</Table.BodyItem>
            <Table.BodyItem alternative>41 9 8403-0800</Table.BodyItem>
            <Table.BodyItem alternative>
              Cliente interessado em saber mais sobre o rastreador...
            </Table.BodyItem>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </section>
  )
}
