import request, { gql } from 'graphql-request'

const API = process.env.NEXT_PUBLIC_API as string

interface GetContractRequest {
  id: string
}

interface GetContractResponse {
  ModeloContrato: {
    id: string
    descricao: string
    modalidade: string
  }
}

export async function getContract({ id }: GetContractRequest) {
  const query = gql`
    query MyQuery($id: ID) {
      ModeloContrato(id: $id) {
        id
        descricao
        modalidade
      }
    }
  `

  const variables = { id }

  const response = await request<GetContractResponse>(API, query, variables, {
    Authorization: 'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
    'X-Screen-Audit': 'Grabriel Pedrosinho',
  })

  return response.ModeloContrato
}
