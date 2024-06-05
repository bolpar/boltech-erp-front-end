import Image from 'next/image'

export const ProfileImage = () => {
  return (
    <>
      <Image
        src="https://github.com/HiLucred.png"
        alt="Foto de perfil"
        width={100}
        height={100}
        className="h-16 w-16 rounded-full border-2 border-white dark:border-green-500"
      />

      <div className="h-16 w-px bg-zinc-200/80 dark:bg-green-500" />
    </>
  )
}
