import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDownIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface ContentProps extends SelectPrimitive.SelectContentProps {
  children: ReactNode
}

export const Content = ({ children, ...rest }: ContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        side="bottom"
        position="popper"
        sideOffset={8}
        className="z-[99999] overflow-hidden rounded border bg-white p-2 text-sm dark:border-green-500 dark:bg-neutral-600"
        {...rest}
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}
