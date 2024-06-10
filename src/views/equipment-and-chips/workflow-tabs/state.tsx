type StateProps = {
  state: 'success' | 'error' | 'pendent'
}

const color = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  pendent: 'bg-yellow-500',
}

export const State = ({ state }: StateProps) => {
  const stateColor = color[state]

  return <div className={`mt-1 h-1.5 w-1.5 rounded-full ${stateColor}`} />
}
