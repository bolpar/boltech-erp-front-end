interface SetCookieRequest {
  name: string
  value: string
}

export async function setCookie({ name, value }: SetCookieRequest) {
  await fetch('/api/cookies/setCookie/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      value,
    }),
  })
}
