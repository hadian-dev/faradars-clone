type ID = string | number

type TCourse = {
  id: ID
  slug: string
  name: string
  descriptions: string[]
  image: string
  price: number
  originalPrice: number
  time: string
  language: string
}

type TInstructor = {
  id: ID
  name: string
  image: string
  biography: string
}

type TCategory = {
  id: ID
  slug: string
  name: string
  image: string
}
