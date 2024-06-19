'use client'

import { Button } from '@/components/UI/button'
import {
  CircleCheckIcon,
  CircleXIcon,
  PencilIcon,
  SaveIcon,
} from 'lucide-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ActionsProps = ComponentProps<'footer'>

export const Actions = ({ className }: ActionsProps) => {
  return (
    <footer className={twMerge('flex items-center justify-between', className)}>
      <div className="flex items-center gap-3">
        <Button variant="edit" icon={PencilIcon}>
          Editar
        </Button>
        <Button variant="pendent" icon={SaveIcon}>
          Salvar
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="error" icon={CircleXIcon}>
          Cancelar
        </Button>
        <Button type="submit" variant="success" icon={CircleCheckIcon}>
          Avançar
        </Button>
      </div>
    </footer>
  )
}
