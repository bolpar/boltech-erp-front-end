interface initializeThemeProps {
  cookieTheme: string | undefined
  setTheme: (theme: string) => void
  setNextTheme: (theme: string) => void
}
export async function initializeTheme({
  cookieTheme,
  setTheme,
  setNextTheme,
}: initializeThemeProps) {
  if (!cookieTheme) {
    setTheme('dark')
    setNextTheme('dark')

    await fetch('/api/cookies/theme/', {
      method: 'POST',
      body: JSON.stringify({ theme: 'light' }),
    })
  }
}
