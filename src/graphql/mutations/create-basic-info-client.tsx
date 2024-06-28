'use client'

import { DataFromSallesForm } from '@/views/salles/data/@form/data-form-schema'
import { useQuery } from '@tanstack/react-query'
import { createBasicInfo } from './create-basic-info'

export function createBasicInfoClient(basicInfoData: DataFromSallesForm) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryKey: ['dataFromSalles'],
    queryFn: async () =>
      await createBasicInfo({
        input: { pedidoVenda: basicInfoData.input.pedidoVenda },
      }),
  })

  return { data }
}
