import request, { gql } from 'graphql-request'

const API = process.env.NEXT_PUBLIC_API as string

interface GetNumberOfInstallmentsRequest {
  id: string
}

interface GetNumberOfInstallmentsResponse {
  FormaPagamento: {
    parcelas: number
  }
}

export async function getNumberOfInstallments({
  id,
}: GetNumberOfInstallmentsRequest) {
  const query = gql`
    query MyQuery($id: ID) {
      FormaPagamento(id: $id) {
        parcelas
      }
    }
  `

  const variables = { id }

  const response = await request<GetNumberOfInstallmentsResponse>(
    API,
    query,
    variables,
    {
      Authorization:
        'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
      'X-Screen-Audit': 'Grabriel Pedrosinho',
    },
  )

  return response.FormaPagamento
}
