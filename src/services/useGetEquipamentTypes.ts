import { useQuery } from '@tanstack/react-query'
import { getEquipamentTypes } from '../graphql/query/getEquipamentTypes'

export function useGetEquipamentTypes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['equipamentTypes'],
    queryFn: async () => await getEquipamentTypes(),
  })

  return {
    data: data ?? [],
    isLoading,
    error,
  }
}
