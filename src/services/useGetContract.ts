import { useQuery } from '@tanstack/react-query'
import { getContract } from '../graphql/query/getContract'

interface UseGetContractRequest {
  id: string
}

export function useGetContract({ id }: UseGetContractRequest) {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['contract', id],
    queryFn: async () => await getContract({ id }),
    enabled: !!id,
  })

  return {
    data,
    error,
    isLoading,
    refetch,
  }
}
