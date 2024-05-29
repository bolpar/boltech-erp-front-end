export const FieldsetHeader = () => {
  return (
    <fieldset className="flex h-full items-start gap-4">
      <div className="flex w-fit items-center justify-center rounded-lg border border-green-100/80 bg-green-100/30 p-4 shadow-sm dark:border-green-500">
        <div className="flex items-center justify-center gap-4">
          <div>
            <span className="text-xs text-zinc-700 dark:text-white">
              Tipo do Aparelho
            </span>
            <div className="mt-1 rounded-md bg-green-200 p-2 text-sm text-zinc-700 dark:bg-green-400">
              <span className="truncate font-bold">Valor do aparelho</span>
            </div>
          </div>

          <div>
            <span className="text-xs text-zinc-700 dark:text-white">
              Quantidade
            </span>
            <div className="mt-1 rounded-md bg-green-200 p-2 text-sm text-zinc-700 dark:bg-green-400">
              <span className="truncate font-bold">1/3</span>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  )
}
