import Image from 'next/image'

export const Logo = () => {
  return (
    <>
      <Image
        src={`/assets/boltech-logo.webp`}
        alt="Boltech Logo"
        width={100}
        height={80}
        className="m-auto mb-4 hidden w-fit pb-1.5 dark:block"
      />

      <Image
        src={`/assets/boltech-logo.png`}
        alt="Boltech Logo"
        width={100}
        height={80}
        className="m-auto mb-4 block w-fit dark:hidden"
      />
    </>
  )
}
