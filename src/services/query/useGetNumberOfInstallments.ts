import { useQuery } from '@tanstack/react-query'
import { getNumberOfInstallments } from './getNumberOfInstallments'

interface UseGetNumberOfInstallmentsRequest {
  id: string
}

export function useGetNumberOfInstallments({
  id,
}: UseGetNumberOfInstallmentsRequest) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['numberOfInstallments', id],
    queryFn: async () => await getNumberOfInstallments({ id }),
  })

  return {
    data,
    isLoading,
    error,
  }
}
