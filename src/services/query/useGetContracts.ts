import { useQuery } from '@tanstack/react-query'
import { getContracts } from './getContracts'

export function useGetContracts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['contracts'],
    queryFn: async () => await getContracts(),
  })

  return {
    data: data ?? [],
    error,
    isLoading,
  }
}
