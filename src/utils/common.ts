export function splitArray<T>(array: T[], per: number) {
  return array.reduce(
    (acc, _, i) => (i % per === 0 ? [...acc, array.slice(i, i + per)] : acc),
    [] as T[][]
  )
}

export const getDirection = (local: string) => {
  return local === 'fa' ? 'rtl' : 'ltr'
}

export function last<T>(array: T[]) {
  return array.slice(-1)[0]
}

export const normalizeString = (text: string) => {
  return text
    .trim()
    .toLocaleLowerCase()
    .replace(/[^0-9a-zآ-ی]+/g, '-')
}
