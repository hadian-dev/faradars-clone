export const PATHS = {
  category: {
    url: '/categories/[slug]',
    as: (slug: string, q = '') => `/categories/${slug}${q}`,
  },
  search: {
    url: '/search',
    as: (q = '') => `/search${q}`,
  },
}
