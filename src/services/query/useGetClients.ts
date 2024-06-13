import { useQuery } from '@tanstack/react-query'
import { getClients } from './getClients'

export function useGetClients() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['clientsFromClientesPage'],
    queryFn: async () => await getClients(),
  })

  return {
    data,
    error,
    isLoading,
  }
}
