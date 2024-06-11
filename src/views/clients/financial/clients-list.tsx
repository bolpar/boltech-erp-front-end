import { Button } from '@/components/UI/button'
import * as Select from '@/components/UI/select'
import * as Table from '@/components/table/index'
import { FileDownIcon } from 'lucide-react'

export const ClientsList = () => {
  return (
    <section>
      <header className="flex items-center justify-end gap-2">
        <Select.Root>
          <Select.Trigger label="" placeholder="Menor Preço" />
          <Select.Content>
            <Select.Item value="menor preço">Menor Preço</Select.Item>
            <Select.Item value="maior preço">Maior Preço</Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root>
          <Select.Trigger label="" placeholder="Recente" />
          <Select.Content>
            <Select.Item value="recente">Recente</Select.Item>
            <Select.Item value="maior preço">Maior Preço</Select.Item>
          </Select.Content>
        </Select.Root>
        <Button icon={FileDownIcon}>Exportar Relatório</Button>
      </header>

      <Table.Root className="mt-4">
        <Table.Head>
          <Table.HeadItem>CLIENTE</Table.HeadItem>
          <Table.HeadItem>DESCRIÇÃO</Table.HeadItem>
          <Table.HeadItem>DIA DO VENC.</Table.HeadItem>
          <Table.HeadItem>STATUS</Table.HeadItem>
          <Table.HeadItem>VALOR</Table.HeadItem>
          <Table.HeadItem>CICLOS</Table.HeadItem>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.BodyItem>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem>
              Referente a compra de 1 rastreador (757384783)
            </Table.BodyItem>
            <Table.BodyItem>11/11/2024</Table.BodyItem>
            <Table.BodyItem>Ativa</Table.BodyItem>
            <Table.BodyItem>R$ 188, 00</Table.BodyItem>
            <Table.BodyItem>1/2</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem alternative>
              Referente a compra de 1 rastreador (757384783)
            </Table.BodyItem>
            <Table.BodyItem alternative>11/11/2024</Table.BodyItem>
            <Table.BodyItem alternative>Ativa</Table.BodyItem>
            <Table.BodyItem alternative>R$ 188, 00</Table.BodyItem>
            <Table.BodyItem alternative>1/2</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem>
              Referente a compra de 1 rastreador (757384783)
            </Table.BodyItem>
            <Table.BodyItem>11/11/2024</Table.BodyItem>
            <Table.BodyItem>Ativa</Table.BodyItem>
            <Table.BodyItem>R$ 188, 00</Table.BodyItem>
            <Table.BodyItem>1/2</Table.BodyItem>
          </Table.Row>

          <Table.Row>
            <Table.BodyItem alternative>Gabriel Pedroso</Table.BodyItem>
            <Table.BodyItem alternative>
              Referente a compra de 1 rastreador (757384783)
            </Table.BodyItem>
            <Table.BodyItem alternative>11/11/2024</Table.BodyItem>
            <Table.BodyItem alternative>Ativa</Table.BodyItem>
            <Table.BodyItem alternative>R$ 188, 00</Table.BodyItem>
            <Table.BodyItem alternative>1/2</Table.BodyItem>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </section>
  )
}
