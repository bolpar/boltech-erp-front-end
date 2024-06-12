export const FinancialHeader = () => {
  return (
    <header className="flex items-center justify-between gap-8">
      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-blue-700 bg-gradient-to-bl from-blue-400 to-blue-600 py-8 text-lg text-white dark:text-zinc-700">
        <span>Faturas Pagas</span>
        <h2 className="font-bold">2/12</h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-blue-700 bg-gradient-to-bl from-blue-400 to-blue-600 py-8 text-lg text-white dark:text-zinc-700">
        <span>Recibido</span>
        <h2 className="font-bold">R$ 119, 80</h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-blue-700 bg-gradient-to-bl from-blue-400 to-blue-600 py-8 text-lg text-white dark:text-zinc-700">
        <span>A Receber</span>
        <h2 className="font-bold">R$ 599, 00</h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded border-b-4 border-blue-700 bg-gradient-to-bl from-blue-400 to-blue-600 py-8 text-lg text-white dark:text-zinc-700">
        <span>Total</span>
        <h2 className="font-bold">R$ 119, 80</h2>
      </div>
    </header>
  )
}
