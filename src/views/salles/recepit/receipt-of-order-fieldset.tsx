import * as InputText from '@/components/UI/input'
import { TextArea } from '@/components/UI/textarea'
import { LegendFieldset } from '@/components/legend-fieldset'
import { CardReceiptModalContent } from './card-receipt-modal-content'
import { PixModalContent } from './pix-modal-content'
import { ReleaseOfTicketsModalContent } from './release-of-tickets-modal-content'

export const ReceiptOfOrderFieldset = () => {
  return (
    <>
      <LegendFieldset className="my-10">RECEBIMENTO DO PEDIDO</LegendFieldset>

      <div className="mb-16 mt-8 grid h-fit grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-rows-6 gap-4">
          <div className="row-span-2 grid grid-cols-2 gap-4">
            <InputText.Root label="Nome do Cliente">
              <InputText.Input
                placeHolder="Digite o nome do cliente..."
                value="Gabriel Pedroso"
                disabled
                readOnly
              />
            </InputText.Root>
            <InputText.Root label="E-mail">
              <InputText.Input
                placeHolder="Digite o endereço de e-mail..."
                value="gabriellucaspd@gmail.com"
                disabled
                readOnly
              />
            </InputText.Root>
            <InputText.Root label="Telefone">
              <InputText.Input
                placeHolder="Digite o número de telefone..."
                value="41 9 8403-0800"
                disabled
                readOnly
              />
            </InputText.Root>
            <InputText.Root label="Plano Escolhido">
              <InputText.Input
                placeHolder="Digite o plano escolhido..."
                value="Plano Recorrente"
                disabled
                readOnly
              />
            </InputText.Root>
          </div>

          <TextArea
            label="Observações Adicionais"
            className="col-span-full row-span-2"
          />
        </div>

        <div className="col-span-1 grid grid-rows-6 gap-4">
          <InputText.Root label="Dinheiro">
            <InputText.Input placeHolder="Digite o valor..." />
          </InputText.Root>
          <InputText.Root label="PIX">
            <InputText.Input
              placeHolder="Digite o valor..."
              value={1200}
              readOnly
              disabled
            >
              <InputText.ModalButton>
                <PixModalContent />
              </InputText.ModalButton>
            </InputText.Input>
          </InputText.Root>
          <InputText.Root label="Cartão">
            <InputText.Input
              placeHolder="Digite o valor..."
              value={1200}
              readOnly
              disabled
            >
              <InputText.ModalButton>
                <CardReceiptModalContent />
              </InputText.ModalButton>
            </InputText.Input>
          </InputText.Root>
          <InputText.Root label="Boleto">
            <InputText.Input
              placeHolder="Digite o valor..."
              value={1200}
              readOnly
              disabled
            >
              <InputText.ModalButton>
                <ReleaseOfTicketsModalContent />
              </InputText.ModalButton>
            </InputText.Input>
          </InputText.Root>
          <InputText.Root label="Crédito">
            <InputText.Input
              placeHolder="Digite o valor..."
              value={1200}
              readOnly
              disabled
            >
              <InputText.ModalButton>
                {/* <PixModalContent /> */}
                <div />
              </InputText.ModalButton>
            </InputText.Input>
          </InputText.Root>
          <InputText.Root label="Desconto">
            <InputText.Input placeHolder="Digite o valor..." />
          </InputText.Root>
        </div>
      </div>
    </>
  )
}
