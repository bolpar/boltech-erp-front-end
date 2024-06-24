import * as InputText from '@/components/UI/input'
import { SuppliersList } from './suppliers-list'

export const SearchSupplier = () => {
  return (
    <form className="grid h-full grid-cols-4">
      <InputText.Root className="col-span-2">
        <InputText.Input placeHolder="Digite o nome do cliente..." />
        <InputText.SearchButton className="h-full" />
      </InputText.Root>

      <SuppliersList className="col-span-full mt-4" />
    </form>
  )
}
