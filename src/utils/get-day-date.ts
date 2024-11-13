export function GetHourDate(): string {

  const date = new Date()

  const hour = date.getHours()
  const mins = date.getMinutes().toString().padStart(2, '0')

  return `${hour}-${mins}`
}