import { getContracts } from '@/services/query/getContracts'

export default async function Test() {
  const data = await getContracts()

  return <pre>{JSON.stringify(data)}</pre>
}
