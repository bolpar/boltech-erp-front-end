import { LegendFieldset } from '@/components/legend-fieldset'
import { Table } from '@/components/table'

export const MobileDeviceRecordsFieldset = () => {
  return (
    <div className="col-span-full">
      <LegendFieldset>REGISTROS DE DISPOSITIVOS MÓVEIS</LegendFieldset>
      <Table />
    </div>
  )
}
