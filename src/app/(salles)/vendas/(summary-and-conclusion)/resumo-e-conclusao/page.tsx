import Image from 'next/image'

export default function ResumoEConclusao() {
  return (
    <div className="m-auto w-fit">
      <Image
        src="/assets/certified-paper.png"
        alt=""
        width={500}
        height={600}
      />
    </div>
  )
}
