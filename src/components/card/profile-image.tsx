import Image from 'next/image'

export const ProfileImage = () => {
  return (
    <Image
      src="https://github.com/HiLucred.png"
      alt="Foto de perfil"
      width={100}
      height={100}
      className="h-16 w-16 rounded-full"
    />
  )
}
