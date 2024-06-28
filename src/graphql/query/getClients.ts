import request, { gql } from 'graphql-request'

const API = process.env.NEXT_PUBLIC_API as string

interface GetClientsResponse {
  clientes: {
    data: {
      nome: string
      documento: string
      created_at: string
    }[]
  }
}

export async function getClients() {
  const query = gql`
    query {
      clientes(first: 20, page: 1) {
        data {
          nome
          documento
          created_at
        }
      }
    }
  `

  const response = await request<GetClientsResponse>(
    API,
    query,
    {},
    {
      Authorization:
        'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
      'X-Screen-Audit': 'Grabriel Pedrosinho',
    },
  )

  return response.clientes.data
}
