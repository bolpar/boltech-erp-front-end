interface SectionProps {
  title: string
  value: string
}

export const Section = ({ title, value }: SectionProps) => {
  return (
    <div>
      <span className="text-xs text-zinc-700 dark:text-white">{title}</span>
      <div className="mt-1 rounded-md bg-green-200 p-2 text-sm text-zinc-700 dark:bg-green-400">
        <span className="truncate font-bold">{value}</span>
      </div>
    </div>
  )
}
