export const PATHS = {
  home: {
    url: '/',
    as: (q = '') => `/${q}`,
  },
  category: {
    url: '/categories/[slug]',
    as: (slug: string, q = '') => `/categories/${slug}${q}`,
  },
  courses: {
    url: '/courses',
    as: (q = '') => `/courses${q}`,
  },
  course: {
    url: '/courses/[slug]',
    as: (slug: string, q = '') => `/courses/${slug}${q}`,
  },
}
