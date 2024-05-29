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
        <Button color="edit" icon={PencilIcon}>
          Editar
        </Button>
        <Button color="pendent" icon={SaveIcon}>
          Salvar
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Button color="error" icon={CircleXIcon}>
          Cancelar
        </Button>
        <Button color="success" icon={CircleCheckIcon}>
          Avançar
        </Button>
      </div>
    </footer>
  )
}
