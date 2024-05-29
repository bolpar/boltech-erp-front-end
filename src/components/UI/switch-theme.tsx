'use client'

import * as Switch from '@radix-ui/react-switch'
import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const SwitchTheme = () => {
  const [isActive, setIsActive] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (isActive) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [isActive, setTheme])

  return (
    <div>
      <Switch.Root
        onClick={() => setIsActive((state) => !state)}
        className="relative h-5 w-[42px] cursor-default rounded-full border bg-white shadow-sm outline-none data-[state=checked]:border-0 data-[state=checked]:bg-black"
        id="airplane-mode"
      >
        <Switch.Thumb className="group flex h-[1rem] w-[1rem] translate-x-0.5 items-center justify-center rounded-full bg-zinc-200 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[23px] data-[state=checked]:bg-zinc-100">
          {theme === 'dark' ? (
            <MoonStarIcon className="z-50 h-3 w-3 text-black group-[data-[state=checked]]:translate-x-[23px]" />
          ) : (
            <SunIcon className="h-3 w-3" />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  )
}
