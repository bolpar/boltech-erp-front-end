import * as Select from '@/components/UI/select'
import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { ImagePreview } from '@/views/salles/contract/image-preview'

export default function Contract() {
  return (
    <form>
      <div className="grid grid-cols-4 gap-4">
        <Select.Root>
          <Select.Trigger
            label="Selecione ..."
            placeholder="Selecione o BT"
            className="h-fit"
          />
          <Select.Content>
            <Select.Item value="BT">BT</Select.Item>
            <Select.Item value="BT">BT</Select.Item>
            <Select.Item value="BT">BT</Select.Item>
          </Select.Content>
        </Select.Root>

        <ImagePreview />
      </div>

      <Separator className="my-8" />
      <Actions />
    </form>
  )
}
