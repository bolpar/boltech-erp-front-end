'use client'

import * as SelectionModal from '@/components/UI/selection-modal'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { PlanOne } from './plan-one'
import { PlanThree } from './plan-three'
import { PlanTwo } from './plan-two'

export const PlansModal = () => {
  return (
    <SelectionModal.Root label="Selecione o plano desejado">
      <SelectionModal.Trigger title="Planos" />

      <SelectionModal.Content className="flex max-w-[1000px] items-center justify-center gap-4 dark:bg-darkMode">
        <RadioGroup.Root>
          <div className="flex gap-4">
            <PlanOne />
            <PlanTwo />
            <PlanThree />
          </div>
        </RadioGroup.Root>
      </SelectionModal.Content>
    </SelectionModal.Root>
  )
}
