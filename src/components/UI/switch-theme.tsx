'use client'

import { initializeTheme } from '@/utils/initializeTheme';
import * as Switch from '@radix-ui/react-switch';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

interface SwitchThemeProps {
  cookieTheme: string
}

export const SwitchTheme = ({ cookieTheme }: SwitchThemeProps) => {
  const [theme, setTheme] = useState(() => {
    return cookieTheme
  })
  const { theme: nextTheme, setTheme: setNextTheme } = useTheme()

  const handleInitializeTheme = useCallback(() => {
    initializeTheme({ cookieTheme, setTheme, setNextTheme })
  }, [cookieTheme, setTheme, setNextTheme]) 

  useEffect(() => {
    handleInitializeTheme()
  }, [handleInitializeTheme])


  async function changeTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setNextTheme(newTheme)

    await fetch('/api/cookies/theme/', {
      method: 'POST',
      body: JSON.stringify({ theme: newTheme }),
    })
  }

  return (
    <div>
      <Switch.Root
        id="airplane-mode"
        onClick={() => changeTheme()}
        checked={nextTheme === 'dark'}
        className="relative h-5 w-[42px] cursor-default rounded-full border bg-white shadow-sm outline-none data-[state=checked]:border-0 data-[state=checked]:bg-black"
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
