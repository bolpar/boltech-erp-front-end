import { useQuery } from '@tanstack/react-query'
import { getClients } from '../graphql/query/getClients'

export function useGetClients() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['clientsFromClientesPage'],
    queryFn: async () => await getClients(),
  })

  return {
    data: data ?? [],
    error,
    isLoading,
  }
}
