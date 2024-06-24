import * as InputField from '@/components/UI/input'
import { LegendFieldset } from '@/components/legend-fieldset'
import { PlansModal } from './plans-modal'

export const PlansFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>PLANOS</LegendFieldset>

      <div className="col-span-2 grid grid-cols-2 gap-4">
        <PlansModal className="w-full" />

        <InputField.Root label="Plano">
          <InputField.Text
            placeHolder="Plano Recorrente -  Valor (R$ 559, 00)*"
            disabled
          />
        </InputField.Root>
      </div>
    </fieldset>
  )
}
