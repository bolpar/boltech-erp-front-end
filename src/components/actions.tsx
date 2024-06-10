'use client'

import { Button } from '@/components/UI/button'
import {
  CircleCheckIcon,
  CircleXIcon,
  PencilIcon,
  SaveIcon,
} from 'lucide-react'

export const Actions = () => {
  return (
    <footer className="flex items-center justify-between">
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
        <Button variant="success" icon={CircleCheckIcon}>
          Avançar
        </Button>
      </div>
    </footer>
  )
}
