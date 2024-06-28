import request, { gql } from 'graphql-request'

const API = process.env.NEXT_PUBLIC_API as string

interface GetContractsResponse {
  ModeloContratos: {
    data: Array<{
      id: string
      descricao: string
      modalidade: string
      valor_total: number
      valor_mensal: number
      valor_ativacao: number
      valores: Array<{
        id: string
        nome: string
        valor: number
        formasPagamentos: Array<{
          id: string
          tipo: string
          parcelas: number
        }>
      }>
    }>
  }
}

export async function getContracts() {
  const query = gql`
    query {
      ModeloContratos(first: 10, page: 1) {
        data {
          id
          descricao
          modalidade
          valor_total
          valor_mensal
          valor_ativacao
          valores {
            id
            nome
            valor
            formasPagamentos {
              id
              tipo
              parcelas
            }
          }
        }
      }
    }
  `

  const response = await request<GetContractsResponse>(
    API,
    query,
    {},
    {
      Authorization:
        'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
      'X-Screen-Audit': 'Grabriel Pedrosinho',
    },
  )

  return response.ModeloContratos.data
}
