import * as SelectPrimitive from '@radix-ui/react-select'
import { ReactNode } from 'react'

interface RootProps extends SelectPrimitive.SelectProps {
  children: ReactNode
}

export const Root = ({ children, ...rest }: RootProps) => {
  return <SelectPrimitive.Root {...rest}>{children}</SelectPrimitive.Root>
}
