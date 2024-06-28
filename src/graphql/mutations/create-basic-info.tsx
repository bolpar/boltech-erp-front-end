import { DataFromSallesForm } from '@/views/salles/data/@form/data-form-schema'
import { gql, GraphQLClient } from 'graphql-request'

// type DocumentType = 'CPF' | 'CNPJ'
// type ContactType = 'Email' | 'Telefone' | 'Celular'
// type AddressType = 'Casa' | 'Trabalho' | 'Agendamento' | 'Outros'

// interface CreateBasicInfoRequest {
//   input: {
//     pedidoVenda: {
//       acrescimo?: number

//       contatos: {
//         create: {
//           padrao?: boolean
//           tipo: ContactType
//           valor: string
//         }
//       }[]

//       desconto?: number

//       endereco: {
//         create: {
//           bairro?: string
//           cep: string
//           cidade?: string
//           complemento?: string
//           estado?: string
//           lat?: number
//           lng?: number
//           numero: string
//           rua?: string
//           tipo?: AddressType
//         }
//       }

//       equipamentoPedido: {
//         equipamentoTipo: {
//           connect: {
//             id: string
//           }
//           observacao?: string
//           quantidade: number
//         }
//       }

//       formaPagamento: {
//         connect: {
//           id: string
//         }
//       }

//       lead: {
//         upsert: {
//           data_nascimento?: string
//           documento?: string
//           documento_tipo?: DocumentType
//           id?: string
//           is_cliente?: boolean
//           nome: string
//           observacao?: string
//           publicidade?: string
//         }
//       }

//       modeloDeContrato: {
//         connect: {
//           id: string
//         }
//       }

//       parcelas?: number

//       valor: {
//         connect: {
//           id: string
//         }
//       }
//     }
//   }
// }

// interface CreateBasicInfoResponse {}

// type ModeloContratoConnectInput = {
//   id: string
// }

// type SalvarDadosVendaEtapa1Input_ModeloContrato = {
//   connect: ModeloContratoConnectInput
// }

// type ValorConnectInput = {
//   id: string
// }

// type SalvarDadosVendaEtapa1Input_Valor = {
//   connect: ValorConnectInput
// }

// type FormaPagamentoConnectInput = {
//   id: string
// }

// type SalvarDadosVendaEtapa1Input_FormaPagamento = {
//   connect: FormaPagamentoConnectInput
// }

// enum LeadDocumentoTipoEnum {
//   CPF = 'CPF',
//   CNPJ = 'CNPJ',
// }

// type LeadUpsertInput = {
//   id?: string
//   nome: string
//   publicidade?: string
//   documento?: string
//   documento_tipo?: LeadDocumentoTipoEnum
//   is_cliente?: boolean
//   data_nascimento?: Date
//   observacao?: string
// }

// type SalvarDadosVendaEtapa1Input_LeadUpsert = {
//   upsert: LeadUpsertInput
// }

// type EquipamentoTipoConnectInput = {
//   id: string
// }

// type SalvarDadosVendaEtapa1Input_EquipamentoTipo = {
//   connect: EquipamentoTipoConnectInput
// }

// type SalvarDadosVendaEtapa1Input_EquipamentoPedido = {
//   equipamentoTipo: SalvarDadosVendaEtapa1Input_EquipamentoTipo
//   quantidade: number
//   observacao?: string
// }

// enum ContatoTipoEnum {
//   Email = 'Email',
//   Telefone = 'Telefone',
//   Celular = 'Celular',
// }

// type ContatoInput = {
//   tipo: ContatoTipoEnum
//   valor: string
//   padrao: boolean
// }

// type SalvarDadosVendaEtapa1Input_Contatos = {
//   create: ContatoInput[]
// }

// enum EnderecoTipoEnum {
//   Casa = 'Casa',
//   Trabalho = 'Trabalho',
//   Agendamento = 'Agendamento',
//   Outros = 'Outros',
// }

// type EnderecoInput = {
//   rua?: string
//   numero: string
//   bairro?: string
//   cidade?: string
//   estado?: string
//   cep: string
//   complemento?: string
//   tipo?: EnderecoTipoEnum
//   lat?: number
//   lng?: number
// }

// type SalvarDadosVendaEtapa1Input_Endereco = {
//   create?: EnderecoInput
// }

// type SalvarDadosVendaEtapa1Input_PedidoVenda = {
//   modeloContrato: SalvarDadosVendaEtapa1Input_ModeloContrato
//   valor: SalvarDadosVendaEtapa1Input_Valor
//   formaPagamento: SalvarDadosVendaEtapa1Input_FormaPagamento
//   parcelas?: number
//   desconto?: number
//   acrescimo?: number
//   lead: SalvarDadosVendaEtapa1Input_LeadUpsert
//   equipamentoPedido: SalvarDadosVendaEtapa1Input_EquipamentoPedido
//   contatos: SalvarDadosVendaEtapa1Input_Contatos
//   endereco: SalvarDadosVendaEtapa1Input_Endereco
// }

// type SalvarDadosVendaEtapa1Input = {
//   pedidoVenda: SalvarDadosVendaEtapa1Input_PedidoVenda
// }

// interface CreateBasicInfoRequest {
//   input: SalvarDadosVendaEtapa1Input
// }

const API = process.env.NEXT_PUBLIC_API as string

const graphQLClient = new GraphQLClient(API, {
  headers: {
    Authorization: 'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
    'X-Screen-Audit': 'Grabriel Pedrosinho',
  },
})

export async function createBasicInfo({ input }: DataFromSallesForm) {
  const mutation = gql`
    mutation MyMutation($input: SalvarDadosVendaEtapa1Input!) {
      salvarDadosVendaEtapa1(input: $input) {
        id
      }
    }
  `

  const variables = { input }

  try {
    const response = await graphQLClient.request(mutation, variables)
    console.log('Dados enviados com sucesso: ', response)
    return response
  } catch (error) {
    console.log(error)
    console.error('Erro na requisição GraphQL: ', error)
    throw error
  }
}
