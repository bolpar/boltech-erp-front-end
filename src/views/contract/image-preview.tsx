import { PrinterIcon, SaveIcon } from 'lucide-react'
import Image from 'next/image'

export const ImagePreview = () => {
  return (
    <div className="col-span-3 flex items-end gap-2">
      <Image
        src="/assets/certified-paper.png"
        alt=""
        width={400}
        height={800}
      />

      <div className="grid h-fit items-center gap-2">
        <button className="rounded-md bg-green-400 p-4 text-white hover:bg-green-500 dark:text-zinc-700">
          <PrinterIcon />
        </button>
        <button className="rounded-md bg-green-400 p-4 text-white hover:bg-green-500 dark:text-zinc-700">
          <SaveIcon />
        </button>
        <button className="rounded-md bg-green-400 p-4 text-white hover:bg-green-500 dark:text-zinc-700">
          <PrinterIcon />
        </button>
        <button className="rounded-md bg-green-400 p-4 text-white hover:bg-green-500 dark:text-zinc-700">
          <SaveIcon />
        </button>
      </div>
    </div>
  )
}
