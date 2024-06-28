import request, { gql } from 'graphql-request'

const API = process.env.NEXT_PUBLIC_API as string

interface GetPaymentMehodsRequest {
  id: string
}

interface GetPaymentMethodsResponse {
  Valor: {
    formasPagamentos: Array<{
      id: string
      tipo: string
      parcelas: number
    }>
  }
}

export async function getPaymentMethods({ id }: GetPaymentMehodsRequest) {
  const query = gql`
    query MyQuery($id: ID) {
      Valor(id: $id) {
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
  `

  const variables = { id }

  const response = await request<GetPaymentMethodsResponse>(
    API,
    query,
    variables,
    {
      Authorization:
        'Bearer 2|jq0CMuGhvPTa1mptTBIYuebgRDQWG2infqR61Undfbef4705',
      'X-Screen-Audit': 'Grabriel Pedrosinho',
    },
  )

  return response.Valor
}
