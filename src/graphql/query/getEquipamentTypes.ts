import request, { gql } from 'graphql-request'

const API = process.env.NEXT_PUBLIC_API as string

interface GetEquipamentTypesResponse {
  EquipamentoTipos: {
    data: Array<{
      id: string
      nome: string
      status: boolean
    }>
  }
}

export async function getEquipamentTypes() {
  const query = gql`
    query {
      EquipamentoTipos(first: 10) {
        data {
          id
          nome
          status
        }
      }
    }
  `

  const response = await request<GetEquipamentTypesResponse>(
    API,
    query,
    {},
    {
      Authorization:
        'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
      'X-Screen-Audit': 'Grabriel Pedrosinho',
    },
  )

  return response.EquipamentoTipos.data
}
