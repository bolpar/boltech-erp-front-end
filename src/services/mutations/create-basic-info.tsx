import { DataFromSallesForm } from '@/views/salles/@form/data-form-schema'
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

const API = process.env.NEXT_PUBLIC_API as string

const graphQLClient = new GraphQLClient(API, {
  headers: {
    Authorization: 'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
    'X-Screen-Audit': 'Grabriel Pedrosinho',
  },
})

export async function createBasicInfo({ input }: DataFromSallesForm) {
  const mutation = gql`
    mutation MyMutation($input: CreateBasicInfoRequest) {
      salvarDadosVendaEtapa1(input: $input)
    }
  `

  const variables = { input }

  const response = await graphQLClient.request(mutation, variables)

  return response
}
