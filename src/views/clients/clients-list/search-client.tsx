import * as InputText from '@/components/UI/input-text'
import { ClientsList } from './clients-list'

export const SearchClient = () => {
  return (
    <form className="grid h-full grid-cols-4">
      <InputText.Root className="col-span-2">
        <InputText.Input placeHolder="Digite o nome do cliente..." />
        <InputText.SearchButton className="h-full" />
      </InputText.Root>

      <ClientsList className="col-span-full mt-4" />
    </form>
  )
}
