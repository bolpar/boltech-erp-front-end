'use client'

import * as Switch from '@radix-ui/react-switch'
import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

interface SwitchThemeProps {
  cookieTheme: string
}

export const SwitchTheme = ({ cookieTheme }: SwitchThemeProps) => {
  const [theme, setTheme] = useState(() => {
    return cookieTheme
  })
  const { theme: nextTheme, setTheme: setNextTheme } = useTheme()

  async function changeTheme() {
    console.log('Chamou!')
    console.log(theme)
    console.log(cookieTheme)
    if (!cookieTheme) {
      setTheme('dark')
      setNextTheme('dark')

      await fetch('/api/cookies/theme/', {
        method: 'POST',
        body: JSON.stringify({ theme: 'light' }),
      })
    }

    if (theme === 'light') {
      setTheme('dark')
      setNextTheme('dark')
      console.log('Mudou para modo dark')
    }

    if (theme === 'dark') {
      setTheme('light')
      setNextTheme('light')
      console.log('Mudou para modo light')
    }

    await fetch('/api/cookies/theme/', {
      method: 'POST',
      body: JSON.stringify({ theme }),
    })
  }

  return (
    <div>
      <Switch.Root
        onClick={() => changeTheme()}
        className="relative h-5 w-[42px] cursor-default rounded-full border bg-white shadow-sm outline-none data-[state=checked]:border-0 data-[state=checked]:bg-black"
        id="airplane-mode"
      >
        <Switch.Thumb className="group flex h-[1rem] w-[1rem] translate-x-0.5 items-center justify-center rounded-full bg-zinc-200 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[23px] data-[state=checked]:bg-zinc-100">
          {nextTheme === 'dark' ? (
            <MoonStarIcon className="z-50 h-3 w-3 text-black group-[data-[state=checked]]:translate-x-[23px]" />
          ) : (
            <SunIcon className="h-3 w-3" />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  )
}
