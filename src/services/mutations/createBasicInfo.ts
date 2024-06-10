import { gql, GraphQLClient } from 'graphql-request'

interface CreateBasicInfoRequest {
  input: {
    pedidoVenda: {
      modalodeContrato: {
        connect: {
          id: string
        }
      }
      valor: {
        connect: {
          id: string
        }
      }
      formaPagamento: {
        connect: {
          id: string
        }
      }
      lead: {
        upsert: {
          nome: string
          data_nascimento: string
          documento: string
          documento_tipo: CPF
          is_cliente: boolean
          observacao: string
          publicidade: string
        }
      }
      equipamentoPedido: {
        equipamentotipo: {
          connect: { id: string }
          quantidade: number
          observacao: string
        }
      }
      contatos: { create: { tipo: Casa; valor: string; padrao: boolean } }
      endereco: {
        create: {
          numero: string
          cep: string
        }
      }
      acrescimo: number
      desconto: number
      parcelas: number
    }
  }
}

// interface CreateBasicInfoResponse {}

const API = process.env.NEXT_PUBLIC_API as string

const graphQLClient = new GraphQLClient(API, {
  headers: {
    Authorization: 'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
    'X-Screen-Audit': 'Grabriel Pedrosinho',
  },
})

export async function createBasicInfo({ input }: CreateBasicInfoRequest) {
  const mutation = gql`
    mutation MyMutation($input: CreateBasicInfoRequest) {
      salvarDadosVendaEtapa1(input: $input)
    }
  `

  const variables = { input }

  const response = await graphQLClient.request(mutation, variables)

  return response
}
