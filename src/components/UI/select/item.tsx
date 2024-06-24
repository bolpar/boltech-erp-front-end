import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface ItemProps extends SelectPrimitive.SelectItemProps {
  children: ReactNode
  value: string
}

export const Item = ({ children, value, ...rest }: ItemProps) => {
  return (
    <SelectPrimitive.Item
      value={value}
      {...rest}
      className="relative flex w-full cursor-pointer rounded px-6 py-2 text-xs text-green-500 outline-none hover:bg-green-100 dark:text-white dark:hover:bg-green-500"
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-0 mt-0.5 inline-flex w-[25px] items-center justify-center">
        <CheckIcon className="h-3 w-3" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
