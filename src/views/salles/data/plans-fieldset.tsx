'use client'

import * as InputField from '@/components/UI/input'
import { Spinner } from '@/components/UI/spinner'
import { LegendFieldset } from '@/components/legend-fieldset'
import { useGetContract } from '@/services/useGetContract'
import { useGetCookie } from '@/services/useGetCookie'
import { PlansModal } from './plans-modal'

export const PlansFieldset = () => {
  const { data: cookieName } = useGetCookie({
    cookieName: 'currentOption',
  })

  const { data: contractMethod, isLoading } = useGetContract({
    id: cookieName?.cookie?.value as string,
  })

  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>PLANOS</LegendFieldset>

      <div className="col-span-2 grid grid-cols-2 gap-4">
        <PlansModal className="w-full" />

        {isLoading && <Spinner />}

        {!isLoading && contractMethod && (
          <InputField.Root label="Plano">
            <InputField.Text
              placeHolder={contractMethod?.modalidade}
              value={contractMethod?.modalidade}
              disabled
            />
          </InputField.Root>
        )}
      </div>
    </fieldset>
  )
}
