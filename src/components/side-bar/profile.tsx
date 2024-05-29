import { LogOutIcon } from 'lucide-react'
import Image from 'next/image'

export const Profile = () => {
  return (
    <footer className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <Image
          src="https://github.com/HiLucred.png"
          alt="Foto de perfil"
          width={100}
          height={100}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col truncate">
          <span className="text-sm font-semibold text-zinc-700 dark:text-white">
            Gabriel Pedroso
          </span>
          <span className="truncate text-sm text-zinc-500 dark:text-white/60">
            gabriellucaspd@gmail.com
          </span>
        </div>
      </div>

      <button className="rounded p-2 hover:bg-red-100">
        <LogOutIcon
          width={20}
          height={20}
          className="text-zinc-500 dark:text-red-500"
        />
      </button>
    </footer>
  )
}
