export const PATHS = {
  home: {
    url: '/',
    as: (q = '') => `/${q}`,
  },
  login: {
    url: '/auth/login',
    as: (q = '') => `/auth/login${q}`,
  },
  account: {
    url: '/account',
    as: (q = '') => `/account${q}`,
  },
  myInfo: {
    url: '/account/my-info',
    as: (q = '') => `/account/my-info${q}`,
  },
  myComments: {
    url: '/account/my-comments',
    as: (q = '') => `/account/my-comments${q}`,
  },
  myWishlist: {
    url: '/account/my-wishlist',
    as: (q = '') => `/account/my-wishlist${q}`,
  },
  myCourses: {
    url: '/account/my-courses',
    as: (q = '') => `/account/my-courses${q}`,
  },
  // userLearnings: {
  //   url: '/account/my-learnings',
  //   as: (q = '') => `/account/my-learnings${q}`,
  // },
  myTickets: {
    url: '/account/tickets',
    as: (q = '') => `/account/tickets${q}`,
  },
  category: {
    url: '/categories/[slug]',
    as: (slug: string, q = '') => `/categories/${slug}${q}`,
  },
  courses: {
    url: '/courses',
    as: (q = '') => `/courses${q && '?' + q}`,
  },
  course: {
    url: '/courses/[slug]',
    as: (slug: string, q = '') => `/courses/${slug}${q}`,
  },
  //========================================
  teaching: {
    url: '/teaching',
    as: (q = '') => `/teaching${q}`,
  },
  becomeTeacher: {
    url: '/teaching/become-teacher',
    as: (q = '') => `/teaching/become-teacher${q}`,
  },
  createCourseStep1: {
    url: '/course-forms',
    as: (q = '') => `/course-forms${q}`,
  },
  updateCourse: {
    url: '/course-forms/update/[slug]',
    as: (slug: string, q = '') => `/course-forms/update/${slug}${q}`,
  },

  //========================================
  adminPanel: {
    url: '/admin',
    as: (q = '') => `/admin${q}`,
  },
  adminCourseList: {
    url: '/admin/course-list',
    as: (q = '') => `/admin/course-list${q}`,
  },
  adminCategoryList: {
    url: '/admin/category-list',
    as: (q = '') => `/admin/category-list${q}`,
  },
  adminUserList: {
    url: '/admin/user-list',
    as: (q = '') => `/admin/user-list${q}`,
  },
}
