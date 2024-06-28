export async function getValueCookie(cookieName: string) {
  const response = await fetch('/api/cookies/getCookie/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: cookieName,
    }),
  })

  const data: string = await response.json()

  return data
}
