import { useQuery } from '@tanstack/react-query'

interface UseGetCookieRequest {
  cookieName: string
}

async function getCookie(cookieName: string) {
  const response = await fetch('/api/cookies/getCookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: cookieName,
    }),
  })

  const data = await response.json()

  return data
}

export function useGetCookie({ cookieName }: UseGetCookieRequest) {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['cookie', cookieName],
    queryFn: async () => await getCookie(cookieName),
    // enabled: !!cookieName,
  })

  return {
    data,
    error,
    isLoading,
    refetch,
  }
}
