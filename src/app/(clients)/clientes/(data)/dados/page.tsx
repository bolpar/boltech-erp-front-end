import * as InputText from '@/components/UI/input-text'
import { Actions } from '@/components/actions'
import { LegendFieldset } from '@/components/legend-fieldset'
import { PriceCard } from '@/components/price-card'
import { Separator } from '@/components/separator'
import * as Table from '@/components/table/index'
import { DataHeader } from '@/views/clients/data/header'

export default function Data() {
  return (
    <form className="grid grid-cols-4 gap-4">
      <DataHeader className="col-span-full" />

      <LegendFieldset>INFORMAÇÕES DO CLIENTE</LegendFieldset>

      <InputText.Root label="Nome">
        <InputText.Input
          disabled
          value="Gabriel Pedroso"
          placeHolder="Digite seu nome..."
        />
      </InputText.Root>
      <InputText.Root label="Fantasia">
        <InputText.Input
          disabled
          value="Pedroso"
          placeHolder="Digite seu nome fantasia..."
        />
      </InputText.Root>
      <InputText.Root label="CPF/CPNJ">
        <InputText.Input
          disabled
          value="099.099099-99"
          placeHolder="Digite seu CPF/CNPJ..."
        />
      </InputText.Root>
      <InputText.Root label="Data de Nascimento">
        <InputText.Input
          disabled
          value="11/11/24"
          placeHolder="Digite sua data de nascimento..."
        />
      </InputText.Root>

      <InputText.Root label="Celular">
        <InputText.Input
          disabled
          value="(41) 9 9999-9999"
          placeHolder="Digite seu número de celular..."
        />
      </InputText.Root>
      <InputText.Root label="Telefone">
        <InputText.Input
          disabled
          value="(41) 3333-3333"
          placeHolder="Digite seu número de telefone..."
        />
      </InputText.Root>
      <InputText.Root label="E-mail">
        <InputText.Input
          disabled
          value="gabriellucaspd@gmail.com"
          placeHolder="Digite seu endereço de e-mail..."
        />
      </InputText.Root>
      <InputText.Root label="CEP">
        <InputText.Input
          disabled
          value="99.999.999.99"
          placeHolder="Digite seu CEP..."
        />
      </InputText.Root>

      <InputText.Root label="Endereço">
        <InputText.Input
          disabled
          value="Rua Carlos de Laet, 1221"
          placeHolder="Digite seu endereço..."
        />
      </InputText.Root>
      <InputText.Root label="Complemento">
        <InputText.Input
          disabled
          value="Próximo a cervejaria Bode Brown"
          placeHolder="Digite o completo de sua residência..."
        />
      </InputText.Root>
      <InputText.Root label="Campo Bairro">
        <InputText.Input
          disabled
          value="Hauer"
          placeHolder="Digite seu campo bairro..."
        />
      </InputText.Root>
      <InputText.Root label="Campo Cidade">
        <InputText.Input
          disabled
          value="Curitiba"
          placeHolder="Digite seu campo cidade..."
        />
      </InputText.Root>
      <InputText.Root label="UF">
        <InputText.Input disabled value="PR" placeHolder="Digite o UF..." />
      </InputText.Root>

      <Separator className="col-span-full my-2" />

      <div className="col-span-full">
        <Actions />
      </div>

      <LegendFieldset className="col-span-full my-0">
        RESUMO FINANCEIRO
      </LegendFieldset>
      <div className="col-span-full my-10 flex items-center justify-between gap-8">
        <PriceCard label="Faturas Pagas" price="2/12" />
        <PriceCard label="Total Geral Recebido" price="R$ 119, 80" />
        <PriceCard label="Recebido" price="R$ 119, 80" />
        <PriceCard label="A Receber" price="R$ 599, 00" />
      </div>

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
    </form>
  )
}
