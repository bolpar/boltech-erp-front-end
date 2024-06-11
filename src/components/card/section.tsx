interface SectionProps {
  title: string
  value: string
}

export const Section = ({ title, value }: SectionProps) => {
  return (
    <div>
      <span className="text-xs text-zinc-700 dark:text-zinc-700">{title}</span>
      <div className="mt-1 text-sm text-zinc-700">
        <span className="truncate font-bold">{value}</span>
      </div>
    </div>
  )
}
