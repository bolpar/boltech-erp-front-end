import { getClients } from '@/services/query/getClients'

export default async function Home() {
  const clients = await getClients()

  return (
    <>
      <h1>Olá, mundo.</h1>
      <div>{JSON.stringify(clients)}</div>
    </>
  )
}
