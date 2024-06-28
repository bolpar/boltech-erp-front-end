import { useQuery } from '@tanstack/react-query'
import { getPaymentMethods } from '../graphql/query/getPaymentMethods'

interface UseGetPaymentMethodsRequest {
  id: string
}

export function useGetPaymentMethods({ id }: UseGetPaymentMethodsRequest) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['paymentMethods', id],
    queryFn: async () => await getPaymentMethods({ id }),
  })

  return {
    data,
    isLoading,
    error,
  }
}
