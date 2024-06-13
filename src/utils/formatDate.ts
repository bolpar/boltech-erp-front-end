import { format } from 'date-fns'

export function formatDate(newDate: string) {
  const date = new Date(newDate)
  const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss')

  return formattedDate
}
