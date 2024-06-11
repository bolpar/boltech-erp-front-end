export const FinancialHeader = () => {
  return (
    <header className="flex items-center justify-between gap-8">
      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-yellow-700 bg-yellow-500 py-8 text-lg text-white dark:text-zinc-700">
        <span>Faturas Pagas</span>
        <h2>2/12</h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-purple-700 bg-purple-500 py-8 text-lg text-white dark:text-zinc-700">
        <span>Recibido</span>
        <h2>R$ 119, 80</h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-blue-700 bg-blue-500 py-8 text-lg text-white dark:text-zinc-700">
        <span>A Receber</span>
        <h2>R$ 599, 00</h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-green-700 bg-green-500 py-8 text-lg text-white dark:text-zinc-700">
        <span>Total</span>
        <h2>R$ 119, 80</h2>
      </div>
    </header>
  )
}
