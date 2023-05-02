export function splitArray<T>(array: T[], per: number) {
  return array.reduce(
    (acc, _, i) => (i % per === 0 ? [...acc, array.slice(i, i + per)] : acc),
    [] as T[][]
  )
}
