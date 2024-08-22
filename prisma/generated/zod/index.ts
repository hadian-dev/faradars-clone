import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AccountScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','providerType','providerId','providerAccountId','refreshToken','accessToken','accessTokenExpire','sessionState','userId']);

export const CategoriesOnCourseScalarFieldEnumSchema = z.enum(['assignedAt','courseId','categoryId']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','slug','image','cover','description','isActive','parentId']);

export const CourseDescriptionScalarFieldEnumSchema = z.enum(['id','content','position','courseId']);

export const CourseFeatureScalarFieldEnumSchema = z.enum(['id','name','value','image','position','courseId']);

export const CourseScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','publishedAt','name','slug','enabled','viewCount','rating','ratingCount','favoriteCount','duration','price','originalPrice','image','publisher','videoCover','size','status','language','type']);

export const DemoScalarFieldEnumSchema = z.enum(['id','name','link','position','courseId']);

export const InstructorEducationalBackgroundScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','degree','grade','university','startDate','endDate','instructorId']);

export const InstructorScalarFieldEnumSchema = z.enum(['id','assignedAt','grade','degree','htmlContent','field','coverImage','rating','ratingCount','userId']);

export const InstructorsOnCourseScalarFieldEnumSchema = z.enum(['assignedAt','courseId','instructorId']);

export const LessonScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','description','duration','video','images','notes','practices','rating','ratingCount','courseId']);

export const PrerequisiteScalarFieldEnumSchema = z.enum(['id','name','link','type','position','courseId']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const ReviewScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','text','rating','ratingCount','userId','courseId']);

export const SessionScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','expire','sessionToken','accessToken','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TagScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','slug']);

export const TagsOnCourseScalarFieldEnumSchema = z.enum(['assignedAt','courseId','tagId']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','image','email','phone','slug','biography','emailVerified','phoneVerified','wishlist','gender']);

export const UserSocialMediaScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','link','type','userId']);

export const UsersOnCourseScalarFieldEnumSchema = z.enum(['assignedAt','courseId','userId']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','identifier','token','expires']);

export const LanguageSchema = z.enum(['EN','FA']);

export type LanguageType = `${z.infer<typeof LanguageSchema>}`

export const CourseTypeSchema = z.enum(['ONLINE','WEBINAR']);

export type CourseTypeType = `${z.infer<typeof CourseTypeSchema>}`

export const CourseStateSchema = z.enum(['STARTED','DRAFT','ACCEPTED','PROGRESS','PUBLISHED','FINISHED']);

export type CourseStateType = `${z.infer<typeof CourseStateSchema>}`

export const GenderTypeSchema = z.enum(['Man','Woman','Unknown']);

export type GenderTypeType = `${z.infer<typeof GenderTypeSchema>}`

export const SocialLinkTypeSchema = z.enum(['WEBSITE','LINKEDIN','TWITTER','YOUTUBE','INSTAGRAM','FACEBOOK','GITHUB']);

export type SocialLinkTypeType = `${z.infer<typeof SocialLinkTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().nullable(),
  description: z.string().nullable(),
  isActive: z.boolean(),
  parentId: z.number().int().nullable(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// COURSE SCHEMA
/////////////////////////////////////////

export const CourseSchema = z.object({
  status: CourseStateSchema,
  language: LanguageSchema,
  type: CourseTypeSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  publishedAt: z.string(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean(),
  viewCount: z.number().int(),
  rating: z.number().int(),
  ratingCount: z.number().int(),
  favoriteCount: z.number().int(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string(),
  publisher: z.string(),
  videoCover: z.string(),
  size: z.string(),
})

export type Course = z.infer<typeof CourseSchema>

/////////////////////////////////////////
// COURSE DESCRIPTION SCHEMA
/////////////////////////////////////////

export const CourseDescriptionSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  position: z.number().int(),
  courseId: z.number().int().nullable(),
})

export type CourseDescription = z.infer<typeof CourseDescriptionSchema>

/////////////////////////////////////////
// LESSON SCHEMA
/////////////////////////////////////////

export const LessonSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
  description: z.string(),
  duration: z.string().nullable(),
  video: z.string().nullable(),
  images: z.string().array(),
  notes: z.string().array(),
  practices: z.string().array(),
  rating: z.number().int(),
  ratingCount: z.number().int(),
  courseId: z.number().int().nullable(),
})

export type Lesson = z.infer<typeof LessonSchema>

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
  slug: z.string(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// DEMO SCHEMA
/////////////////////////////////////////

export const DemoSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  link: z.string(),
  position: z.number().int().nullable(),
  courseId: z.number().int(),
})

export type Demo = z.infer<typeof DemoSchema>

/////////////////////////////////////////
// PREREQUISITE SCHEMA
/////////////////////////////////////////

export const PrerequisiteSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  link: z.string().nullable(),
  type: z.string(),
  position: z.number().int().nullable(),
  courseId: z.number().int(),
})

export type Prerequisite = z.infer<typeof PrerequisiteSchema>

/////////////////////////////////////////
// COURSE FEATURE SCHEMA
/////////////////////////////////////////

export const CourseFeatureSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  value: z.string().nullable(),
  image: z.string().nullable(),
  position: z.number().int().nullable(),
  courseId: z.number().int(),
})

export type CourseFeature = z.infer<typeof CourseFeatureSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  providerType: z.string(),
  providerId: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().nullable(),
  accessToken: z.string().nullable(),
  accessTokenExpire: z.coerce.date().nullable(),
  sessionState: z.string().nullable(),
  userId: z.number().int(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  expire: z.coerce.date(),
  sessionToken: z.string(),
  accessToken: z.string(),
  userId: z.number().int(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  gender: GenderTypeSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  name: z.string().nullable(),
  image: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  slug: z.string().nullable(),
  biography: z.string().nullable(),
  emailVerified: z.coerce.date().nullable(),
  phoneVerified: z.coerce.date().nullable(),
  wishlist: z.number().int().array(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// INSTRUCTOR SCHEMA
/////////////////////////////////////////

export const InstructorSchema = z.object({
  id: z.number().int(),
  assignedAt: z.coerce.date(),
  grade: z.string(),
  degree: z.string(),
  htmlContent: z.string(),
  field: z.string(),
  coverImage: z.string(),
  rating: z.number().int(),
  ratingCount: z.number().int(),
  userId: z.number().int(),
})

export type Instructor = z.infer<typeof InstructorSchema>

/////////////////////////////////////////
// INSTRUCTOR EDUCATIONAL BACKGROUND SCHEMA
/////////////////////////////////////////

export const InstructorEducationalBackgroundSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  degree: z.string(),
  grade: z.string(),
  university: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  instructorId: z.number().int().nullable(),
})

export type InstructorEducationalBackground = z.infer<typeof InstructorEducationalBackgroundSchema>

/////////////////////////////////////////
// USER SOCIAL MEDIA SCHEMA
/////////////////////////////////////////

export const UserSocialMediaSchema = z.object({
  type: SocialLinkTypeSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
  link: z.string(),
  userId: z.number().int().nullable(),
})

export type UserSocialMedia = z.infer<typeof UserSocialMediaSchema>

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  text: z.string(),
  rating: z.number().int(),
  ratingCount: z.number().int(),
  userId: z.number().int(),
  courseId: z.number().int(),
})

export type Review = z.infer<typeof ReviewSchema>

/////////////////////////////////////////
// INSTRUCTORS ON COURSE SCHEMA
/////////////////////////////////////////

export const InstructorsOnCourseSchema = z.object({
  assignedAt: z.coerce.date(),
  courseId: z.number().int(),
  instructorId: z.number().int(),
})

export type InstructorsOnCourse = z.infer<typeof InstructorsOnCourseSchema>

/////////////////////////////////////////
// CATEGORIES ON COURSE SCHEMA
/////////////////////////////////////////

export const CategoriesOnCourseSchema = z.object({
  assignedAt: z.coerce.date(),
  courseId: z.number().int(),
  categoryId: z.number().int(),
})

export type CategoriesOnCourse = z.infer<typeof CategoriesOnCourseSchema>

/////////////////////////////////////////
// USERS ON COURSE SCHEMA
/////////////////////////////////////////

export const UsersOnCourseSchema = z.object({
  assignedAt: z.coerce.date(),
  courseId: z.number().int(),
  userId: z.number().int(),
})

export type UsersOnCourse = z.infer<typeof UsersOnCourseSchema>

/////////////////////////////////////////
// TAGS ON COURSE SCHEMA
/////////////////////////////////////////

export const TagsOnCourseSchema = z.object({
  assignedAt: z.coerce.date(),
  courseId: z.number().int(),
  tagId: z.number().int(),
})

export type TagsOnCourse = z.infer<typeof TagsOnCourseSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  parent: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  courses: z.union([z.boolean(),z.lazy(() => CategoriesOnCourseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
  courses: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  image: z.boolean().optional(),
  cover: z.boolean().optional(),
  description: z.boolean().optional(),
  isActive: z.boolean().optional(),
  parentId: z.boolean().optional(),
  parent: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  courses: z.union([z.boolean(),z.lazy(() => CategoriesOnCourseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COURSE
//------------------------------------------------------

export const CourseIncludeSchema: z.ZodType<Prisma.CourseInclude> = z.object({
  instructors: z.union([z.boolean(),z.lazy(() => InstructorsOnCourseFindManyArgsSchema)]).optional(),
  prerequisites: z.union([z.boolean(),z.lazy(() => PrerequisiteFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsOnCourseFindManyArgsSchema)]).optional(),
  lessons: z.union([z.boolean(),z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  demos: z.union([z.boolean(),z.lazy(() => DemoFindManyArgsSchema)]).optional(),
  features: z.union([z.boolean(),z.lazy(() => CourseFeatureFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoriesOnCourseFindManyArgsSchema)]).optional(),
  htmlDescriptions: z.union([z.boolean(),z.lazy(() => CourseDescriptionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CourseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CourseArgsSchema: z.ZodType<Prisma.CourseArgs> = z.object({
  select: z.lazy(() => CourseSelectSchema).optional(),
  include: z.lazy(() => CourseIncludeSchema).optional(),
}).strict();

export const CourseCountOutputTypeArgsSchema: z.ZodType<Prisma.CourseCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CourseCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CourseCountOutputTypeSelectSchema: z.ZodType<Prisma.CourseCountOutputTypeSelect> = z.object({
  instructors: z.boolean().optional(),
  prerequisites: z.boolean().optional(),
  tags: z.boolean().optional(),
  lessons: z.boolean().optional(),
  users: z.boolean().optional(),
  demos: z.boolean().optional(),
  features: z.boolean().optional(),
  reviews: z.boolean().optional(),
  categories: z.boolean().optional(),
  htmlDescriptions: z.boolean().optional(),
}).strict();

export const CourseSelectSchema: z.ZodType<Prisma.CourseSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  publishedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  enabled: z.boolean().optional(),
  viewCount: z.boolean().optional(),
  rating: z.boolean().optional(),
  ratingCount: z.boolean().optional(),
  favoriteCount: z.boolean().optional(),
  duration: z.boolean().optional(),
  price: z.boolean().optional(),
  originalPrice: z.boolean().optional(),
  image: z.boolean().optional(),
  publisher: z.boolean().optional(),
  videoCover: z.boolean().optional(),
  size: z.boolean().optional(),
  status: z.boolean().optional(),
  language: z.boolean().optional(),
  type: z.boolean().optional(),
  instructors: z.union([z.boolean(),z.lazy(() => InstructorsOnCourseFindManyArgsSchema)]).optional(),
  prerequisites: z.union([z.boolean(),z.lazy(() => PrerequisiteFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsOnCourseFindManyArgsSchema)]).optional(),
  lessons: z.union([z.boolean(),z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  demos: z.union([z.boolean(),z.lazy(() => DemoFindManyArgsSchema)]).optional(),
  features: z.union([z.boolean(),z.lazy(() => CourseFeatureFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoriesOnCourseFindManyArgsSchema)]).optional(),
  htmlDescriptions: z.union([z.boolean(),z.lazy(() => CourseDescriptionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CourseCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COURSE DESCRIPTION
//------------------------------------------------------

export const CourseDescriptionIncludeSchema: z.ZodType<Prisma.CourseDescriptionInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

export const CourseDescriptionArgsSchema: z.ZodType<Prisma.CourseDescriptionArgs> = z.object({
  select: z.lazy(() => CourseDescriptionSelectSchema).optional(),
  include: z.lazy(() => CourseDescriptionIncludeSchema).optional(),
}).strict();

export const CourseDescriptionSelectSchema: z.ZodType<Prisma.CourseDescriptionSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  position: z.boolean().optional(),
  courseId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

// LESSON
//------------------------------------------------------

export const LessonIncludeSchema: z.ZodType<Prisma.LessonInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

export const LessonArgsSchema: z.ZodType<Prisma.LessonArgs> = z.object({
  select: z.lazy(() => LessonSelectSchema).optional(),
  include: z.lazy(() => LessonIncludeSchema).optional(),
}).strict();

export const LessonSelectSchema: z.ZodType<Prisma.LessonSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  duration: z.boolean().optional(),
  video: z.boolean().optional(),
  images: z.boolean().optional(),
  notes: z.boolean().optional(),
  practices: z.boolean().optional(),
  rating: z.boolean().optional(),
  ratingCount: z.boolean().optional(),
  courseId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

// TAG
//------------------------------------------------------

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
  courses: z.union([z.boolean(),z.lazy(() => TagsOnCourseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TagArgsSchema: z.ZodType<Prisma.TagArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();

export const TagCountOutputTypeArgsSchema: z.ZodType<Prisma.TagCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  courses: z.boolean().optional(),
}).strict();

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  courses: z.union([z.boolean(),z.lazy(() => TagsOnCourseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

// DEMO
//------------------------------------------------------

export const DemoIncludeSchema: z.ZodType<Prisma.DemoInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

export const DemoArgsSchema: z.ZodType<Prisma.DemoArgs> = z.object({
  select: z.lazy(() => DemoSelectSchema).optional(),
  include: z.lazy(() => DemoIncludeSchema).optional(),
}).strict();

export const DemoSelectSchema: z.ZodType<Prisma.DemoSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  link: z.boolean().optional(),
  position: z.boolean().optional(),
  courseId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

// PREREQUISITE
//------------------------------------------------------

export const PrerequisiteIncludeSchema: z.ZodType<Prisma.PrerequisiteInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

export const PrerequisiteArgsSchema: z.ZodType<Prisma.PrerequisiteArgs> = z.object({
  select: z.lazy(() => PrerequisiteSelectSchema).optional(),
  include: z.lazy(() => PrerequisiteIncludeSchema).optional(),
}).strict();

export const PrerequisiteSelectSchema: z.ZodType<Prisma.PrerequisiteSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  link: z.boolean().optional(),
  type: z.boolean().optional(),
  position: z.boolean().optional(),
  courseId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

// COURSE FEATURE
//------------------------------------------------------

export const CourseFeatureIncludeSchema: z.ZodType<Prisma.CourseFeatureInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

export const CourseFeatureArgsSchema: z.ZodType<Prisma.CourseFeatureArgs> = z.object({
  select: z.lazy(() => CourseFeatureSelectSchema).optional(),
  include: z.lazy(() => CourseFeatureIncludeSchema).optional(),
}).strict();

export const CourseFeatureSelectSchema: z.ZodType<Prisma.CourseFeatureSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  value: z.boolean().optional(),
  image: z.boolean().optional(),
  position: z.boolean().optional(),
  courseId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  providerType: z.boolean().optional(),
  providerId: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  accessTokenExpire: z.boolean().optional(),
  sessionState: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  expire: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  courses: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  instrucor: z.union([z.boolean(),z.lazy(() => InstructorArgsSchema)]).optional(),
  mySocialMedia: z.union([z.boolean(),z.lazy(() => UserSocialMediaFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  courses: z.boolean().optional(),
  reviews: z.boolean().optional(),
  mySocialMedia: z.boolean().optional(),
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  image: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  slug: z.boolean().optional(),
  biography: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  phoneVerified: z.boolean().optional(),
  wishlist: z.boolean().optional(),
  gender: z.boolean().optional(),
  courses: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  instrucor: z.union([z.boolean(),z.lazy(() => InstructorArgsSchema)]).optional(),
  mySocialMedia: z.union([z.boolean(),z.lazy(() => UserSocialMediaFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INSTRUCTOR
//------------------------------------------------------

export const InstructorIncludeSchema: z.ZodType<Prisma.InstructorInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  myCourses: z.union([z.boolean(),z.lazy(() => InstructorsOnCourseFindManyArgsSchema)]).optional(),
  educationalBackground: z.union([z.boolean(),z.lazy(() => InstructorEducationalBackgroundFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InstructorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const InstructorArgsSchema: z.ZodType<Prisma.InstructorArgs> = z.object({
  select: z.lazy(() => InstructorSelectSchema).optional(),
  include: z.lazy(() => InstructorIncludeSchema).optional(),
}).strict();

export const InstructorCountOutputTypeArgsSchema: z.ZodType<Prisma.InstructorCountOutputTypeArgs> = z.object({
  select: z.lazy(() => InstructorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const InstructorCountOutputTypeSelectSchema: z.ZodType<Prisma.InstructorCountOutputTypeSelect> = z.object({
  myCourses: z.boolean().optional(),
  educationalBackground: z.boolean().optional(),
}).strict();

export const InstructorSelectSchema: z.ZodType<Prisma.InstructorSelect> = z.object({
  id: z.boolean().optional(),
  assignedAt: z.boolean().optional(),
  grade: z.boolean().optional(),
  degree: z.boolean().optional(),
  htmlContent: z.boolean().optional(),
  field: z.boolean().optional(),
  coverImage: z.boolean().optional(),
  rating: z.boolean().optional(),
  ratingCount: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  myCourses: z.union([z.boolean(),z.lazy(() => InstructorsOnCourseFindManyArgsSchema)]).optional(),
  educationalBackground: z.union([z.boolean(),z.lazy(() => InstructorEducationalBackgroundFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InstructorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INSTRUCTOR EDUCATIONAL BACKGROUND
//------------------------------------------------------

export const InstructorEducationalBackgroundIncludeSchema: z.ZodType<Prisma.InstructorEducationalBackgroundInclude> = z.object({
  instructor: z.union([z.boolean(),z.lazy(() => InstructorArgsSchema)]).optional(),
}).strict()

export const InstructorEducationalBackgroundArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundArgs> = z.object({
  select: z.lazy(() => InstructorEducationalBackgroundSelectSchema).optional(),
  include: z.lazy(() => InstructorEducationalBackgroundIncludeSchema).optional(),
}).strict();

export const InstructorEducationalBackgroundSelectSchema: z.ZodType<Prisma.InstructorEducationalBackgroundSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  degree: z.boolean().optional(),
  grade: z.boolean().optional(),
  university: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  instructorId: z.boolean().optional(),
  instructor: z.union([z.boolean(),z.lazy(() => InstructorArgsSchema)]).optional(),
}).strict()

// USER SOCIAL MEDIA
//------------------------------------------------------

export const UserSocialMediaIncludeSchema: z.ZodType<Prisma.UserSocialMediaInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UserSocialMediaArgsSchema: z.ZodType<Prisma.UserSocialMediaArgs> = z.object({
  select: z.lazy(() => UserSocialMediaSelectSchema).optional(),
  include: z.lazy(() => UserSocialMediaIncludeSchema).optional(),
}).strict();

export const UserSocialMediaSelectSchema: z.ZodType<Prisma.UserSocialMediaSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  link: z.boolean().optional(),
  type: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// REVIEW
//------------------------------------------------------

export const ReviewIncludeSchema: z.ZodType<Prisma.ReviewInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

export const ReviewArgsSchema: z.ZodType<Prisma.ReviewArgs> = z.object({
  select: z.lazy(() => ReviewSelectSchema).optional(),
  include: z.lazy(() => ReviewIncludeSchema).optional(),
}).strict();

export const ReviewSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  text: z.boolean().optional(),
  rating: z.boolean().optional(),
  ratingCount: z.boolean().optional(),
  userId: z.boolean().optional(),
  courseId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

// INSTRUCTORS ON COURSE
//------------------------------------------------------

export const InstructorsOnCourseIncludeSchema: z.ZodType<Prisma.InstructorsOnCourseInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  instructor: z.union([z.boolean(),z.lazy(() => InstructorArgsSchema)]).optional(),
}).strict()

export const InstructorsOnCourseArgsSchema: z.ZodType<Prisma.InstructorsOnCourseArgs> = z.object({
  select: z.lazy(() => InstructorsOnCourseSelectSchema).optional(),
  include: z.lazy(() => InstructorsOnCourseIncludeSchema).optional(),
}).strict();

export const InstructorsOnCourseSelectSchema: z.ZodType<Prisma.InstructorsOnCourseSelect> = z.object({
  assignedAt: z.boolean().optional(),
  courseId: z.boolean().optional(),
  instructorId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  instructor: z.union([z.boolean(),z.lazy(() => InstructorArgsSchema)]).optional(),
}).strict()

// CATEGORIES ON COURSE
//------------------------------------------------------

export const CategoriesOnCourseIncludeSchema: z.ZodType<Prisma.CategoriesOnCourseInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
}).strict()

export const CategoriesOnCourseArgsSchema: z.ZodType<Prisma.CategoriesOnCourseArgs> = z.object({
  select: z.lazy(() => CategoriesOnCourseSelectSchema).optional(),
  include: z.lazy(() => CategoriesOnCourseIncludeSchema).optional(),
}).strict();

export const CategoriesOnCourseSelectSchema: z.ZodType<Prisma.CategoriesOnCourseSelect> = z.object({
  assignedAt: z.boolean().optional(),
  courseId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
}).strict()

// USERS ON COURSE
//------------------------------------------------------

export const UsersOnCourseIncludeSchema: z.ZodType<Prisma.UsersOnCourseInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UsersOnCourseArgsSchema: z.ZodType<Prisma.UsersOnCourseArgs> = z.object({
  select: z.lazy(() => UsersOnCourseSelectSchema).optional(),
  include: z.lazy(() => UsersOnCourseIncludeSchema).optional(),
}).strict();

export const UsersOnCourseSelectSchema: z.ZodType<Prisma.UsersOnCourseSelect> = z.object({
  assignedAt: z.boolean().optional(),
  courseId: z.boolean().optional(),
  userId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// TAGS ON COURSE
//------------------------------------------------------

export const TagsOnCourseIncludeSchema: z.ZodType<Prisma.TagsOnCourseInclude> = z.object({
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const TagsOnCourseArgsSchema: z.ZodType<Prisma.TagsOnCourseArgs> = z.object({
  select: z.lazy(() => TagsOnCourseSelectSchema).optional(),
  include: z.lazy(() => TagsOnCourseIncludeSchema).optional(),
}).strict();

export const TagsOnCourseSelectSchema: z.ZodType<Prisma.TagsOnCourseSelect> = z.object({
  assignedAt: z.boolean().optional(),
  courseId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  parentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  parent: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  children: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  parent: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  children: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  slug: z.string().optional()
}).strict();

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CategorySumOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  parentId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const CourseWhereInputSchema: z.ZodType<Prisma.CourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourseWhereInputSchema),z.lazy(() => CourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseWhereInputSchema),z.lazy(() => CourseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  publishedAt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  viewCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  favoriteCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  originalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  publisher: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  videoCover: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumCourseStateFilterSchema),z.lazy(() => CourseStateSchema) ]).optional(),
  language: z.union([ z.lazy(() => EnumLanguageFilterSchema),z.lazy(() => LanguageSchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumCourseTypeFilterSchema),z.lazy(() => CourseTypeSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseListRelationFilterSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagsOnCourseListRelationFilterSchema).optional(),
  lessons: z.lazy(() => LessonListRelationFilterSchema).optional(),
  users: z.lazy(() => UsersOnCourseListRelationFilterSchema).optional(),
  demos: z.lazy(() => DemoListRelationFilterSchema).optional(),
  features: z.lazy(() => CourseFeatureListRelationFilterSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseListRelationFilterSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionListRelationFilterSchema).optional()
}).strict();

export const CourseOrderByWithRelationInputSchema: z.ZodType<Prisma.CourseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  publishedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  favoriteCount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  originalPrice: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseOrderByRelationAggregateInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseOrderByRelationAggregateInputSchema).optional(),
  lessons: z.lazy(() => LessonOrderByRelationAggregateInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseOrderByRelationAggregateInputSchema).optional(),
  demos: z.lazy(() => DemoOrderByRelationAggregateInputSchema).optional(),
  features: z.lazy(() => CourseFeatureOrderByRelationAggregateInputSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseOrderByRelationAggregateInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CourseWhereUniqueInputSchema: z.ZodType<Prisma.CourseWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const CourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.CourseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  publishedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  favoriteCount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  originalPrice: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CourseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CourseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CourseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CourseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CourseSumOrderByAggregateInputSchema).optional()
}).strict();

export const CourseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CourseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CourseScalarWhereWithAggregatesInputSchema),z.lazy(() => CourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseScalarWhereWithAggregatesInputSchema),z.lazy(() => CourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  publishedAt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  enabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  viewCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rating: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  favoriteCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  originalPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  publisher: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  videoCover: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumCourseStateWithAggregatesFilterSchema),z.lazy(() => CourseStateSchema) ]).optional(),
  language: z.union([ z.lazy(() => EnumLanguageWithAggregatesFilterSchema),z.lazy(() => LanguageSchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumCourseTypeWithAggregatesFilterSchema),z.lazy(() => CourseTypeSchema) ]).optional(),
}).strict();

export const CourseDescriptionWhereInputSchema: z.ZodType<Prisma.CourseDescriptionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourseDescriptionWhereInputSchema),z.lazy(() => CourseDescriptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseDescriptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseDescriptionWhereInputSchema),z.lazy(() => CourseDescriptionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional().nullable(),
}).strict();

export const CourseDescriptionOrderByWithRelationInputSchema: z.ZodType<Prisma.CourseDescriptionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const CourseDescriptionWhereUniqueInputSchema: z.ZodType<Prisma.CourseDescriptionWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const CourseDescriptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.CourseDescriptionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CourseDescriptionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CourseDescriptionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CourseDescriptionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CourseDescriptionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CourseDescriptionSumOrderByAggregateInputSchema).optional()
}).strict();

export const CourseDescriptionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CourseDescriptionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CourseDescriptionScalarWhereWithAggregatesInputSchema),z.lazy(() => CourseDescriptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseDescriptionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseDescriptionScalarWhereWithAggregatesInputSchema),z.lazy(() => CourseDescriptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const LessonWhereInputSchema: z.ZodType<Prisma.LessonWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LessonWhereInputSchema),z.lazy(() => LessonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LessonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LessonWhereInputSchema),z.lazy(() => LessonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  video: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  notes: z.lazy(() => StringNullableListFilterSchema).optional(),
  practices: z.lazy(() => StringNullableListFilterSchema).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional().nullable(),
}).strict();

export const LessonOrderByWithRelationInputSchema: z.ZodType<Prisma.LessonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  video: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  practices: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const LessonWhereUniqueInputSchema: z.ZodType<Prisma.LessonWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const LessonOrderByWithAggregationInputSchema: z.ZodType<Prisma.LessonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  video: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  practices: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LessonCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LessonAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LessonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LessonMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LessonSumOrderByAggregateInputSchema).optional()
}).strict();

export const LessonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LessonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LessonScalarWhereWithAggregatesInputSchema),z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LessonScalarWhereWithAggregatesInputSchema),z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  video: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  notes: z.lazy(() => StringNullableListFilterSchema).optional(),
  practices: z.lazy(() => StringNullableListFilterSchema).optional(),
  rating: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const TagWhereInputSchema: z.ZodType<Prisma.TagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  courses: z.lazy(() => TagsOnCourseListRelationFilterSchema).optional()
}).strict();

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  courses: z.lazy(() => TagsOnCourseOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const TagOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagSumOrderByAggregateInputSchema).optional()
}).strict();

export const TagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const DemoWhereInputSchema: z.ZodType<Prisma.DemoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DemoWhereInputSchema),z.lazy(() => DemoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DemoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DemoWhereInputSchema),z.lazy(() => DemoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
}).strict();

export const DemoOrderByWithRelationInputSchema: z.ZodType<Prisma.DemoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const DemoWhereUniqueInputSchema: z.ZodType<Prisma.DemoWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const DemoOrderByWithAggregationInputSchema: z.ZodType<Prisma.DemoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DemoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DemoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DemoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DemoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DemoSumOrderByAggregateInputSchema).optional()
}).strict();

export const DemoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DemoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DemoScalarWhereWithAggregatesInputSchema),z.lazy(() => DemoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DemoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DemoScalarWhereWithAggregatesInputSchema),z.lazy(() => DemoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const PrerequisiteWhereInputSchema: z.ZodType<Prisma.PrerequisiteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrerequisiteWhereInputSchema),z.lazy(() => PrerequisiteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrerequisiteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrerequisiteWhereInputSchema),z.lazy(() => PrerequisiteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
}).strict();

export const PrerequisiteOrderByWithRelationInputSchema: z.ZodType<Prisma.PrerequisiteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const PrerequisiteWhereUniqueInputSchema: z.ZodType<Prisma.PrerequisiteWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const PrerequisiteOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrerequisiteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrerequisiteCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrerequisiteAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrerequisiteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrerequisiteMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrerequisiteSumOrderByAggregateInputSchema).optional()
}).strict();

export const PrerequisiteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrerequisiteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrerequisiteScalarWhereWithAggregatesInputSchema),z.lazy(() => PrerequisiteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrerequisiteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrerequisiteScalarWhereWithAggregatesInputSchema),z.lazy(() => PrerequisiteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const CourseFeatureWhereInputSchema: z.ZodType<Prisma.CourseFeatureWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourseFeatureWhereInputSchema),z.lazy(() => CourseFeatureWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseFeatureWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseFeatureWhereInputSchema),z.lazy(() => CourseFeatureWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
}).strict();

export const CourseFeatureOrderByWithRelationInputSchema: z.ZodType<Prisma.CourseFeatureOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const CourseFeatureWhereUniqueInputSchema: z.ZodType<Prisma.CourseFeatureWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const CourseFeatureOrderByWithAggregationInputSchema: z.ZodType<Prisma.CourseFeatureOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CourseFeatureCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CourseFeatureAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CourseFeatureMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CourseFeatureMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CourseFeatureSumOrderByAggregateInputSchema).optional()
}).strict();

export const CourseFeatureScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CourseFeatureScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CourseFeatureScalarWhereWithAggregatesInputSchema),z.lazy(() => CourseFeatureScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseFeatureScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseFeatureScalarWhereWithAggregatesInputSchema),z.lazy(() => CourseFeatureScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  position: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional()
}).strict();

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VerificationTokenAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VerificationTokenSumOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  providerType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessTokenExpire: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  sessionState: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpire: z.lazy(() => SortOrderSchema).optional(),
  sessionState: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  providerId_providerAccountId: z.lazy(() => AccountProviderIdProviderAccountIdCompoundUniqueInputSchema).optional()
}).strict();

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpire: z.lazy(() => SortOrderSchema).optional(),
  sessionState: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  providerType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  accessToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  accessTokenExpire: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  sessionState: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  expire: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  expire: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  sessionToken: z.string().optional(),
  accessToken: z.string().optional()
}).strict();

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  expire: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SessionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SessionSumOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  expire: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  slug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  biography: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  phoneVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  wishlist: z.lazy(() => IntNullableListFilterSchema).optional(),
  gender: z.union([ z.lazy(() => EnumGenderTypeFilterSchema),z.lazy(() => GenderTypeSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseListRelationFilterSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  instrucor: z.union([ z.lazy(() => InstructorRelationFilterSchema),z.lazy(() => InstructorWhereInputSchema) ]).optional().nullable(),
  mySocialMedia: z.lazy(() => UserSocialMediaListRelationFilterSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  biography: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  wishlist: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  courses: z.lazy(() => UsersOnCourseOrderByRelationAggregateInputSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional(),
  instrucor: z.lazy(() => InstructorOrderByWithRelationInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaOrderByRelationAggregateInputSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  email: z.string().optional(),
  phone: z.string().optional()
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  biography: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  wishlist: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  slug: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  biography: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  phoneVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  wishlist: z.lazy(() => IntNullableListFilterSchema).optional(),
  gender: z.union([ z.lazy(() => EnumGenderTypeWithAggregatesFilterSchema),z.lazy(() => GenderTypeSchema) ]).optional(),
}).strict();

export const InstructorWhereInputSchema: z.ZodType<Prisma.InstructorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorWhereInputSchema),z.lazy(() => InstructorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorWhereInputSchema),z.lazy(() => InstructorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  grade: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  degree: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  htmlContent: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coverImage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseListRelationFilterSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundListRelationFilterSchema).optional()
}).strict();

export const InstructorOrderByWithRelationInputSchema: z.ZodType<Prisma.InstructorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  htmlContent: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  coverImage: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseOrderByRelationAggregateInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundOrderByRelationAggregateInputSchema).optional()
}).strict();

export const InstructorWhereUniqueInputSchema: z.ZodType<Prisma.InstructorWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int().optional()
}).strict();

export const InstructorOrderByWithAggregationInputSchema: z.ZodType<Prisma.InstructorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  htmlContent: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  coverImage: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InstructorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InstructorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InstructorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InstructorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InstructorSumOrderByAggregateInputSchema).optional()
}).strict();

export const InstructorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InstructorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorScalarWhereWithAggregatesInputSchema),z.lazy(() => InstructorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorScalarWhereWithAggregatesInputSchema),z.lazy(() => InstructorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  grade: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  degree: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  htmlContent: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  coverImage: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const InstructorEducationalBackgroundWhereInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorEducationalBackgroundWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  degree: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endDate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  instructorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  instructor: z.union([ z.lazy(() => InstructorRelationFilterSchema),z.lazy(() => InstructorWhereInputSchema) ]).optional().nullable(),
}).strict();

export const InstructorEducationalBackgroundOrderByWithRelationInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional(),
  instructor: z.lazy(() => InstructorOrderByWithRelationInputSchema).optional()
}).strict();

export const InstructorEducationalBackgroundWhereUniqueInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const InstructorEducationalBackgroundOrderByWithAggregationInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InstructorEducationalBackgroundCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InstructorEducationalBackgroundAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InstructorEducationalBackgroundMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InstructorEducationalBackgroundMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InstructorEducationalBackgroundSumOrderByAggregateInputSchema).optional()
}).strict();

export const InstructorEducationalBackgroundScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorEducationalBackgroundScalarWhereWithAggregatesInputSchema),z.lazy(() => InstructorEducationalBackgroundScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorEducationalBackgroundScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorEducationalBackgroundScalarWhereWithAggregatesInputSchema),z.lazy(() => InstructorEducationalBackgroundScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  degree: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endDate: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  instructorId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const UserSocialMediaWhereInputSchema: z.ZodType<Prisma.UserSocialMediaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserSocialMediaWhereInputSchema),z.lazy(() => UserSocialMediaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSocialMediaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSocialMediaWhereInputSchema),z.lazy(() => UserSocialMediaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumSocialLinkTypeFilterSchema),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  userId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserSocialMediaOrderByWithRelationInputSchema: z.ZodType<Prisma.UserSocialMediaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UserSocialMediaWhereUniqueInputSchema: z.ZodType<Prisma.UserSocialMediaWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const UserSocialMediaOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserSocialMediaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserSocialMediaCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserSocialMediaAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserSocialMediaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserSocialMediaMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSocialMediaSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserSocialMediaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserSocialMediaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserSocialMediaScalarWhereWithAggregatesInputSchema),z.lazy(() => UserSocialMediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSocialMediaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSocialMediaScalarWhereWithAggregatesInputSchema),z.lazy(() => UserSocialMediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumSocialLinkTypeWithAggregatesFilterSchema),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  userId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ReviewWhereInputSchema: z.ZodType<Prisma.ReviewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
}).strict();

export const ReviewOrderByWithRelationInputSchema: z.ZodType<Prisma.ReviewOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const ReviewWhereUniqueInputSchema: z.ZodType<Prisma.ReviewWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const ReviewOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReviewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReviewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReviewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReviewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReviewSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReviewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema),z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema),z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const InstructorsOnCourseWhereInputSchema: z.ZodType<Prisma.InstructorsOnCourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorsOnCourseWhereInputSchema),z.lazy(() => InstructorsOnCourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorsOnCourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorsOnCourseWhereInputSchema),z.lazy(() => InstructorsOnCourseWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instructorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
  instructor: z.union([ z.lazy(() => InstructorRelationFilterSchema),z.lazy(() => InstructorWhereInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseOrderByWithRelationInputSchema: z.ZodType<Prisma.InstructorsOnCourseOrderByWithRelationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  instructor: z.lazy(() => InstructorOrderByWithRelationInputSchema).optional()
}).strict();

export const InstructorsOnCourseWhereUniqueInputSchema: z.ZodType<Prisma.InstructorsOnCourseWhereUniqueInput> = z.object({
  courseId_instructorId: z.lazy(() => InstructorsOnCourseCourseIdInstructorIdCompoundUniqueInputSchema).optional()
}).strict();

export const InstructorsOnCourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.InstructorsOnCourseOrderByWithAggregationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InstructorsOnCourseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InstructorsOnCourseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InstructorsOnCourseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InstructorsOnCourseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InstructorsOnCourseSumOrderByAggregateInputSchema).optional()
}).strict();

export const InstructorsOnCourseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InstructorsOnCourseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorsOnCourseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  instructorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const CategoriesOnCourseWhereInputSchema: z.ZodType<Prisma.CategoriesOnCourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesOnCourseWhereInputSchema),z.lazy(() => CategoriesOnCourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesOnCourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesOnCourseWhereInputSchema),z.lazy(() => CategoriesOnCourseWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoriesOnCourseOrderByWithRelationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional()
}).strict();

export const CategoriesOnCourseWhereUniqueInputSchema: z.ZodType<Prisma.CategoriesOnCourseWhereUniqueInput> = z.object({
  courseId_categoryId: z.lazy(() => CategoriesOnCourseCourseIdCategoryIdCompoundUniqueInputSchema).optional()
}).strict();

export const CategoriesOnCourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoriesOnCourseOrderByWithAggregationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoriesOnCourseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CategoriesOnCourseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoriesOnCourseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoriesOnCourseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CategoriesOnCourseSumOrderByAggregateInputSchema).optional()
}).strict();

export const CategoriesOnCourseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoriesOnCourseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesOnCourseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UsersOnCourseWhereInputSchema: z.ZodType<Prisma.UsersOnCourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnCourseWhereInputSchema),z.lazy(() => UsersOnCourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnCourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnCourseWhereInputSchema),z.lazy(() => UsersOnCourseWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOnCourseOrderByWithRelationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UsersOnCourseWhereUniqueInputSchema: z.ZodType<Prisma.UsersOnCourseWhereUniqueInput> = z.object({
  courseId_userId: z.lazy(() => UsersOnCourseCourseIdUserIdCompoundUniqueInputSchema).optional()
}).strict();

export const UsersOnCourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsersOnCourseOrderByWithAggregationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UsersOnCourseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UsersOnCourseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UsersOnCourseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UsersOnCourseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UsersOnCourseSumOrderByAggregateInputSchema).optional()
}).strict();

export const UsersOnCourseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UsersOnCourseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnCourseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const TagsOnCourseWhereInputSchema: z.ZodType<Prisma.TagsOnCourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsOnCourseWhereInputSchema),z.lazy(() => TagsOnCourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnCourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnCourseWhereInputSchema),z.lazy(() => TagsOnCourseWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseOrderByWithRelationInputSchema: z.ZodType<Prisma.TagsOnCourseOrderByWithRelationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional()
}).strict();

export const TagsOnCourseWhereUniqueInputSchema: z.ZodType<Prisma.TagsOnCourseWhereUniqueInput> = z.object({
  courseId_tagId: z.lazy(() => TagsOnCourseCourseIdTagIdCompoundUniqueInputSchema).optional()
}).strict();

export const TagsOnCourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagsOnCourseOrderByWithAggregationInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagsOnCourseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagsOnCourseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagsOnCourseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagsOnCourseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagsOnCourseSumOrderByAggregateInputSchema).optional()
}).strict();

export const TagsOnCourseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagsOnCourseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagsOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnCourseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnCourseScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsOnCourseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  parent: z.lazy(() => CategoryCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => CategoryCreateNestedManyWithoutParentInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  parentId: z.number().int().optional().nullable(),
  children: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parent: z.lazy(() => CategoryUpdateOneWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => CategoryUpdateManyWithoutParentNestedInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  children: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  parentId: z.number().int().optional().nullable()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseCreateInputSchema: z.ZodType<Prisma.CourseCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateInputSchema: z.ZodType<Prisma.CourseUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUpdateInputSchema: z.ZodType<Prisma.CourseUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateManyInputSchema: z.ZodType<Prisma.CourseCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional()
}).strict();

export const CourseUpdateManyMutationInputSchema: z.ZodType<Prisma.CourseUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionCreateInputSchema: z.ZodType<Prisma.CourseDescriptionCreateInput> = z.object({
  content: z.string(),
  position: z.number().int(),
  course: z.lazy(() => CourseCreateNestedOneWithoutHtmlDescriptionsInputSchema).optional()
}).strict();

export const CourseDescriptionUncheckedCreateInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  position: z.number().int(),
  courseId: z.number().int().optional().nullable()
}).strict();

export const CourseDescriptionUpdateInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneWithoutHtmlDescriptionsNestedInputSchema).optional()
}).strict();

export const CourseDescriptionUncheckedUpdateInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseDescriptionCreateManyInputSchema: z.ZodType<Prisma.CourseDescriptionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  position: z.number().int(),
  courseId: z.number().int().optional().nullable()
}).strict();

export const CourseDescriptionUpdateManyMutationInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LessonCreateInputSchema: z.ZodType<Prisma.LessonCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  description: z.string(),
  duration: z.string().optional().nullable(),
  video: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => LessonCreateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonCreatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonCreatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutLessonsInputSchema).optional()
}).strict();

export const LessonUncheckedCreateInputSchema: z.ZodType<Prisma.LessonUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  description: z.string(),
  duration: z.string().optional().nullable(),
  video: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => LessonCreateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonCreatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonCreatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  courseId: z.number().int().optional().nullable()
}).strict();

export const LessonUpdateInputSchema: z.ZodType<Prisma.LessonUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => LessonUpdateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonUpdatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonUpdatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneWithoutLessonsNestedInputSchema).optional()
}).strict();

export const LessonUncheckedUpdateInputSchema: z.ZodType<Prisma.LessonUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => LessonUpdateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonUpdatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonUpdatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LessonCreateManyInputSchema: z.ZodType<Prisma.LessonCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  description: z.string(),
  duration: z.string().optional().nullable(),
  video: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => LessonCreateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonCreatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonCreatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  courseId: z.number().int().optional().nullable()
}).strict();

export const LessonUpdateManyMutationInputSchema: z.ZodType<Prisma.LessonUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => LessonUpdateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonUpdatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonUpdatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LessonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LessonUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => LessonUpdateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonUpdatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonUpdatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TagCreateInputSchema: z.ZodType<Prisma.TagCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  courses: z.lazy(() => TagsOnCourseCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export const TagUncheckedCreateInputSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  courses: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export const TagUpdateInputSchema: z.ZodType<Prisma.TagUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => TagsOnCourseUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export const TagUncheckedUpdateInputSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export const TagCreateManyInputSchema: z.ZodType<Prisma.TagCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string()
}).strict();

export const TagUpdateManyMutationInputSchema: z.ZodType<Prisma.TagUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DemoCreateInputSchema: z.ZodType<Prisma.DemoCreateInput> = z.object({
  name: z.string(),
  link: z.string(),
  position: z.number().int().optional().nullable(),
  course: z.lazy(() => CourseCreateNestedOneWithoutDemosInputSchema)
}).strict();

export const DemoUncheckedCreateInputSchema: z.ZodType<Prisma.DemoUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string(),
  position: z.number().int().optional().nullable(),
  courseId: z.number().int()
}).strict();

export const DemoUpdateInputSchema: z.ZodType<Prisma.DemoUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutDemosNestedInputSchema).optional()
}).strict();

export const DemoUncheckedUpdateInputSchema: z.ZodType<Prisma.DemoUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DemoCreateManyInputSchema: z.ZodType<Prisma.DemoCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string(),
  position: z.number().int().optional().nullable(),
  courseId: z.number().int()
}).strict();

export const DemoUpdateManyMutationInputSchema: z.ZodType<Prisma.DemoUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const DemoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DemoUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrerequisiteCreateInputSchema: z.ZodType<Prisma.PrerequisiteCreateInput> = z.object({
  name: z.string(),
  link: z.string().optional().nullable(),
  type: z.string(),
  position: z.number().int().optional().nullable(),
  course: z.lazy(() => CourseCreateNestedOneWithoutPrerequisitesInputSchema)
}).strict();

export const PrerequisiteUncheckedCreateInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string().optional().nullable(),
  type: z.string(),
  position: z.number().int().optional().nullable(),
  courseId: z.number().int()
}).strict();

export const PrerequisiteUpdateInputSchema: z.ZodType<Prisma.PrerequisiteUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutPrerequisitesNestedInputSchema).optional()
}).strict();

export const PrerequisiteUncheckedUpdateInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrerequisiteCreateManyInputSchema: z.ZodType<Prisma.PrerequisiteCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string().optional().nullable(),
  type: z.string(),
  position: z.number().int().optional().nullable(),
  courseId: z.number().int()
}).strict();

export const PrerequisiteUpdateManyMutationInputSchema: z.ZodType<Prisma.PrerequisiteUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PrerequisiteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseFeatureCreateInputSchema: z.ZodType<Prisma.CourseFeatureCreateInput> = z.object({
  name: z.string(),
  value: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  position: z.number().int().optional().nullable(),
  course: z.lazy(() => CourseCreateNestedOneWithoutFeaturesInputSchema)
}).strict();

export const CourseFeatureUncheckedCreateInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  value: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  position: z.number().int().optional().nullable(),
  courseId: z.number().int()
}).strict();

export const CourseFeatureUpdateInputSchema: z.ZodType<Prisma.CourseFeatureUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutFeaturesNestedInputSchema).optional()
}).strict();

export const CourseFeatureUncheckedUpdateInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseFeatureCreateManyInputSchema: z.ZodType<Prisma.CourseFeatureCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  value: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  position: z.number().int().optional().nullable(),
  courseId: z.number().int()
}).strict();

export const CourseFeatureUpdateManyMutationInputSchema: z.ZodType<Prisma.CourseFeatureUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseFeatureUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  providerType: z.string(),
  providerId: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().optional().nullable(),
  accessToken: z.string().optional().nullable(),
  accessTokenExpire: z.coerce.date().optional().nullable(),
  sessionState: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  providerType: z.string(),
  providerId: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().optional().nullable(),
  accessToken: z.string().optional().nullable(),
  accessTokenExpire: z.coerce.date().optional().nullable(),
  sessionState: z.string().optional().nullable(),
  userId: z.number().int()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpire: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessionState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpire: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessionState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  providerType: z.string(),
  providerId: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().optional().nullable(),
  accessToken: z.string().optional().nullable(),
  accessTokenExpire: z.coerce.date().optional().nullable(),
  sessionState: z.string().optional().nullable(),
  userId: z.number().int()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpire: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessionState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpire: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessionState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  expire: z.coerce.date(),
  sessionToken: z.string(),
  accessToken: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  expire: z.coerce.date(),
  sessionToken: z.string(),
  accessToken: z.string(),
  userId: z.number().int()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expire: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expire: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  expire: z.coerce.date(),
  sessionToken: z.string(),
  accessToken: z.string(),
  userId: z.number().int()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expire: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expire: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorCreateInputSchema: z.ZodType<Prisma.InstructorCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInstrucorInputSchema),
  myCourses: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutInstructorInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorUncheckedCreateInputSchema: z.ZodType<Prisma.InstructorUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int(),
  myCourses: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutInstructorInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUncheckedCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorUpdateInputSchema: z.ZodType<Prisma.InstructorUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutInstrucorNestedInputSchema).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseUpdateManyWithoutInstructorNestedInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const InstructorUncheckedUpdateInputSchema: z.ZodType<Prisma.InstructorUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutInstructorNestedInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUncheckedUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const InstructorCreateManyInputSchema: z.ZodType<Prisma.InstructorCreateManyInput> = z.object({
  id: z.number().int().optional(),
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int()
}).strict();

export const InstructorUpdateManyMutationInputSchema: z.ZodType<Prisma.InstructorUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InstructorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorEducationalBackgroundCreateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  degree: z.string(),
  grade: z.string(),
  university: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  instructor: z.lazy(() => InstructorCreateNestedOneWithoutEducationalBackgroundInputSchema).optional()
}).strict();

export const InstructorEducationalBackgroundUncheckedCreateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  degree: z.string(),
  grade: z.string(),
  university: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  instructorId: z.number().int().optional().nullable()
}).strict();

export const InstructorEducationalBackgroundUpdateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instructor: z.lazy(() => InstructorUpdateOneWithoutEducationalBackgroundNestedInputSchema).optional()
}).strict();

export const InstructorEducationalBackgroundUncheckedUpdateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instructorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InstructorEducationalBackgroundCreateManyInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  degree: z.string(),
  grade: z.string(),
  university: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  instructorId: z.number().int().optional().nullable()
}).strict();

export const InstructorEducationalBackgroundUpdateManyMutationInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorEducationalBackgroundUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instructorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserSocialMediaCreateInputSchema: z.ZodType<Prisma.UserSocialMediaCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  link: z.string(),
  type: z.lazy(() => SocialLinkTypeSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMySocialMediaInputSchema).optional()
}).strict();

export const UserSocialMediaUncheckedCreateInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  link: z.string(),
  type: z.lazy(() => SocialLinkTypeSchema),
  userId: z.number().int().optional().nullable()
}).strict();

export const UserSocialMediaUpdateInputSchema: z.ZodType<Prisma.UserSocialMediaUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => EnumSocialLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutMySocialMediaNestedInputSchema).optional()
}).strict();

export const UserSocialMediaUncheckedUpdateInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => EnumSocialLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserSocialMediaCreateManyInputSchema: z.ZodType<Prisma.UserSocialMediaCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  link: z.string(),
  type: z.lazy(() => SocialLinkTypeSchema),
  userId: z.number().int().optional().nullable()
}).strict();

export const UserSocialMediaUpdateManyMutationInputSchema: z.ZodType<Prisma.UserSocialMediaUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => EnumSocialLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSocialMediaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => EnumSocialLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReviewCreateInputSchema: z.ZodType<Prisma.ReviewCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputSchema),
  course: z.lazy(() => CourseCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export const ReviewUncheckedCreateInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int(),
  courseId: z.number().int()
}).strict();

export const ReviewUpdateInputSchema: z.ZodType<Prisma.ReviewUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewsNestedInputSchema).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutReviewsNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewCreateManyInputSchema: z.ZodType<Prisma.ReviewCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int(),
  courseId: z.number().int()
}).strict();

export const ReviewUpdateManyMutationInputSchema: z.ZodType<Prisma.ReviewUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseCreateInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutInstructorsInputSchema),
  instructor: z.lazy(() => InstructorCreateNestedOneWithoutMyCoursesInputSchema)
}).strict();

export const InstructorsOnCourseUncheckedCreateInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  instructorId: z.number().int()
}).strict();

export const InstructorsOnCourseUpdateInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutInstructorsNestedInputSchema).optional(),
  instructor: z.lazy(() => InstructorUpdateOneRequiredWithoutMyCoursesNestedInputSchema).optional()
}).strict();

export const InstructorsOnCourseUncheckedUpdateInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instructorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseCreateManyInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateManyInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  instructorId: z.number().int()
}).strict();

export const InstructorsOnCourseUpdateManyMutationInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateManyInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instructorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseCreateInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutCategoriesInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const CategoriesOnCourseUncheckedCreateInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  categoryId: z.number().int()
}).strict();

export const CategoriesOnCourseUpdateInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const CategoriesOnCourseUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseCreateManyInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  categoryId: z.number().int()
}).strict();

export const CategoriesOnCourseUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseCreateInputSchema: z.ZodType<Prisma.UsersOnCourseCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutUsersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const UsersOnCourseUncheckedCreateInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  userId: z.number().int()
}).strict();

export const UsersOnCourseUpdateInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const UsersOnCourseUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseCreateManyInputSchema: z.ZodType<Prisma.UsersOnCourseCreateManyInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  userId: z.number().int()
}).strict();

export const UsersOnCourseUpdateManyMutationInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseCreateInputSchema: z.ZodType<Prisma.TagsOnCourseCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const TagsOnCourseUncheckedCreateInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  tagId: z.number().int()
}).strict();

export const TagsOnCourseUpdateInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const TagsOnCourseUncheckedUpdateInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseCreateManyInputSchema: z.ZodType<Prisma.TagsOnCourseCreateManyInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int(),
  tagId: z.number().int()
}).strict();

export const TagsOnCourseUpdateManyMutationInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const CategoryRelationFilterSchema: z.ZodType<Prisma.CategoryRelationFilter> = z.object({
  is: z.lazy(() => CategoryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CategoryWhereInputSchema).optional().nullable()
}).strict();

export const CategoryListRelationFilterSchema: z.ZodType<Prisma.CategoryListRelationFilter> = z.object({
  every: z.lazy(() => CategoryWhereInputSchema).optional(),
  some: z.lazy(() => CategoryWhereInputSchema).optional(),
  none: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CategoriesOnCourseListRelationFilterSchema: z.ZodType<Prisma.CategoriesOnCourseListRelationFilter> = z.object({
  every: z.lazy(() => CategoriesOnCourseWhereInputSchema).optional(),
  some: z.lazy(() => CategoriesOnCourseWhereInputSchema).optional(),
  none: z.lazy(() => CategoriesOnCourseWhereInputSchema).optional()
}).strict();

export const CategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.CategorySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const EnumCourseStateFilterSchema: z.ZodType<Prisma.EnumCourseStateFilter> = z.object({
  equals: z.lazy(() => CourseStateSchema).optional(),
  in: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => NestedEnumCourseStateFilterSchema) ]).optional(),
}).strict();

export const EnumLanguageFilterSchema: z.ZodType<Prisma.EnumLanguageFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageFilterSchema) ]).optional(),
}).strict();

export const EnumCourseTypeFilterSchema: z.ZodType<Prisma.EnumCourseTypeFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeFilterSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseListRelationFilterSchema: z.ZodType<Prisma.InstructorsOnCourseListRelationFilter> = z.object({
  every: z.lazy(() => InstructorsOnCourseWhereInputSchema).optional(),
  some: z.lazy(() => InstructorsOnCourseWhereInputSchema).optional(),
  none: z.lazy(() => InstructorsOnCourseWhereInputSchema).optional()
}).strict();

export const PrerequisiteListRelationFilterSchema: z.ZodType<Prisma.PrerequisiteListRelationFilter> = z.object({
  every: z.lazy(() => PrerequisiteWhereInputSchema).optional(),
  some: z.lazy(() => PrerequisiteWhereInputSchema).optional(),
  none: z.lazy(() => PrerequisiteWhereInputSchema).optional()
}).strict();

export const TagsOnCourseListRelationFilterSchema: z.ZodType<Prisma.TagsOnCourseListRelationFilter> = z.object({
  every: z.lazy(() => TagsOnCourseWhereInputSchema).optional(),
  some: z.lazy(() => TagsOnCourseWhereInputSchema).optional(),
  none: z.lazy(() => TagsOnCourseWhereInputSchema).optional()
}).strict();

export const LessonListRelationFilterSchema: z.ZodType<Prisma.LessonListRelationFilter> = z.object({
  every: z.lazy(() => LessonWhereInputSchema).optional(),
  some: z.lazy(() => LessonWhereInputSchema).optional(),
  none: z.lazy(() => LessonWhereInputSchema).optional()
}).strict();

export const UsersOnCourseListRelationFilterSchema: z.ZodType<Prisma.UsersOnCourseListRelationFilter> = z.object({
  every: z.lazy(() => UsersOnCourseWhereInputSchema).optional(),
  some: z.lazy(() => UsersOnCourseWhereInputSchema).optional(),
  none: z.lazy(() => UsersOnCourseWhereInputSchema).optional()
}).strict();

export const DemoListRelationFilterSchema: z.ZodType<Prisma.DemoListRelationFilter> = z.object({
  every: z.lazy(() => DemoWhereInputSchema).optional(),
  some: z.lazy(() => DemoWhereInputSchema).optional(),
  none: z.lazy(() => DemoWhereInputSchema).optional()
}).strict();

export const CourseFeatureListRelationFilterSchema: z.ZodType<Prisma.CourseFeatureListRelationFilter> = z.object({
  every: z.lazy(() => CourseFeatureWhereInputSchema).optional(),
  some: z.lazy(() => CourseFeatureWhereInputSchema).optional(),
  none: z.lazy(() => CourseFeatureWhereInputSchema).optional()
}).strict();

export const ReviewListRelationFilterSchema: z.ZodType<Prisma.ReviewListRelationFilter> = z.object({
  every: z.lazy(() => ReviewWhereInputSchema).optional(),
  some: z.lazy(() => ReviewWhereInputSchema).optional(),
  none: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export const CourseDescriptionListRelationFilterSchema: z.ZodType<Prisma.CourseDescriptionListRelationFilter> = z.object({
  every: z.lazy(() => CourseDescriptionWhereInputSchema).optional(),
  some: z.lazy(() => CourseDescriptionWhereInputSchema).optional(),
  none: z.lazy(() => CourseDescriptionWhereInputSchema).optional()
}).strict();

export const InstructorsOnCourseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InstructorsOnCourseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrerequisiteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrerequisiteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LessonOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LessonOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DemoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DemoOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseFeatureOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CourseFeatureOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReviewOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseCountOrderByAggregateInputSchema: z.ZodType<Prisma.CourseCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  publishedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  favoriteCount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  originalPrice: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CourseAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  favoriteCount: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  originalPrice: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CourseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  publishedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  favoriteCount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  originalPrice: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.CourseMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  publishedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  favoriteCount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  originalPrice: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseSumOrderByAggregateInputSchema: z.ZodType<Prisma.CourseSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  favoriteCount: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  originalPrice: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const EnumCourseStateWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCourseStateWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CourseStateSchema).optional(),
  in: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => NestedEnumCourseStateWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCourseStateFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCourseStateFilterSchema).optional()
}).strict();

export const EnumLanguageWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLanguageWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLanguageFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLanguageFilterSchema).optional()
}).strict();

export const EnumCourseTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCourseTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCourseTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCourseTypeFilterSchema).optional()
}).strict();

export const CourseRelationFilterSchema: z.ZodType<Prisma.CourseRelationFilter> = z.object({
  is: z.lazy(() => CourseWhereInputSchema).optional(),
  isNot: z.lazy(() => CourseWhereInputSchema).optional()
}).strict();

export const CourseDescriptionCountOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionMinOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionSumOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const LessonCountOrderByAggregateInputSchema: z.ZodType<Prisma.LessonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  video: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  practices: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LessonAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LessonAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LessonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LessonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  video: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LessonMinOrderByAggregateInputSchema: z.ZodType<Prisma.LessonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  video: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LessonSumOrderByAggregateInputSchema: z.ZodType<Prisma.LessonSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TagAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagSumOrderByAggregateInputSchema: z.ZodType<Prisma.TagSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DemoCountOrderByAggregateInputSchema: z.ZodType<Prisma.DemoCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DemoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DemoAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DemoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DemoMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DemoMinOrderByAggregateInputSchema: z.ZodType<Prisma.DemoMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DemoSumOrderByAggregateInputSchema: z.ZodType<Prisma.DemoSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrerequisiteCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrerequisiteCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrerequisiteAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrerequisiteAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrerequisiteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrerequisiteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrerequisiteMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrerequisiteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrerequisiteSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrerequisiteSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseFeatureCountOrderByAggregateInputSchema: z.ZodType<Prisma.CourseFeatureCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseFeatureAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CourseFeatureAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseFeatureMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CourseFeatureMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseFeatureMinOrderByAggregateInputSchema: z.ZodType<Prisma.CourseFeatureMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseFeatureSumOrderByAggregateInputSchema: z.ZodType<Prisma.CourseFeatureSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenSumOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const AccountProviderIdProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderIdProviderAccountIdCompoundUniqueInput> = z.object({
  providerId: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpire: z.lazy(() => SortOrderSchema).optional(),
  sessionState: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpire: z.lazy(() => SortOrderSchema).optional(),
  sessionState: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpire: z.lazy(() => SortOrderSchema).optional(),
  sessionState: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  expire: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SessionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  expire: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  expire: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionSumOrderByAggregateInputSchema: z.ZodType<Prisma.SessionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableListFilterSchema: z.ZodType<Prisma.IntNullableListFilter> = z.object({
  equals: z.number().array().optional().nullable(),
  has: z.number().optional().nullable(),
  hasEvery: z.number().array().optional(),
  hasSome: z.number().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const EnumGenderTypeFilterSchema: z.ZodType<Prisma.EnumGenderTypeFilter> = z.object({
  equals: z.lazy(() => GenderTypeSchema).optional(),
  in: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => NestedEnumGenderTypeFilterSchema) ]).optional(),
}).strict();

export const InstructorRelationFilterSchema: z.ZodType<Prisma.InstructorRelationFilter> = z.object({
  is: z.lazy(() => InstructorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => InstructorWhereInputSchema).optional().nullable()
}).strict();

export const UserSocialMediaListRelationFilterSchema: z.ZodType<Prisma.UserSocialMediaListRelationFilter> = z.object({
  every: z.lazy(() => UserSocialMediaWhereInputSchema).optional(),
  some: z.lazy(() => UserSocialMediaWhereInputSchema).optional(),
  none: z.lazy(() => UserSocialMediaWhereInputSchema).optional()
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const UserSocialMediaOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserSocialMediaOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  biography: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  wishlist: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  wishlist: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  biography: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  biography: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  phoneVerified: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  wishlist: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumGenderTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGenderTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GenderTypeSchema).optional(),
  in: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => NestedEnumGenderTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGenderTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGenderTypeFilterSchema).optional()
}).strict();

export const InstructorEducationalBackgroundListRelationFilterSchema: z.ZodType<Prisma.InstructorEducationalBackgroundListRelationFilter> = z.object({
  every: z.lazy(() => InstructorEducationalBackgroundWhereInputSchema).optional(),
  some: z.lazy(() => InstructorEducationalBackgroundWhereInputSchema).optional(),
  none: z.lazy(() => InstructorEducationalBackgroundWhereInputSchema).optional()
}).strict();

export const InstructorEducationalBackgroundOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorCountOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  htmlContent: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  coverImage: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  htmlContent: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  coverImage: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorMinOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  htmlContent: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  coverImage: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorSumOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorEducationalBackgroundCountOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorEducationalBackgroundAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorEducationalBackgroundMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorEducationalBackgroundMinOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorEducationalBackgroundSumOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSocialLinkTypeFilterSchema: z.ZodType<Prisma.EnumSocialLinkTypeFilter> = z.object({
  equals: z.lazy(() => SocialLinkTypeSchema).optional(),
  in: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => NestedEnumSocialLinkTypeFilterSchema) ]).optional(),
}).strict();

export const UserSocialMediaCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserSocialMediaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSocialMediaAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserSocialMediaAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSocialMediaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserSocialMediaMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSocialMediaMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserSocialMediaMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSocialMediaSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSocialMediaSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSocialLinkTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSocialLinkTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SocialLinkTypeSchema).optional(),
  in: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => NestedEnumSocialLinkTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSocialLinkTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSocialLinkTypeFilterSchema).optional()
}).strict();

export const ReviewCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  ratingCount: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorsOnCourseCourseIdInstructorIdCompoundUniqueInputSchema: z.ZodType<Prisma.InstructorsOnCourseCourseIdInstructorIdCompoundUniqueInput> = z.object({
  courseId: z.number(),
  instructorId: z.number()
}).strict();

export const InstructorsOnCourseCountOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorsOnCourseCountOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorsOnCourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorsOnCourseAvgOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorsOnCourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorsOnCourseMaxOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorsOnCourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorsOnCourseMinOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstructorsOnCourseSumOrderByAggregateInputSchema: z.ZodType<Prisma.InstructorsOnCourseSumOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  instructorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseCourseIdCategoryIdCompoundUniqueInputSchema: z.ZodType<Prisma.CategoriesOnCourseCourseIdCategoryIdCompoundUniqueInput> = z.object({
  courseId: z.number(),
  categoryId: z.number()
}).strict();

export const CategoriesOnCourseCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseCountOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseAvgOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseMaxOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseMinOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseSumOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseSumOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseCourseIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.UsersOnCourseCourseIdUserIdCompoundUniqueInput> = z.object({
  courseId: z.number(),
  userId: z.number()
}).strict();

export const UsersOnCourseCountOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseCountOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseAvgOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseMaxOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseMinOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseSumOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseSumOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagRelationFilterSchema: z.ZodType<Prisma.TagRelationFilter> = z.object({
  is: z.lazy(() => TagWhereInputSchema).optional(),
  isNot: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export const TagsOnCourseCourseIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.TagsOnCourseCourseIdTagIdCompoundUniqueInput> = z.object({
  courseId: z.number(),
  tagId: z.number()
}).strict();

export const TagsOnCourseCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseCountOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseAvgOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseMaxOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseMinOrderByAggregateInput> = z.object({
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseSumOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseSumOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutChildrenInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentInputSchema),z.lazy(() => CategoryCreateWithoutParentInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentInputSchema),z.lazy(() => CategoryCreateWithoutParentInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const CategoryUpdateOneWithoutChildrenNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutChildrenInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutChildrenInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutChildrenInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutParentNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentInputSchema),z.lazy(() => CategoryCreateWithoutParentInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutParentInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const CategoryUncheckedUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutParentNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentInputSchema),z.lazy(() => CategoryCreateWithoutParentInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutParentInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PrerequisiteCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema).array(),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrerequisiteCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagsOnCourseCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LessonCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.LessonCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => LessonCreateWithoutCourseInputSchema),z.lazy(() => LessonCreateWithoutCourseInputSchema).array(),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema),z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnCourseCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DemoCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.DemoCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => DemoCreateWithoutCourseInputSchema),z.lazy(() => DemoCreateWithoutCourseInputSchema).array(),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema),z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DemoCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CourseFeatureCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseFeatureCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCourseInputSchema),z.lazy(() => ReviewCreateWithoutCourseInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CourseDescriptionCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseDescriptionCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema).array(),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrerequisiteCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LessonUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => LessonCreateWithoutCourseInputSchema),z.lazy(() => LessonCreateWithoutCourseInputSchema).array(),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema),z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DemoUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.DemoUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => DemoCreateWithoutCourseInputSchema),z.lazy(() => DemoCreateWithoutCourseInputSchema).array(),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema),z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DemoCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseFeatureCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCourseInputSchema),z.lazy(() => ReviewCreateWithoutCourseInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseDescriptionCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const EnumCourseStateFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCourseStateFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CourseStateSchema).optional()
}).strict();

export const EnumLanguageFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLanguageFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LanguageSchema).optional()
}).strict();

export const EnumCourseTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCourseTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CourseTypeSchema).optional()
}).strict();

export const InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PrerequisiteUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.PrerequisiteUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema).array(),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrerequisiteUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => PrerequisiteUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrerequisiteCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrerequisiteUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => PrerequisiteUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrerequisiteUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => PrerequisiteUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrerequisiteScalarWhereInputSchema),z.lazy(() => PrerequisiteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagsOnCourseUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnCourseScalarWhereInputSchema),z.lazy(() => TagsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LessonUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.LessonUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => LessonCreateWithoutCourseInputSchema),z.lazy(() => LessonCreateWithoutCourseInputSchema).array(),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema),z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LessonScalarWhereInputSchema),z.lazy(() => LessonScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnCourseUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnCourseScalarWhereInputSchema),z.lazy(() => UsersOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DemoUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.DemoUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => DemoCreateWithoutCourseInputSchema),z.lazy(() => DemoCreateWithoutCourseInputSchema).array(),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema),z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DemoUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => DemoUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DemoCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DemoUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => DemoUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DemoUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => DemoUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DemoScalarWhereInputSchema),z.lazy(() => DemoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CourseFeatureUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CourseFeatureUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CourseFeatureUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseFeatureUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseFeatureCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CourseFeatureUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseFeatureUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CourseFeatureUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CourseFeatureUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CourseFeatureScalarWhereInputSchema),z.lazy(() => CourseFeatureScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCourseInputSchema),z.lazy(() => ReviewCreateWithoutCourseInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CourseDescriptionUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CourseDescriptionUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseDescriptionCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CourseDescriptionUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CourseDescriptionUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CourseDescriptionScalarWhereInputSchema),z.lazy(() => CourseDescriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema).array(),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema),z.lazy(() => PrerequisiteCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrerequisiteUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => PrerequisiteUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrerequisiteCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrerequisiteWhereUniqueInputSchema),z.lazy(() => PrerequisiteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrerequisiteUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => PrerequisiteUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrerequisiteUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => PrerequisiteUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrerequisiteScalarWhereInputSchema),z.lazy(() => PrerequisiteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnCourseScalarWhereInputSchema),z.lazy(() => TagsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LessonUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => LessonCreateWithoutCourseInputSchema),z.lazy(() => LessonCreateWithoutCourseInputSchema).array(),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema),z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LessonWhereUniqueInputSchema),z.lazy(() => LessonWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LessonScalarWhereInputSchema),z.lazy(() => LessonScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnCourseScalarWhereInputSchema),z.lazy(() => UsersOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DemoUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.DemoUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => DemoCreateWithoutCourseInputSchema),z.lazy(() => DemoCreateWithoutCourseInputSchema).array(),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema),z.lazy(() => DemoCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DemoUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => DemoUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DemoCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DemoWhereUniqueInputSchema),z.lazy(() => DemoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DemoUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => DemoUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DemoUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => DemoUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DemoScalarWhereInputSchema),z.lazy(() => DemoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseFeatureCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CourseFeatureUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseFeatureUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseFeatureCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CourseFeatureWhereUniqueInputSchema),z.lazy(() => CourseFeatureWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CourseFeatureUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseFeatureUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CourseFeatureUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CourseFeatureUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CourseFeatureScalarWhereInputSchema),z.lazy(() => CourseFeatureScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCourseInputSchema),z.lazy(() => ReviewCreateWithoutCourseInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CourseDescriptionUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseDescriptionCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CourseDescriptionUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CourseDescriptionUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CourseDescriptionScalarWhereInputSchema),z.lazy(() => CourseDescriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutHtmlDescriptionsInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutHtmlDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutHtmlDescriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutHtmlDescriptionsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneWithoutHtmlDescriptionsNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneWithoutHtmlDescriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutHtmlDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutHtmlDescriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutHtmlDescriptionsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutHtmlDescriptionsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutHtmlDescriptionsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutHtmlDescriptionsInputSchema) ]).optional(),
}).strict();

export const LessonCreateimagesInputSchema: z.ZodType<Prisma.LessonCreateimagesInput> = z.object({
  set: z.string().array()
}).strict();

export const LessonCreatenotesInputSchema: z.ZodType<Prisma.LessonCreatenotesInput> = z.object({
  set: z.string().array()
}).strict();

export const LessonCreatepracticesInputSchema: z.ZodType<Prisma.LessonCreatepracticesInput> = z.object({
  set: z.string().array()
}).strict();

export const CourseCreateNestedOneWithoutLessonsInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutLessonsInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutLessonsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutLessonsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const LessonUpdateimagesInputSchema: z.ZodType<Prisma.LessonUpdateimagesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const LessonUpdatenotesInputSchema: z.ZodType<Prisma.LessonUpdatenotesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const LessonUpdatepracticesInputSchema: z.ZodType<Prisma.LessonUpdatepracticesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const CourseUpdateOneWithoutLessonsNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneWithoutLessonsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutLessonsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutLessonsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutLessonsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutLessonsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutLessonsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagsOnCourseUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagsOnCourseUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnCourseScalarWhereInputSchema),z.lazy(() => TagsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnCourseCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnCourseUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnCourseCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnCourseWhereUniqueInputSchema),z.lazy(() => TagsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnCourseUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => TagsOnCourseUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnCourseScalarWhereInputSchema),z.lazy(() => TagsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutDemosInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutDemosInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutDemosInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDemosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutDemosInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneRequiredWithoutDemosNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutDemosNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutDemosInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDemosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutDemosInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutDemosInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutDemosInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutDemosInputSchema) ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutPrerequisitesInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutPrerequisitesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutPrerequisitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutPrerequisitesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneRequiredWithoutPrerequisitesNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutPrerequisitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutPrerequisitesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutPrerequisitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutPrerequisitesInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutPrerequisitesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutPrerequisitesInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutPrerequisitesInputSchema) ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutFeaturesInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutFeaturesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutFeaturesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutFeaturesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneRequiredWithoutFeaturesNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutFeaturesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutFeaturesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutFeaturesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutFeaturesInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutFeaturesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutFeaturesInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutFeaturesInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const UserCreatewishlistInputSchema: z.ZodType<Prisma.UserCreatewishlistInput> = z.object({
  set: z.number().array()
}).strict();

export const UsersOnCourseCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InstructorCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.InstructorCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional()
}).strict();

export const UserSocialMediaCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema).array(),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSocialMediaCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InstructorUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.InstructorUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional()
}).strict();

export const UserSocialMediaUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema).array(),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSocialMediaCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdatewishlistInputSchema: z.ZodType<Prisma.UserUpdatewishlistInput> = z.object({
  set: z.number().array().optional(),
  push: z.union([ z.number(),z.number().array() ]).optional(),
}).strict();

export const EnumGenderTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGenderTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GenderTypeSchema).optional()
}).strict();

export const UsersOnCourseUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnCourseScalarWhereInputSchema),z.lazy(() => UsersOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.InstructorUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => InstructorUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstructorUpdateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const UserSocialMediaUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserSocialMediaUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema).array(),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserSocialMediaUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSocialMediaUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSocialMediaCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserSocialMediaUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSocialMediaUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserSocialMediaUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserSocialMediaUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserSocialMediaScalarWhereInputSchema),z.lazy(() => UserSocialMediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnCourseUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnCourseUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UsersOnCourseUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnCourseScalarWhereInputSchema),z.lazy(() => UsersOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.InstructorUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => InstructorUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstructorUpdateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const UserSocialMediaUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema).array(),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSocialMediaCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserSocialMediaUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSocialMediaUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSocialMediaCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserSocialMediaWhereUniqueInputSchema),z.lazy(() => UserSocialMediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserSocialMediaUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSocialMediaUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserSocialMediaUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserSocialMediaUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserSocialMediaScalarWhereInputSchema),z.lazy(() => UserSocialMediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutInstrucorInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInstrucorInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInstrucorInputSchema),z.lazy(() => UserUncheckedCreateWithoutInstrucorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInstrucorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const InstructorsOnCourseCreateNestedManyWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateNestedManyWithoutInstructorInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyInstructorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InstructorEducationalBackgroundCreateNestedManyWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateNestedManyWithoutInstructorInput> = z.object({
  create: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorEducationalBackgroundCreateManyInstructorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InstructorsOnCourseUncheckedCreateNestedManyWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedCreateNestedManyWithoutInstructorInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyInstructorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InstructorEducationalBackgroundUncheckedCreateNestedManyWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedCreateNestedManyWithoutInstructorInput> = z.object({
  create: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorEducationalBackgroundCreateManyInstructorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutInstrucorNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInstrucorNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInstrucorInputSchema),z.lazy(() => UserUncheckedCreateWithoutInstrucorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInstrucorInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInstrucorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutInstrucorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInstrucorInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseUpdateManyWithoutInstructorNestedInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateManyWithoutInstructorNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyInstructorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutInstructorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorEducationalBackgroundUpdateManyWithoutInstructorNestedInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateManyWithoutInstructorNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InstructorEducationalBackgroundUpsertWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUpsertWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorEducationalBackgroundCreateManyInstructorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InstructorEducationalBackgroundUpdateWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUpdateWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InstructorEducationalBackgroundUpdateManyWithWhereWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUpdateManyWithWhereWithoutInstructorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema),z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorsOnCourseUncheckedUpdateManyWithoutInstructorNestedInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateManyWithoutInstructorNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUpsertWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorsOnCourseCreateManyInstructorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUpdateWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUpdateManyWithWhereWithoutInstructorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorEducationalBackgroundUncheckedUpdateManyWithoutInstructorNestedInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedUpdateManyWithoutInstructorNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema).array(),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InstructorEducationalBackgroundUpsertWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUpsertWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstructorEducationalBackgroundCreateManyInstructorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InstructorEducationalBackgroundUpdateWithWhereUniqueWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUpdateWithWhereUniqueWithoutInstructorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InstructorEducationalBackgroundUpdateManyWithWhereWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUpdateManyWithWhereWithoutInstructorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema),z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstructorCreateNestedOneWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorCreateNestedOneWithoutEducationalBackgroundInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutEducationalBackgroundInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutEducationalBackgroundInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutEducationalBackgroundInputSchema).optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional()
}).strict();

export const InstructorUpdateOneWithoutEducationalBackgroundNestedInputSchema: z.ZodType<Prisma.InstructorUpdateOneWithoutEducationalBackgroundNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutEducationalBackgroundInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutEducationalBackgroundInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutEducationalBackgroundInputSchema).optional(),
  upsert: z.lazy(() => InstructorUpsertWithoutEducationalBackgroundInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstructorUpdateWithoutEducationalBackgroundInputSchema),z.lazy(() => InstructorUncheckedUpdateWithoutEducationalBackgroundInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMySocialMediaInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMySocialMediaInputSchema),z.lazy(() => UserUncheckedCreateWithoutMySocialMediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMySocialMediaInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumSocialLinkTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSocialLinkTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SocialLinkTypeSchema).optional()
}).strict();

export const UserUpdateOneWithoutMySocialMediaNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutMySocialMediaNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMySocialMediaInputSchema),z.lazy(() => UserUncheckedCreateWithoutMySocialMediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMySocialMediaInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMySocialMediaInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutMySocialMediaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMySocialMediaInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReviewsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReviewsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CourseCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutReviewsInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutReviewsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReviewsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutReviewsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewsInputSchema) ]).optional(),
}).strict();

export const CourseUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutReviewsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutReviewsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutReviewsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutReviewsInputSchema) ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutInstructorsInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutInstructorsInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutInstructorsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutInstructorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutInstructorsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const InstructorCreateNestedOneWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorCreateNestedOneWithoutMyCoursesInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutMyCoursesInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutMyCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutMyCoursesInputSchema).optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneRequiredWithoutInstructorsNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutInstructorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutInstructorsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutInstructorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutInstructorsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutInstructorsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutInstructorsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutInstructorsInputSchema) ]).optional(),
}).strict();

export const InstructorUpdateOneRequiredWithoutMyCoursesNestedInputSchema: z.ZodType<Prisma.InstructorUpdateOneRequiredWithoutMyCoursesNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstructorCreateWithoutMyCoursesInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutMyCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstructorCreateOrConnectWithoutMyCoursesInputSchema).optional(),
  upsert: z.lazy(() => InstructorUpsertWithoutMyCoursesInputSchema).optional(),
  connect: z.lazy(() => InstructorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstructorUpdateWithoutMyCoursesInputSchema),z.lazy(() => InstructorUncheckedUpdateWithoutMyCoursesInputSchema) ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutCategoriesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedOneWithoutCoursesInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutCoursesInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCoursesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutCoursesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneRequiredWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutCategoriesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutCategoriesInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutCategoriesInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutCategoriesInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateOneRequiredWithoutCoursesNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutCoursesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCoursesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutCoursesInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutCoursesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutCoursesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutCoursesInputSchema) ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutUsersInputSchema),z.lazy(() => CourseUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutCoursesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCoursesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCoursesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCoursesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutUsersInputSchema),z.lazy(() => CourseUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutUsersInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutCoursesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCoursesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCoursesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCoursesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCoursesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutCoursesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCoursesInputSchema) ]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutTagsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const TagCreateNestedOneWithoutCoursesInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutCoursesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutCoursesInputSchema),z.lazy(() => TagUncheckedCreateWithoutCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutCoursesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutTagsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutTagsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export const TagUpdateOneRequiredWithoutCoursesNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutCoursesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutCoursesInputSchema),z.lazy(() => TagUncheckedCreateWithoutCoursesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutCoursesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutCoursesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithoutCoursesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutCoursesInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumCourseStateFilterSchema: z.ZodType<Prisma.NestedEnumCourseStateFilter> = z.object({
  equals: z.lazy(() => CourseStateSchema).optional(),
  in: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => NestedEnumCourseStateFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLanguageFilterSchema: z.ZodType<Prisma.NestedEnumLanguageFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCourseTypeFilterSchema: z.ZodType<Prisma.NestedEnumCourseTypeFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeFilterSchema) ]).optional(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedEnumCourseStateWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCourseStateWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CourseStateSchema).optional(),
  in: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseStateSchema).array(),z.lazy(() => CourseStateSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => NestedEnumCourseStateWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCourseStateFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCourseStateFilterSchema).optional()
}).strict();

export const NestedEnumLanguageWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLanguageWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLanguageFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLanguageFilterSchema).optional()
}).strict();

export const NestedEnumCourseTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCourseTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCourseTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCourseTypeFilterSchema).optional()
}).strict();

export const NestedEnumGenderTypeFilterSchema: z.ZodType<Prisma.NestedEnumGenderTypeFilter> = z.object({
  equals: z.lazy(() => GenderTypeSchema).optional(),
  in: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => NestedEnumGenderTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGenderTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGenderTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GenderTypeSchema).optional(),
  in: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => GenderTypeSchema).array(),z.lazy(() => GenderTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => NestedEnumGenderTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGenderTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGenderTypeFilterSchema).optional()
}).strict();

export const NestedEnumSocialLinkTypeFilterSchema: z.ZodType<Prisma.NestedEnumSocialLinkTypeFilter> = z.object({
  equals: z.lazy(() => SocialLinkTypeSchema).optional(),
  in: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => NestedEnumSocialLinkTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumSocialLinkTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSocialLinkTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SocialLinkTypeSchema).optional(),
  in: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => SocialLinkTypeSchema).array(),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => NestedEnumSocialLinkTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSocialLinkTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSocialLinkTypeFilterSchema).optional()
}).strict();

export const CategoryCreateWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryCreateWithoutChildrenInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  parent: z.lazy(() => CategoryCreateNestedOneWithoutChildrenInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutChildrenInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  parentId: z.number().int().optional().nullable(),
  courses: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutChildrenInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const CategoryCreateWithoutParentInputSchema: z.ZodType<Prisma.CategoryCreateWithoutParentInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  children: z.lazy(() => CategoryCreateNestedManyWithoutParentInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutParentInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutParentInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  children: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export const CategoryCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.CategoryCreateManyParentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryCreateManyParentInputSchema),z.lazy(() => CategoryCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CategoriesOnCourseCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateWithoutCategoryInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutCategoriesInputSchema)
}).strict();

export const CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateWithoutCategoryInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const CategoriesOnCourseCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const CategoriesOnCourseCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoriesOnCourseCreateManyCategoryInputSchema),z.lazy(() => CategoriesOnCourseCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CategoryUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutChildrenInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutChildrenInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutChildrenInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parent: z.lazy(() => CategoryUpdateOneWithoutChildrenNestedInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutChildrenInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courses: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export const CategoryUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutParentInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutParentInputSchema) ]),
}).strict();

export const CategoryUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutChildrenInputSchema) ]),
}).strict();

export const CategoryScalarWhereInputSchema: z.ZodType<Prisma.CategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  parentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const CategoriesOnCourseUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const CategoriesOnCourseUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnCourseUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export const CategoriesOnCourseUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoriesOnCourseUpdateManyMutationInputSchema),z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCoursesInputSchema) ]),
}).strict();

export const CategoriesOnCourseScalarWhereInputSchema: z.ZodType<Prisma.CategoriesOnCourseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesOnCourseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),z.lazy(() => CategoriesOnCourseScalarWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const InstructorsOnCourseCreateWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  instructor: z.lazy(() => InstructorCreateNestedOneWithoutMyCoursesInputSchema)
}).strict();

export const InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  instructorId: z.number().int()
}).strict();

export const InstructorsOnCourseCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const InstructorsOnCourseCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.InstructorsOnCourseCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InstructorsOnCourseCreateManyCourseInputSchema),z.lazy(() => InstructorsOnCourseCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PrerequisiteCreateWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteCreateWithoutCourseInput> = z.object({
  name: z.string(),
  link: z.string().optional().nullable(),
  type: z.string(),
  position: z.number().int().optional().nullable()
}).strict();

export const PrerequisiteUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string().optional().nullable(),
  type: z.string(),
  position: z.number().int().optional().nullable()
}).strict();

export const PrerequisiteCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => PrerequisiteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const PrerequisiteCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.PrerequisiteCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrerequisiteCreateManyCourseInputSchema),z.lazy(() => PrerequisiteCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TagsOnCourseCreateWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const TagsOnCourseUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  tagId: z.number().int()
}).strict();

export const TagsOnCourseCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => TagsOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const TagsOnCourseCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.TagsOnCourseCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsOnCourseCreateManyCourseInputSchema),z.lazy(() => TagsOnCourseCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const LessonCreateWithoutCourseInputSchema: z.ZodType<Prisma.LessonCreateWithoutCourseInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  description: z.string(),
  duration: z.string().optional().nullable(),
  video: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => LessonCreateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonCreatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonCreatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional()
}).strict();

export const LessonUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.LessonUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  description: z.string(),
  duration: z.string().optional().nullable(),
  video: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => LessonCreateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonCreatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonCreatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional()
}).strict();

export const LessonCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.LessonCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LessonCreateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const LessonCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.LessonCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LessonCreateManyCourseInputSchema),z.lazy(() => LessonCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsersOnCourseCreateWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const UsersOnCourseUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  userId: z.number().int()
}).strict();

export const UsersOnCourseCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => UsersOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const UsersOnCourseCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.UsersOnCourseCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsersOnCourseCreateManyCourseInputSchema),z.lazy(() => UsersOnCourseCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const DemoCreateWithoutCourseInputSchema: z.ZodType<Prisma.DemoCreateWithoutCourseInput> = z.object({
  name: z.string(),
  link: z.string(),
  position: z.number().int().optional().nullable()
}).strict();

export const DemoUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.DemoUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string(),
  position: z.number().int().optional().nullable()
}).strict();

export const DemoCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.DemoCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => DemoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DemoCreateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const DemoCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.DemoCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DemoCreateManyCourseInputSchema),z.lazy(() => DemoCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CourseFeatureCreateWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureCreateWithoutCourseInput> = z.object({
  name: z.string(),
  value: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  position: z.number().int().optional().nullable()
}).strict();

export const CourseFeatureUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  value: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  position: z.number().int().optional().nullable()
}).strict();

export const CourseFeatureCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseFeatureWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CourseFeatureCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.CourseFeatureCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CourseFeatureCreateManyCourseInputSchema),z.lazy(() => CourseFeatureCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReviewCreateWithoutCourseInputSchema: z.ZodType<Prisma.ReviewCreateWithoutCourseInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export const ReviewUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int()
}).strict();

export const ReviewCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const ReviewCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyCourseInputSchema),z.lazy(() => ReviewCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CategoriesOnCourseCreateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  categoryId: z.number().int()
}).strict();

export const CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CategoriesOnCourseCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoriesOnCourseCreateManyCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CourseDescriptionCreateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateWithoutCourseInput> = z.object({
  content: z.string(),
  position: z.number().int()
}).strict();

export const CourseDescriptionUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  position: z.number().int()
}).strict();

export const CourseDescriptionCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseDescriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CourseDescriptionCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.CourseDescriptionCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CourseDescriptionCreateManyCourseInputSchema),z.lazy(() => CourseDescriptionCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InstructorsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const InstructorsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => InstructorsOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const InstructorsOnCourseUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InstructorsOnCourseUpdateManyMutationInputSchema),z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutInstructorsInputSchema) ]),
}).strict();

export const InstructorsOnCourseScalarWhereInputSchema: z.ZodType<Prisma.InstructorsOnCourseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorsOnCourseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),z.lazy(() => InstructorsOnCourseScalarWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instructorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const PrerequisiteUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => PrerequisiteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrerequisiteUpdateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => PrerequisiteCreateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const PrerequisiteUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => PrerequisiteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrerequisiteUpdateWithoutCourseInputSchema),z.lazy(() => PrerequisiteUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const PrerequisiteUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => PrerequisiteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrerequisiteUpdateManyMutationInputSchema),z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutPrerequisitesInputSchema) ]),
}).strict();

export const PrerequisiteScalarWhereInputSchema: z.ZodType<Prisma.PrerequisiteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrerequisiteScalarWhereInputSchema),z.lazy(() => PrerequisiteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrerequisiteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrerequisiteScalarWhereInputSchema),z.lazy(() => PrerequisiteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const TagsOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => TagsOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const TagsOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => TagsOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const TagsOnCourseUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => TagsOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsOnCourseUpdateManyMutationInputSchema),z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export const TagsOnCourseScalarWhereInputSchema: z.ZodType<Prisma.TagsOnCourseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsOnCourseScalarWhereInputSchema),z.lazy(() => TagsOnCourseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnCourseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnCourseScalarWhereInputSchema),z.lazy(() => TagsOnCourseScalarWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const LessonUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.LessonUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LessonUpdateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => LessonCreateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const LessonUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.LessonUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LessonUpdateWithoutCourseInputSchema),z.lazy(() => LessonUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const LessonUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.LessonUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LessonUpdateManyMutationInputSchema),z.lazy(() => LessonUncheckedUpdateManyWithoutLessonsInputSchema) ]),
}).strict();

export const LessonScalarWhereInputSchema: z.ZodType<Prisma.LessonScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LessonScalarWhereInputSchema),z.lazy(() => LessonScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LessonScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LessonScalarWhereInputSchema),z.lazy(() => LessonScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  video: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  notes: z.lazy(() => StringNullableListFilterSchema).optional(),
  practices: z.lazy(() => StringNullableListFilterSchema).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const UsersOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => UsersOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsersOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const UsersOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => UsersOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsersOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => UsersOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const UsersOnCourseUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => UsersOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsersOnCourseUpdateManyMutationInputSchema),z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const UsersOnCourseScalarWhereInputSchema: z.ZodType<Prisma.UsersOnCourseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnCourseScalarWhereInputSchema),z.lazy(() => UsersOnCourseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnCourseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnCourseScalarWhereInputSchema),z.lazy(() => UsersOnCourseScalarWhereInputSchema).array() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const DemoUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.DemoUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => DemoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DemoUpdateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => DemoCreateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const DemoUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.DemoUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => DemoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DemoUpdateWithoutCourseInputSchema),z.lazy(() => DemoUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const DemoUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.DemoUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => DemoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DemoUpdateManyMutationInputSchema),z.lazy(() => DemoUncheckedUpdateManyWithoutDemosInputSchema) ]),
}).strict();

export const DemoScalarWhereInputSchema: z.ZodType<Prisma.DemoScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DemoScalarWhereInputSchema),z.lazy(() => DemoScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DemoScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DemoScalarWhereInputSchema),z.lazy(() => DemoScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const CourseFeatureUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseFeatureWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CourseFeatureUpdateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => CourseFeatureCreateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CourseFeatureUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseFeatureWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CourseFeatureUpdateWithoutCourseInputSchema),z.lazy(() => CourseFeatureUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const CourseFeatureUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseFeatureScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CourseFeatureUpdateManyMutationInputSchema),z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutFeaturesInputSchema) ]),
}).strict();

export const CourseFeatureScalarWhereInputSchema: z.ZodType<Prisma.CourseFeatureScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourseFeatureScalarWhereInputSchema),z.lazy(() => CourseFeatureScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseFeatureScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseFeatureScalarWhereInputSchema),z.lazy(() => CourseFeatureScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const ReviewUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewUpdateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const ReviewUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutCourseInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const ReviewUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => ReviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateManyMutationInputSchema),z.lazy(() => ReviewUncheckedUpdateManyWithoutReviewsInputSchema) ]),
}).strict();

export const ReviewScalarWhereInputSchema: z.ZodType<Prisma.ReviewScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ratingCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const CategoriesOnCourseUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CategoriesOnCourseUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoriesOnCourseUpdateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const CategoriesOnCourseUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoriesOnCourseUpdateManyMutationInputSchema),z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const CourseDescriptionUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseDescriptionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CourseDescriptionUpdateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CourseDescriptionUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseDescriptionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CourseDescriptionUpdateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const CourseDescriptionUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseDescriptionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CourseDescriptionUpdateManyMutationInputSchema),z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutHtmlDescriptionsInputSchema) ]),
}).strict();

export const CourseDescriptionScalarWhereInputSchema: z.ZodType<Prisma.CourseDescriptionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourseDescriptionScalarWhereInputSchema),z.lazy(() => CourseDescriptionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseDescriptionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseDescriptionScalarWhereInputSchema),z.lazy(() => CourseDescriptionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const CourseCreateWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseCreateWithoutHtmlDescriptionsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutHtmlDescriptionsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutHtmlDescriptionsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutHtmlDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutHtmlDescriptionsInputSchema) ]),
}).strict();

export const CourseUpsertWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseUpsertWithoutHtmlDescriptionsInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutHtmlDescriptionsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutHtmlDescriptionsInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutHtmlDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutHtmlDescriptionsInputSchema) ]),
}).strict();

export const CourseUpdateWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseUpdateWithoutHtmlDescriptionsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutHtmlDescriptionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutLessonsInputSchema: z.ZodType<Prisma.CourseCreateWithoutLessonsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutLessonsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutLessonsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutLessonsInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutLessonsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutLessonsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema) ]),
}).strict();

export const CourseUpsertWithoutLessonsInputSchema: z.ZodType<Prisma.CourseUpsertWithoutLessonsInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutLessonsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutLessonsInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutLessonsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema) ]),
}).strict();

export const CourseUpdateWithoutLessonsInputSchema: z.ZodType<Prisma.CourseUpdateWithoutLessonsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutLessonsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutLessonsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const TagsOnCourseCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseCreateWithoutTagInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutTagsInputSchema)
}).strict();

export const TagsOnCourseUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedCreateWithoutTagInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const TagsOnCourseCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export const TagsOnCourseCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.TagsOnCourseCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsOnCourseCreateManyTagInputSchema),z.lazy(() => TagsOnCourseCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TagsOnCourseUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsOnCourseUpdateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export const TagsOnCourseUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsOnCourseUpdateWithoutTagInputSchema),z.lazy(() => TagsOnCourseUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export const TagsOnCourseUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsOnCourseUpdateManyMutationInputSchema),z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCoursesInputSchema) ]),
}).strict();

export const CourseCreateWithoutDemosInputSchema: z.ZodType<Prisma.CourseCreateWithoutDemosInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutDemosInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutDemosInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutDemosInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutDemosInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutDemosInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDemosInputSchema) ]),
}).strict();

export const CourseUpsertWithoutDemosInputSchema: z.ZodType<Prisma.CourseUpsertWithoutDemosInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutDemosInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutDemosInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutDemosInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDemosInputSchema) ]),
}).strict();

export const CourseUpdateWithoutDemosInputSchema: z.ZodType<Prisma.CourseUpdateWithoutDemosInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutDemosInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutDemosInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseCreateWithoutPrerequisitesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutPrerequisitesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutPrerequisitesInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutPrerequisitesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutPrerequisitesInputSchema) ]),
}).strict();

export const CourseUpsertWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseUpsertWithoutPrerequisitesInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutPrerequisitesInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutPrerequisitesInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutPrerequisitesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutPrerequisitesInputSchema) ]),
}).strict();

export const CourseUpdateWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseUpdateWithoutPrerequisitesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutPrerequisitesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseCreateWithoutFeaturesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutFeaturesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutFeaturesInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutFeaturesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutFeaturesInputSchema) ]),
}).strict();

export const CourseUpsertWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseUpsertWithoutFeaturesInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutFeaturesInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutFeaturesInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutFeaturesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutFeaturesInputSchema) ]),
}).strict();

export const CourseUpdateWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseUpdateWithoutFeaturesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutFeaturesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UsersOnCourseCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseCreateWithoutUserInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutUsersInputSchema)
}).strict();

export const UsersOnCourseUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateWithoutUserInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const UsersOnCourseCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnCourseCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UsersOnCourseCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsersOnCourseCreateManyUserInputSchema),z.lazy(() => UsersOnCourseCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReviewCreateWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export const ReviewUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  courseId: z.number().int()
}).strict();

export const ReviewCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReviewCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyUserInputSchema),z.lazy(() => ReviewCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InstructorCreateWithoutUserInputSchema: z.ZodType<Prisma.InstructorCreateWithoutUserInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  myCourses: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutInstructorInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.InstructorUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  myCourses: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutInstructorInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUncheckedCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.InstructorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => InstructorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstructorCreateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserSocialMediaCreateWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  link: z.string(),
  type: z.lazy(() => SocialLinkTypeSchema)
}).strict();

export const UserSocialMediaUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  link: z.string(),
  type: z.lazy(() => SocialLinkTypeSchema)
}).strict();

export const UserSocialMediaCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserSocialMediaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserSocialMediaCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserSocialMediaCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserSocialMediaCreateManyUserInputSchema),z.lazy(() => UserSocialMediaCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  providerType: z.string(),
  providerId: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().optional().nullable(),
  accessToken: z.string().optional().nullable(),
  accessTokenExpire: z.coerce.date().optional().nullable(),
  sessionState: z.string().optional().nullable()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  providerType: z.string(),
  providerId: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().optional().nullable(),
  accessToken: z.string().optional().nullable(),
  accessTokenExpire: z.coerce.date().optional().nullable(),
  sessionState: z.string().optional().nullable()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  expire: z.coerce.date(),
  sessionToken: z.string(),
  accessToken: z.string()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  expire: z.coerce.date(),
  sessionToken: z.string(),
  accessToken: z.string()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsersOnCourseUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsersOnCourseUpdateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnCourseUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsersOnCourseUpdateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnCourseUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsersOnCourseUpdateManyMutationInputSchema),z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCoursesInputSchema) ]),
}).strict();

export const ReviewUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewUpdateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReviewUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ReviewUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateManyMutationInputSchema),z.lazy(() => ReviewUncheckedUpdateManyWithoutReviewsInputSchema) ]),
}).strict();

export const InstructorUpsertWithoutUserInputSchema: z.ZodType<Prisma.InstructorUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => InstructorUpdateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => InstructorCreateWithoutUserInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const InstructorUpdateWithoutUserInputSchema: z.ZodType<Prisma.InstructorUpdateWithoutUserInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseUpdateManyWithoutInstructorNestedInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const InstructorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.InstructorUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutInstructorNestedInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUncheckedUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const UserSocialMediaUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserSocialMediaWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserSocialMediaUpdateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserSocialMediaCreateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserSocialMediaUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserSocialMediaWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserSocialMediaUpdateWithoutUserInputSchema),z.lazy(() => UserSocialMediaUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UserSocialMediaUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserSocialMediaScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserSocialMediaUpdateManyMutationInputSchema),z.lazy(() => UserSocialMediaUncheckedUpdateManyWithoutMySocialMediaInputSchema) ]),
}).strict();

export const UserSocialMediaScalarWhereInputSchema: z.ZodType<Prisma.UserSocialMediaScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserSocialMediaScalarWhereInputSchema),z.lazy(() => UserSocialMediaScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSocialMediaScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSocialMediaScalarWhereInputSchema),z.lazy(() => UserSocialMediaScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumSocialLinkTypeFilterSchema),z.lazy(() => SocialLinkTypeSchema) ]).optional(),
  userId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  providerType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessTokenExpire: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  sessionState: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutSessionsInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  expire: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const UserCreateWithoutInstrucorInputSchema: z.ZodType<Prisma.UserCreateWithoutInstrucorInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutInstrucorInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutInstrucorInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutInstrucorInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInstrucorInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutInstrucorInputSchema),z.lazy(() => UserUncheckedCreateWithoutInstrucorInputSchema) ]),
}).strict();

export const InstructorsOnCourseCreateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateWithoutInstructorInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutInstructorsInputSchema)
}).strict();

export const InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedCreateWithoutInstructorInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const InstructorsOnCourseCreateOrConnectWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateOrConnectWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema) ]),
}).strict();

export const InstructorsOnCourseCreateManyInstructorInputEnvelopeSchema: z.ZodType<Prisma.InstructorsOnCourseCreateManyInstructorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InstructorsOnCourseCreateManyInstructorInputSchema),z.lazy(() => InstructorsOnCourseCreateManyInstructorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InstructorEducationalBackgroundCreateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateWithoutInstructorInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  degree: z.string(),
  grade: z.string(),
  university: z.string(),
  startDate: z.string(),
  endDate: z.string()
}).strict();

export const InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  degree: z.string(),
  grade: z.string(),
  university: z.string(),
  startDate: z.string(),
  endDate: z.string()
}).strict();

export const InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateOrConnectWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema) ]),
}).strict();

export const InstructorEducationalBackgroundCreateManyInstructorInputEnvelopeSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateManyInstructorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateManyInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundCreateManyInstructorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutInstrucorInputSchema: z.ZodType<Prisma.UserUpsertWithoutInstrucorInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutInstrucorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInstrucorInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutInstrucorInputSchema),z.lazy(() => UserUncheckedCreateWithoutInstrucorInputSchema) ]),
}).strict();

export const UserUpdateWithoutInstrucorInputSchema: z.ZodType<Prisma.UserUpdateWithoutInstrucorInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutInstrucorInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutInstrucorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const InstructorsOnCourseUpsertWithWhereUniqueWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpsertWithWhereUniqueWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedUpdateWithoutInstructorInputSchema) ]),
  create: z.union([ z.lazy(() => InstructorsOnCourseCreateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedCreateWithoutInstructorInputSchema) ]),
}).strict();

export const InstructorsOnCourseUpdateWithWhereUniqueWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateWithWhereUniqueWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InstructorsOnCourseUpdateWithoutInstructorInputSchema),z.lazy(() => InstructorsOnCourseUncheckedUpdateWithoutInstructorInputSchema) ]),
}).strict();

export const InstructorsOnCourseUpdateManyWithWhereWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateManyWithWhereWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorsOnCourseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InstructorsOnCourseUpdateManyMutationInputSchema),z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutMyCoursesInputSchema) ]),
}).strict();

export const InstructorEducationalBackgroundUpsertWithWhereUniqueWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpsertWithWhereUniqueWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InstructorEducationalBackgroundUpdateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedUpdateWithoutInstructorInputSchema) ]),
  create: z.union([ z.lazy(() => InstructorEducationalBackgroundCreateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedCreateWithoutInstructorInputSchema) ]),
}).strict();

export const InstructorEducationalBackgroundUpdateWithWhereUniqueWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateWithWhereUniqueWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorEducationalBackgroundWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InstructorEducationalBackgroundUpdateWithoutInstructorInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedUpdateWithoutInstructorInputSchema) ]),
}).strict();

export const InstructorEducationalBackgroundUpdateManyWithWhereWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateManyWithWhereWithoutInstructorInput> = z.object({
  where: z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InstructorEducationalBackgroundUpdateManyMutationInputSchema),z.lazy(() => InstructorEducationalBackgroundUncheckedUpdateManyWithoutEducationalBackgroundInputSchema) ]),
}).strict();

export const InstructorEducationalBackgroundScalarWhereInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema),z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema),z.lazy(() => InstructorEducationalBackgroundScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  degree: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endDate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  instructorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const InstructorCreateWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorCreateWithoutEducationalBackgroundInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInstrucorInputSchema),
  myCourses: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorUncheckedCreateWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorUncheckedCreateWithoutEducationalBackgroundInput> = z.object({
  id: z.number().int().optional(),
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int(),
  myCourses: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorCreateOrConnectWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorCreateOrConnectWithoutEducationalBackgroundInput> = z.object({
  where: z.lazy(() => InstructorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstructorCreateWithoutEducationalBackgroundInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutEducationalBackgroundInputSchema) ]),
}).strict();

export const InstructorUpsertWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorUpsertWithoutEducationalBackgroundInput> = z.object({
  update: z.union([ z.lazy(() => InstructorUpdateWithoutEducationalBackgroundInputSchema),z.lazy(() => InstructorUncheckedUpdateWithoutEducationalBackgroundInputSchema) ]),
  create: z.union([ z.lazy(() => InstructorCreateWithoutEducationalBackgroundInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutEducationalBackgroundInputSchema) ]),
}).strict();

export const InstructorUpdateWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorUpdateWithoutEducationalBackgroundInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutInstrucorNestedInputSchema).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const InstructorUncheckedUpdateWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorUncheckedUpdateWithoutEducationalBackgroundInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  myCourses: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserCreateWithoutMySocialMediaInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorCreateNestedOneWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMySocialMediaInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMySocialMediaInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMySocialMediaInputSchema),z.lazy(() => UserUncheckedCreateWithoutMySocialMediaInputSchema) ]),
}).strict();

export const UserUpsertWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserUpsertWithoutMySocialMediaInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMySocialMediaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMySocialMediaInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMySocialMediaInputSchema),z.lazy(() => UserUncheckedCreateWithoutMySocialMediaInputSchema) ]),
}).strict();

export const UserUpdateWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserUpdateWithoutMySocialMediaInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUpdateOneWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMySocialMediaInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutReviewsInputSchema: z.ZodType<Prisma.UserCreateWithoutReviewsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReviewsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReviewsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutReviewsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export const CourseCreateWithoutReviewsInputSchema: z.ZodType<Prisma.CourseCreateWithoutReviewsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutReviewsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutReviewsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutReviewsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export const UserUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.UserUpsertWithoutReviewsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutReviewsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutReviewsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export const UserUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.UserUpdateWithoutReviewsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutReviewsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CourseUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.CourseUpsertWithoutReviewsInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutReviewsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutReviewsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export const CourseUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.CourseUpdateWithoutReviewsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutReviewsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutInstructorsInputSchema: z.ZodType<Prisma.CourseCreateWithoutInstructorsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutInstructorsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutInstructorsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutInstructorsInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutInstructorsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutInstructorsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutInstructorsInputSchema) ]),
}).strict();

export const InstructorCreateWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorCreateWithoutMyCoursesInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInstrucorInputSchema),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorUncheckedCreateWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorUncheckedCreateWithoutMyCoursesInput> = z.object({
  id: z.number().int().optional(),
  assignedAt: z.coerce.date().optional(),
  grade: z.string().optional(),
  degree: z.string().optional(),
  htmlContent: z.string().optional(),
  field: z.string().optional(),
  coverImage: z.string().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUncheckedCreateNestedManyWithoutInstructorInputSchema).optional()
}).strict();

export const InstructorCreateOrConnectWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorCreateOrConnectWithoutMyCoursesInput> = z.object({
  where: z.lazy(() => InstructorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstructorCreateWithoutMyCoursesInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutMyCoursesInputSchema) ]),
}).strict();

export const CourseUpsertWithoutInstructorsInputSchema: z.ZodType<Prisma.CourseUpsertWithoutInstructorsInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutInstructorsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutInstructorsInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutInstructorsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutInstructorsInputSchema) ]),
}).strict();

export const CourseUpdateWithoutInstructorsInputSchema: z.ZodType<Prisma.CourseUpdateWithoutInstructorsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutInstructorsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutInstructorsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const InstructorUpsertWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorUpsertWithoutMyCoursesInput> = z.object({
  update: z.union([ z.lazy(() => InstructorUpdateWithoutMyCoursesInputSchema),z.lazy(() => InstructorUncheckedUpdateWithoutMyCoursesInputSchema) ]),
  create: z.union([ z.lazy(() => InstructorCreateWithoutMyCoursesInputSchema),z.lazy(() => InstructorUncheckedCreateWithoutMyCoursesInputSchema) ]),
}).strict();

export const InstructorUpdateWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorUpdateWithoutMyCoursesInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutInstrucorNestedInputSchema).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const InstructorUncheckedUpdateWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorUncheckedUpdateWithoutMyCoursesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  htmlContent: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverImage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  educationalBackground: z.lazy(() => InstructorEducationalBackgroundUncheckedUpdateManyWithoutInstructorNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseCreateWithoutCategoriesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutCategoriesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const CategoryCreateWithoutCoursesInputSchema: z.ZodType<Prisma.CategoryCreateWithoutCoursesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  parent: z.lazy(() => CategoryCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => CategoryCreateNestedManyWithoutParentInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutCoursesInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutCoursesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  parentId: z.number().int().optional().nullable(),
  children: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutCoursesInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutCoursesInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutCoursesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCoursesInputSchema) ]),
}).strict();

export const CourseUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseUpsertWithoutCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutCategoriesInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutCategoriesInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const CourseUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseUpdateWithoutCategoriesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CategoryUpsertWithoutCoursesInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutCoursesInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutCoursesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutCoursesInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutCoursesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCoursesInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutCoursesInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutCoursesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parent: z.lazy(() => CategoryUpdateOneWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => CategoryUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutCoursesInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutCoursesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  children: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutUsersInputSchema: z.ZodType<Prisma.CourseCreateWithoutUsersInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutUsersInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutUsersInputSchema),z.lazy(() => CourseUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const UserCreateWithoutCoursesInputSchema: z.ZodType<Prisma.UserCreateWithoutCoursesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCoursesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCoursesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  phoneVerified: z.coerce.date().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCoursesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCoursesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCoursesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoursesInputSchema) ]),
}).strict();

export const CourseUpsertWithoutUsersInputSchema: z.ZodType<Prisma.CourseUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutUsersInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutUsersInputSchema),z.lazy(() => CourseUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const CourseUpdateWithoutUsersInputSchema: z.ZodType<Prisma.CourseUpdateWithoutUsersInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutCoursesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCoursesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCoursesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCoursesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCoursesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoursesInputSchema) ]),
}).strict();

export const UserUpdateWithoutCoursesInputSchema: z.ZodType<Prisma.UserUpdateWithoutCoursesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCoursesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCoursesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phoneVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  instrucor: z.lazy(() => InstructorUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  mySocialMedia: z.lazy(() => UserSocialMediaUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutTagsInputSchema: z.ZodType<Prisma.CourseCreateWithoutTagsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  favoriteCount: z.number().int().optional(),
  duration: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().optional(),
  publisher: z.string().optional(),
  videoCover: z.string().optional(),
  size: z.string().optional(),
  status: z.lazy(() => CourseStateSchema).optional(),
  language: z.lazy(() => LanguageSchema).optional(),
  type: z.lazy(() => CourseTypeSchema).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutTagsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const TagCreateWithoutCoursesInputSchema: z.ZodType<Prisma.TagCreateWithoutCoursesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string()
}).strict();

export const TagUncheckedCreateWithoutCoursesInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutCoursesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string()
}).strict();

export const TagCreateOrConnectWithoutCoursesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutCoursesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutCoursesInputSchema),z.lazy(() => TagUncheckedCreateWithoutCoursesInputSchema) ]),
}).strict();

export const CourseUpsertWithoutTagsInputSchema: z.ZodType<Prisma.CourseUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutTagsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutTagsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const CourseUpdateWithoutTagsInputSchema: z.ZodType<Prisma.CourseUpdateWithoutTagsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  favoriteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  originalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videoCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CourseStateSchema),z.lazy(() => EnumCourseStateFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => EnumLanguageFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => EnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional(),
  instructors: z.lazy(() => InstructorsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  htmlDescriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const TagUpsertWithoutCoursesInputSchema: z.ZodType<Prisma.TagUpsertWithoutCoursesInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutCoursesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutCoursesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutCoursesInputSchema),z.lazy(() => TagUncheckedCreateWithoutCoursesInputSchema) ]),
}).strict();

export const TagUpdateWithoutCoursesInputSchema: z.ZodType<Prisma.TagUpdateWithoutCoursesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateWithoutCoursesInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutCoursesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryCreateManyParentInputSchema: z.ZodType<Prisma.CategoryCreateManyParentInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional()
}).strict();

export const CategoriesOnCourseCreateManyCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyCategoryInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const CategoryUpdateWithoutParentInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutParentInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => CategoryUpdateManyWithoutParentNestedInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutParentInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutParentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  courses: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateManyWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutChildrenInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateWithoutCategoryInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoriesOnCourseUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateWithoutCategoryInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyWithoutCoursesInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyWithoutCoursesInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseCreateManyCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateManyCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  instructorId: z.number().int()
}).strict();

export const PrerequisiteCreateManyCourseInputSchema: z.ZodType<Prisma.PrerequisiteCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string().optional().nullable(),
  type: z.string(),
  position: z.number().int().optional().nullable()
}).strict();

export const TagsOnCourseCreateManyCourseInputSchema: z.ZodType<Prisma.TagsOnCourseCreateManyCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  tagId: z.number().int()
}).strict();

export const LessonCreateManyCourseInputSchema: z.ZodType<Prisma.LessonCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  description: z.string(),
  duration: z.string().optional().nullable(),
  video: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => LessonCreateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonCreatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonCreatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional()
}).strict();

export const UsersOnCourseCreateManyCourseInputSchema: z.ZodType<Prisma.UsersOnCourseCreateManyCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  userId: z.number().int()
}).strict();

export const DemoCreateManyCourseInputSchema: z.ZodType<Prisma.DemoCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string(),
  position: z.number().int().optional().nullable()
}).strict();

export const CourseFeatureCreateManyCourseInputSchema: z.ZodType<Prisma.CourseFeatureCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  value: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  position: z.number().int().optional().nullable()
}).strict();

export const ReviewCreateManyCourseInputSchema: z.ZodType<Prisma.ReviewCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  userId: z.number().int()
}).strict();

export const CategoriesOnCourseCreateManyCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  categoryId: z.number().int()
}).strict();

export const CourseDescriptionCreateManyCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  position: z.number().int()
}).strict();

export const InstructorsOnCourseUpdateWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  instructor: z.lazy(() => InstructorUpdateOneRequiredWithoutMyCoursesNestedInputSchema).optional()
}).strict();

export const InstructorsOnCourseUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  instructorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseUncheckedUpdateManyWithoutInstructorsInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateManyWithoutInstructorsInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  instructorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrerequisiteUpdateWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteUpdateWithoutCourseInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PrerequisiteUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PrerequisiteUncheckedUpdateManyWithoutPrerequisitesInputSchema: z.ZodType<Prisma.PrerequisiteUncheckedUpdateManyWithoutPrerequisitesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TagsOnCourseUpdateWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const TagsOnCourseUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyWithoutTagsInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyWithoutTagsInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LessonUpdateWithoutCourseInputSchema: z.ZodType<Prisma.LessonUpdateWithoutCourseInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => LessonUpdateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonUpdatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonUpdatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LessonUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.LessonUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => LessonUpdateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonUpdatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonUpdatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LessonUncheckedUpdateManyWithoutLessonsInputSchema: z.ZodType<Prisma.LessonUncheckedUpdateManyWithoutLessonsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => LessonUpdateimagesInputSchema),z.string().array() ]).optional(),
  notes: z.union([ z.lazy(() => LessonUpdatenotesInputSchema),z.string().array() ]).optional(),
  practices: z.union([ z.lazy(() => LessonUpdatepracticesInputSchema),z.string().array() ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseUpdateWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const UsersOnCourseUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyWithoutUsersInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DemoUpdateWithoutCourseInputSchema: z.ZodType<Prisma.DemoUpdateWithoutCourseInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const DemoUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.DemoUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const DemoUncheckedUpdateManyWithoutDemosInputSchema: z.ZodType<Prisma.DemoUncheckedUpdateManyWithoutDemosInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseFeatureUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureUpdateWithoutCourseInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseFeatureUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseFeatureUncheckedUpdateManyWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseFeatureUncheckedUpdateManyWithoutFeaturesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReviewUpdateWithoutCourseInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutCourseInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewsNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutReviewsInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutReviewsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const CategoriesOnCourseUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyWithoutCategoriesInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateWithoutCourseInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUncheckedUpdateManyWithoutHtmlDescriptionsInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateManyWithoutHtmlDescriptionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseCreateManyTagInputSchema: z.ZodType<Prisma.TagsOnCourseCreateManyTagInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const TagsOnCourseUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateWithoutTagInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export const TagsOnCourseUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateWithoutTagInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyWithoutCoursesInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyWithoutCoursesInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseCreateManyUserInputSchema: z.ZodType<Prisma.UsersOnCourseCreateManyUserInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const ReviewCreateManyUserInputSchema: z.ZodType<Prisma.ReviewCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  rating: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  courseId: z.number().int()
}).strict();

export const UserSocialMediaCreateManyUserInputSchema: z.ZodType<Prisma.UserSocialMediaCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  link: z.string(),
  type: z.lazy(() => SocialLinkTypeSchema)
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  providerType: z.string(),
  providerId: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().optional().nullable(),
  accessToken: z.string().optional().nullable(),
  accessTokenExpire: z.coerce.date().optional().nullable(),
  sessionState: z.string().optional().nullable()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  expire: z.coerce.date(),
  sessionToken: z.string(),
  accessToken: z.string()
}).strict();

export const UsersOnCourseUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateWithoutUserInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersOnCourseUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateWithoutUserInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseUncheckedUpdateManyWithoutCoursesInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyWithoutCoursesInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutReviewsNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ratingCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSocialMediaUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => EnumSocialLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSocialMediaUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => EnumSocialLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSocialMediaUncheckedUpdateManyWithoutMySocialMediaInputSchema: z.ZodType<Prisma.UserSocialMediaUncheckedUpdateManyWithoutMySocialMediaInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SocialLinkTypeSchema),z.lazy(() => EnumSocialLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpire: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessionState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpire: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessionState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutAccountsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpire: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessionState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expire: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expire: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutSessionsInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutSessionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expire: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseCreateManyInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseCreateManyInstructorInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  courseId: z.number().int()
}).strict();

export const InstructorEducationalBackgroundCreateManyInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateManyInstructorInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  degree: z.string(),
  grade: z.string(),
  university: z.string(),
  startDate: z.string(),
  endDate: z.string()
}).strict();

export const InstructorsOnCourseUpdateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateWithoutInstructorInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutInstructorsNestedInputSchema).optional()
}).strict();

export const InstructorsOnCourseUncheckedUpdateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateWithoutInstructorInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorsOnCourseUncheckedUpdateManyWithoutMyCoursesInputSchema: z.ZodType<Prisma.InstructorsOnCourseUncheckedUpdateManyWithoutMyCoursesInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorEducationalBackgroundUpdateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateWithoutInstructorInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorEducationalBackgroundUncheckedUpdateWithoutInstructorInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedUpdateWithoutInstructorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstructorEducationalBackgroundUncheckedUpdateManyWithoutEducationalBackgroundInputSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUncheckedUpdateManyWithoutEducationalBackgroundInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CourseFindFirstArgsSchema: z.ZodType<Prisma.CourseFindFirstArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([ CourseOrderByWithRelationInputSchema.array(),CourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CourseFindFirstOrThrowArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([ CourseOrderByWithRelationInputSchema.array(),CourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseFindManyArgsSchema: z.ZodType<Prisma.CourseFindManyArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([ CourseOrderByWithRelationInputSchema.array(),CourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseAggregateArgsSchema: z.ZodType<Prisma.CourseAggregateArgs> = z.object({
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([ CourseOrderByWithRelationInputSchema.array(),CourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CourseGroupByArgsSchema: z.ZodType<Prisma.CourseGroupByArgs> = z.object({
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([ CourseOrderByWithAggregationInputSchema.array(),CourseOrderByWithAggregationInputSchema ]).optional(),
  by: CourseScalarFieldEnumSchema.array(),
  having: CourseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CourseFindUniqueArgsSchema: z.ZodType<Prisma.CourseFindUniqueArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
}).strict()

export const CourseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CourseFindUniqueOrThrowArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
}).strict()

export const CourseDescriptionFindFirstArgsSchema: z.ZodType<Prisma.CourseDescriptionFindFirstArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  where: CourseDescriptionWhereInputSchema.optional(),
  orderBy: z.union([ CourseDescriptionOrderByWithRelationInputSchema.array(),CourseDescriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseDescriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseDescriptionScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseDescriptionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CourseDescriptionFindFirstOrThrowArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  where: CourseDescriptionWhereInputSchema.optional(),
  orderBy: z.union([ CourseDescriptionOrderByWithRelationInputSchema.array(),CourseDescriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseDescriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseDescriptionScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseDescriptionFindManyArgsSchema: z.ZodType<Prisma.CourseDescriptionFindManyArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  where: CourseDescriptionWhereInputSchema.optional(),
  orderBy: z.union([ CourseDescriptionOrderByWithRelationInputSchema.array(),CourseDescriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseDescriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseDescriptionScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseDescriptionAggregateArgsSchema: z.ZodType<Prisma.CourseDescriptionAggregateArgs> = z.object({
  where: CourseDescriptionWhereInputSchema.optional(),
  orderBy: z.union([ CourseDescriptionOrderByWithRelationInputSchema.array(),CourseDescriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseDescriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CourseDescriptionGroupByArgsSchema: z.ZodType<Prisma.CourseDescriptionGroupByArgs> = z.object({
  where: CourseDescriptionWhereInputSchema.optional(),
  orderBy: z.union([ CourseDescriptionOrderByWithAggregationInputSchema.array(),CourseDescriptionOrderByWithAggregationInputSchema ]).optional(),
  by: CourseDescriptionScalarFieldEnumSchema.array(),
  having: CourseDescriptionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CourseDescriptionFindUniqueArgsSchema: z.ZodType<Prisma.CourseDescriptionFindUniqueArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  where: CourseDescriptionWhereUniqueInputSchema,
}).strict()

export const CourseDescriptionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CourseDescriptionFindUniqueOrThrowArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  where: CourseDescriptionWhereUniqueInputSchema,
}).strict()

export const LessonFindFirstArgsSchema: z.ZodType<Prisma.LessonFindFirstArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([ LessonOrderByWithRelationInputSchema.array(),LessonOrderByWithRelationInputSchema ]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict()

export const LessonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LessonFindFirstOrThrowArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([ LessonOrderByWithRelationInputSchema.array(),LessonOrderByWithRelationInputSchema ]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict()

export const LessonFindManyArgsSchema: z.ZodType<Prisma.LessonFindManyArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([ LessonOrderByWithRelationInputSchema.array(),LessonOrderByWithRelationInputSchema ]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict()

export const LessonAggregateArgsSchema: z.ZodType<Prisma.LessonAggregateArgs> = z.object({
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([ LessonOrderByWithRelationInputSchema.array(),LessonOrderByWithRelationInputSchema ]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const LessonGroupByArgsSchema: z.ZodType<Prisma.LessonGroupByArgs> = z.object({
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([ LessonOrderByWithAggregationInputSchema.array(),LessonOrderByWithAggregationInputSchema ]).optional(),
  by: LessonScalarFieldEnumSchema.array(),
  having: LessonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const LessonFindUniqueArgsSchema: z.ZodType<Prisma.LessonFindUniqueArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict()

export const LessonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LessonFindUniqueOrThrowArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict()

export const TagFindFirstArgsSchema: z.ZodType<Prisma.TagFindFirstArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict()

export const TagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TagFindFirstOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict()

export const TagFindManyArgsSchema: z.ZodType<Prisma.TagFindManyArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict()

export const TagAggregateArgsSchema: z.ZodType<Prisma.TagAggregateArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TagGroupByArgsSchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithAggregationInputSchema.array(),TagOrderByWithAggregationInputSchema ]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TagFindUniqueArgsSchema: z.ZodType<Prisma.TagFindUniqueArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict()

export const TagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TagFindUniqueOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict()

export const DemoFindFirstArgsSchema: z.ZodType<Prisma.DemoFindFirstArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  where: DemoWhereInputSchema.optional(),
  orderBy: z.union([ DemoOrderByWithRelationInputSchema.array(),DemoOrderByWithRelationInputSchema ]).optional(),
  cursor: DemoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DemoScalarFieldEnumSchema.array().optional(),
}).strict()

export const DemoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DemoFindFirstOrThrowArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  where: DemoWhereInputSchema.optional(),
  orderBy: z.union([ DemoOrderByWithRelationInputSchema.array(),DemoOrderByWithRelationInputSchema ]).optional(),
  cursor: DemoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DemoScalarFieldEnumSchema.array().optional(),
}).strict()

export const DemoFindManyArgsSchema: z.ZodType<Prisma.DemoFindManyArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  where: DemoWhereInputSchema.optional(),
  orderBy: z.union([ DemoOrderByWithRelationInputSchema.array(),DemoOrderByWithRelationInputSchema ]).optional(),
  cursor: DemoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DemoScalarFieldEnumSchema.array().optional(),
}).strict()

export const DemoAggregateArgsSchema: z.ZodType<Prisma.DemoAggregateArgs> = z.object({
  where: DemoWhereInputSchema.optional(),
  orderBy: z.union([ DemoOrderByWithRelationInputSchema.array(),DemoOrderByWithRelationInputSchema ]).optional(),
  cursor: DemoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const DemoGroupByArgsSchema: z.ZodType<Prisma.DemoGroupByArgs> = z.object({
  where: DemoWhereInputSchema.optional(),
  orderBy: z.union([ DemoOrderByWithAggregationInputSchema.array(),DemoOrderByWithAggregationInputSchema ]).optional(),
  by: DemoScalarFieldEnumSchema.array(),
  having: DemoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const DemoFindUniqueArgsSchema: z.ZodType<Prisma.DemoFindUniqueArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  where: DemoWhereUniqueInputSchema,
}).strict()

export const DemoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DemoFindUniqueOrThrowArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  where: DemoWhereUniqueInputSchema,
}).strict()

export const PrerequisiteFindFirstArgsSchema: z.ZodType<Prisma.PrerequisiteFindFirstArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  where: PrerequisiteWhereInputSchema.optional(),
  orderBy: z.union([ PrerequisiteOrderByWithRelationInputSchema.array(),PrerequisiteOrderByWithRelationInputSchema ]).optional(),
  cursor: PrerequisiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PrerequisiteScalarFieldEnumSchema.array().optional(),
}).strict()

export const PrerequisiteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrerequisiteFindFirstOrThrowArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  where: PrerequisiteWhereInputSchema.optional(),
  orderBy: z.union([ PrerequisiteOrderByWithRelationInputSchema.array(),PrerequisiteOrderByWithRelationInputSchema ]).optional(),
  cursor: PrerequisiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PrerequisiteScalarFieldEnumSchema.array().optional(),
}).strict()

export const PrerequisiteFindManyArgsSchema: z.ZodType<Prisma.PrerequisiteFindManyArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  where: PrerequisiteWhereInputSchema.optional(),
  orderBy: z.union([ PrerequisiteOrderByWithRelationInputSchema.array(),PrerequisiteOrderByWithRelationInputSchema ]).optional(),
  cursor: PrerequisiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PrerequisiteScalarFieldEnumSchema.array().optional(),
}).strict()

export const PrerequisiteAggregateArgsSchema: z.ZodType<Prisma.PrerequisiteAggregateArgs> = z.object({
  where: PrerequisiteWhereInputSchema.optional(),
  orderBy: z.union([ PrerequisiteOrderByWithRelationInputSchema.array(),PrerequisiteOrderByWithRelationInputSchema ]).optional(),
  cursor: PrerequisiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PrerequisiteGroupByArgsSchema: z.ZodType<Prisma.PrerequisiteGroupByArgs> = z.object({
  where: PrerequisiteWhereInputSchema.optional(),
  orderBy: z.union([ PrerequisiteOrderByWithAggregationInputSchema.array(),PrerequisiteOrderByWithAggregationInputSchema ]).optional(),
  by: PrerequisiteScalarFieldEnumSchema.array(),
  having: PrerequisiteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PrerequisiteFindUniqueArgsSchema: z.ZodType<Prisma.PrerequisiteFindUniqueArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  where: PrerequisiteWhereUniqueInputSchema,
}).strict()

export const PrerequisiteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PrerequisiteFindUniqueOrThrowArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  where: PrerequisiteWhereUniqueInputSchema,
}).strict()

export const CourseFeatureFindFirstArgsSchema: z.ZodType<Prisma.CourseFeatureFindFirstArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  where: CourseFeatureWhereInputSchema.optional(),
  orderBy: z.union([ CourseFeatureOrderByWithRelationInputSchema.array(),CourseFeatureOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseFeatureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseFeatureScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseFeatureFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CourseFeatureFindFirstOrThrowArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  where: CourseFeatureWhereInputSchema.optional(),
  orderBy: z.union([ CourseFeatureOrderByWithRelationInputSchema.array(),CourseFeatureOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseFeatureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseFeatureScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseFeatureFindManyArgsSchema: z.ZodType<Prisma.CourseFeatureFindManyArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  where: CourseFeatureWhereInputSchema.optional(),
  orderBy: z.union([ CourseFeatureOrderByWithRelationInputSchema.array(),CourseFeatureOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseFeatureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseFeatureScalarFieldEnumSchema.array().optional(),
}).strict()

export const CourseFeatureAggregateArgsSchema: z.ZodType<Prisma.CourseFeatureAggregateArgs> = z.object({
  where: CourseFeatureWhereInputSchema.optional(),
  orderBy: z.union([ CourseFeatureOrderByWithRelationInputSchema.array(),CourseFeatureOrderByWithRelationInputSchema ]).optional(),
  cursor: CourseFeatureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CourseFeatureGroupByArgsSchema: z.ZodType<Prisma.CourseFeatureGroupByArgs> = z.object({
  where: CourseFeatureWhereInputSchema.optional(),
  orderBy: z.union([ CourseFeatureOrderByWithAggregationInputSchema.array(),CourseFeatureOrderByWithAggregationInputSchema ]).optional(),
  by: CourseFeatureScalarFieldEnumSchema.array(),
  having: CourseFeatureScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CourseFeatureFindUniqueArgsSchema: z.ZodType<Prisma.CourseFeatureFindUniqueArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  where: CourseFeatureWhereUniqueInputSchema,
}).strict()

export const CourseFeatureFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CourseFeatureFindUniqueOrThrowArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  where: CourseFeatureWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict()

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict()

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict()

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict()

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict()

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict()

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const InstructorFindFirstArgsSchema: z.ZodType<Prisma.InstructorFindFirstArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  where: InstructorWhereInputSchema.optional(),
  orderBy: z.union([ InstructorOrderByWithRelationInputSchema.array(),InstructorOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InstructorFindFirstOrThrowArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  where: InstructorWhereInputSchema.optional(),
  orderBy: z.union([ InstructorOrderByWithRelationInputSchema.array(),InstructorOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorFindManyArgsSchema: z.ZodType<Prisma.InstructorFindManyArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  where: InstructorWhereInputSchema.optional(),
  orderBy: z.union([ InstructorOrderByWithRelationInputSchema.array(),InstructorOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorAggregateArgsSchema: z.ZodType<Prisma.InstructorAggregateArgs> = z.object({
  where: InstructorWhereInputSchema.optional(),
  orderBy: z.union([ InstructorOrderByWithRelationInputSchema.array(),InstructorOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstructorGroupByArgsSchema: z.ZodType<Prisma.InstructorGroupByArgs> = z.object({
  where: InstructorWhereInputSchema.optional(),
  orderBy: z.union([ InstructorOrderByWithAggregationInputSchema.array(),InstructorOrderByWithAggregationInputSchema ]).optional(),
  by: InstructorScalarFieldEnumSchema.array(),
  having: InstructorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstructorFindUniqueArgsSchema: z.ZodType<Prisma.InstructorFindUniqueArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  where: InstructorWhereUniqueInputSchema,
}).strict()

export const InstructorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InstructorFindUniqueOrThrowArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  where: InstructorWhereUniqueInputSchema,
}).strict()

export const InstructorEducationalBackgroundFindFirstArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundFindFirstArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  where: InstructorEducationalBackgroundWhereInputSchema.optional(),
  orderBy: z.union([ InstructorEducationalBackgroundOrderByWithRelationInputSchema.array(),InstructorEducationalBackgroundOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorEducationalBackgroundWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorEducationalBackgroundScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorEducationalBackgroundFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundFindFirstOrThrowArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  where: InstructorEducationalBackgroundWhereInputSchema.optional(),
  orderBy: z.union([ InstructorEducationalBackgroundOrderByWithRelationInputSchema.array(),InstructorEducationalBackgroundOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorEducationalBackgroundWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorEducationalBackgroundScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorEducationalBackgroundFindManyArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundFindManyArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  where: InstructorEducationalBackgroundWhereInputSchema.optional(),
  orderBy: z.union([ InstructorEducationalBackgroundOrderByWithRelationInputSchema.array(),InstructorEducationalBackgroundOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorEducationalBackgroundWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorEducationalBackgroundScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorEducationalBackgroundAggregateArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundAggregateArgs> = z.object({
  where: InstructorEducationalBackgroundWhereInputSchema.optional(),
  orderBy: z.union([ InstructorEducationalBackgroundOrderByWithRelationInputSchema.array(),InstructorEducationalBackgroundOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorEducationalBackgroundWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstructorEducationalBackgroundGroupByArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundGroupByArgs> = z.object({
  where: InstructorEducationalBackgroundWhereInputSchema.optional(),
  orderBy: z.union([ InstructorEducationalBackgroundOrderByWithAggregationInputSchema.array(),InstructorEducationalBackgroundOrderByWithAggregationInputSchema ]).optional(),
  by: InstructorEducationalBackgroundScalarFieldEnumSchema.array(),
  having: InstructorEducationalBackgroundScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstructorEducationalBackgroundFindUniqueArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundFindUniqueArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  where: InstructorEducationalBackgroundWhereUniqueInputSchema,
}).strict()

export const InstructorEducationalBackgroundFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundFindUniqueOrThrowArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  where: InstructorEducationalBackgroundWhereUniqueInputSchema,
}).strict()

export const UserSocialMediaFindFirstArgsSchema: z.ZodType<Prisma.UserSocialMediaFindFirstArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  where: UserSocialMediaWhereInputSchema.optional(),
  orderBy: z.union([ UserSocialMediaOrderByWithRelationInputSchema.array(),UserSocialMediaOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSocialMediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserSocialMediaScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserSocialMediaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserSocialMediaFindFirstOrThrowArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  where: UserSocialMediaWhereInputSchema.optional(),
  orderBy: z.union([ UserSocialMediaOrderByWithRelationInputSchema.array(),UserSocialMediaOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSocialMediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserSocialMediaScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserSocialMediaFindManyArgsSchema: z.ZodType<Prisma.UserSocialMediaFindManyArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  where: UserSocialMediaWhereInputSchema.optional(),
  orderBy: z.union([ UserSocialMediaOrderByWithRelationInputSchema.array(),UserSocialMediaOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSocialMediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserSocialMediaScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserSocialMediaAggregateArgsSchema: z.ZodType<Prisma.UserSocialMediaAggregateArgs> = z.object({
  where: UserSocialMediaWhereInputSchema.optional(),
  orderBy: z.union([ UserSocialMediaOrderByWithRelationInputSchema.array(),UserSocialMediaOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSocialMediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserSocialMediaGroupByArgsSchema: z.ZodType<Prisma.UserSocialMediaGroupByArgs> = z.object({
  where: UserSocialMediaWhereInputSchema.optional(),
  orderBy: z.union([ UserSocialMediaOrderByWithAggregationInputSchema.array(),UserSocialMediaOrderByWithAggregationInputSchema ]).optional(),
  by: UserSocialMediaScalarFieldEnumSchema.array(),
  having: UserSocialMediaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserSocialMediaFindUniqueArgsSchema: z.ZodType<Prisma.UserSocialMediaFindUniqueArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  where: UserSocialMediaWhereUniqueInputSchema,
}).strict()

export const UserSocialMediaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserSocialMediaFindUniqueOrThrowArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  where: UserSocialMediaWhereUniqueInputSchema,
}).strict()

export const ReviewFindFirstArgsSchema: z.ZodType<Prisma.ReviewFindFirstArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ReviewScalarFieldEnumSchema.array().optional(),
}).strict()

export const ReviewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReviewFindFirstOrThrowArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ReviewScalarFieldEnumSchema.array().optional(),
}).strict()

export const ReviewFindManyArgsSchema: z.ZodType<Prisma.ReviewFindManyArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ReviewScalarFieldEnumSchema.array().optional(),
}).strict()

export const ReviewAggregateArgsSchema: z.ZodType<Prisma.ReviewAggregateArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ReviewGroupByArgsSchema: z.ZodType<Prisma.ReviewGroupByArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithAggregationInputSchema.array(),ReviewOrderByWithAggregationInputSchema ]).optional(),
  by: ReviewScalarFieldEnumSchema.array(),
  having: ReviewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ReviewFindUniqueArgsSchema: z.ZodType<Prisma.ReviewFindUniqueArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict()

export const ReviewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReviewFindUniqueOrThrowArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict()

export const InstructorsOnCourseFindFirstArgsSchema: z.ZodType<Prisma.InstructorsOnCourseFindFirstArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  where: InstructorsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ InstructorsOnCourseOrderByWithRelationInputSchema.array(),InstructorsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorsOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorsOnCourseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InstructorsOnCourseFindFirstOrThrowArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  where: InstructorsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ InstructorsOnCourseOrderByWithRelationInputSchema.array(),InstructorsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorsOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorsOnCourseFindManyArgsSchema: z.ZodType<Prisma.InstructorsOnCourseFindManyArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  where: InstructorsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ InstructorsOnCourseOrderByWithRelationInputSchema.array(),InstructorsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstructorsOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstructorsOnCourseAggregateArgsSchema: z.ZodType<Prisma.InstructorsOnCourseAggregateArgs> = z.object({
  where: InstructorsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ InstructorsOnCourseOrderByWithRelationInputSchema.array(),InstructorsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: InstructorsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstructorsOnCourseGroupByArgsSchema: z.ZodType<Prisma.InstructorsOnCourseGroupByArgs> = z.object({
  where: InstructorsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ InstructorsOnCourseOrderByWithAggregationInputSchema.array(),InstructorsOnCourseOrderByWithAggregationInputSchema ]).optional(),
  by: InstructorsOnCourseScalarFieldEnumSchema.array(),
  having: InstructorsOnCourseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstructorsOnCourseFindUniqueArgsSchema: z.ZodType<Prisma.InstructorsOnCourseFindUniqueArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  where: InstructorsOnCourseWhereUniqueInputSchema,
}).strict()

export const InstructorsOnCourseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InstructorsOnCourseFindUniqueOrThrowArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  where: InstructorsOnCourseWhereUniqueInputSchema,
}).strict()

export const CategoriesOnCourseFindFirstArgsSchema: z.ZodType<Prisma.CategoriesOnCourseFindFirstArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  where: CategoriesOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOnCourseOrderByWithRelationInputSchema.array(),CategoriesOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoriesOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoriesOnCourseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoriesOnCourseFindFirstOrThrowArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  where: CategoriesOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOnCourseOrderByWithRelationInputSchema.array(),CategoriesOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoriesOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoriesOnCourseFindManyArgsSchema: z.ZodType<Prisma.CategoriesOnCourseFindManyArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  where: CategoriesOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOnCourseOrderByWithRelationInputSchema.array(),CategoriesOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoriesOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoriesOnCourseAggregateArgsSchema: z.ZodType<Prisma.CategoriesOnCourseAggregateArgs> = z.object({
  where: CategoriesOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOnCourseOrderByWithRelationInputSchema.array(),CategoriesOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoriesOnCourseGroupByArgsSchema: z.ZodType<Prisma.CategoriesOnCourseGroupByArgs> = z.object({
  where: CategoriesOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOnCourseOrderByWithAggregationInputSchema.array(),CategoriesOnCourseOrderByWithAggregationInputSchema ]).optional(),
  by: CategoriesOnCourseScalarFieldEnumSchema.array(),
  having: CategoriesOnCourseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoriesOnCourseFindUniqueArgsSchema: z.ZodType<Prisma.CategoriesOnCourseFindUniqueArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  where: CategoriesOnCourseWhereUniqueInputSchema,
}).strict()

export const CategoriesOnCourseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoriesOnCourseFindUniqueOrThrowArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  where: CategoriesOnCourseWhereUniqueInputSchema,
}).strict()

export const UsersOnCourseFindFirstArgsSchema: z.ZodType<Prisma.UsersOnCourseFindFirstArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  where: UsersOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnCourseOrderByWithRelationInputSchema.array(),UsersOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UsersOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const UsersOnCourseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UsersOnCourseFindFirstOrThrowArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  where: UsersOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnCourseOrderByWithRelationInputSchema.array(),UsersOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UsersOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const UsersOnCourseFindManyArgsSchema: z.ZodType<Prisma.UsersOnCourseFindManyArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  where: UsersOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnCourseOrderByWithRelationInputSchema.array(),UsersOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UsersOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const UsersOnCourseAggregateArgsSchema: z.ZodType<Prisma.UsersOnCourseAggregateArgs> = z.object({
  where: UsersOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnCourseOrderByWithRelationInputSchema.array(),UsersOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UsersOnCourseGroupByArgsSchema: z.ZodType<Prisma.UsersOnCourseGroupByArgs> = z.object({
  where: UsersOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnCourseOrderByWithAggregationInputSchema.array(),UsersOnCourseOrderByWithAggregationInputSchema ]).optional(),
  by: UsersOnCourseScalarFieldEnumSchema.array(),
  having: UsersOnCourseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UsersOnCourseFindUniqueArgsSchema: z.ZodType<Prisma.UsersOnCourseFindUniqueArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  where: UsersOnCourseWhereUniqueInputSchema,
}).strict()

export const UsersOnCourseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UsersOnCourseFindUniqueOrThrowArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  where: UsersOnCourseWhereUniqueInputSchema,
}).strict()

export const TagsOnCourseFindFirstArgsSchema: z.ZodType<Prisma.TagsOnCourseFindFirstArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  where: TagsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnCourseOrderByWithRelationInputSchema.array(),TagsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagsOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const TagsOnCourseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TagsOnCourseFindFirstOrThrowArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  where: TagsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnCourseOrderByWithRelationInputSchema.array(),TagsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagsOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const TagsOnCourseFindManyArgsSchema: z.ZodType<Prisma.TagsOnCourseFindManyArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  where: TagsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnCourseOrderByWithRelationInputSchema.array(),TagsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagsOnCourseScalarFieldEnumSchema.array().optional(),
}).strict()

export const TagsOnCourseAggregateArgsSchema: z.ZodType<Prisma.TagsOnCourseAggregateArgs> = z.object({
  where: TagsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnCourseOrderByWithRelationInputSchema.array(),TagsOnCourseOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnCourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TagsOnCourseGroupByArgsSchema: z.ZodType<Prisma.TagsOnCourseGroupByArgs> = z.object({
  where: TagsOnCourseWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnCourseOrderByWithAggregationInputSchema.array(),TagsOnCourseOrderByWithAggregationInputSchema ]).optional(),
  by: TagsOnCourseScalarFieldEnumSchema.array(),
  having: TagsOnCourseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TagsOnCourseFindUniqueArgsSchema: z.ZodType<Prisma.TagsOnCourseFindUniqueArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  where: TagsOnCourseWhereUniqueInputSchema,
}).strict()

export const TagsOnCourseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TagsOnCourseFindUniqueOrThrowArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  where: TagsOnCourseWhereUniqueInputSchema,
}).strict()

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict()

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict()

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict()

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict()

export const CourseCreateArgsSchema: z.ZodType<Prisma.CourseCreateArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  data: z.union([ CourseCreateInputSchema,CourseUncheckedCreateInputSchema ]),
}).strict()

export const CourseUpsertArgsSchema: z.ZodType<Prisma.CourseUpsertArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
  create: z.union([ CourseCreateInputSchema,CourseUncheckedCreateInputSchema ]),
  update: z.union([ CourseUpdateInputSchema,CourseUncheckedUpdateInputSchema ]),
}).strict()

export const CourseCreateManyArgsSchema: z.ZodType<Prisma.CourseCreateManyArgs> = z.object({
  data: z.union([ CourseCreateManyInputSchema,CourseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CourseDeleteArgsSchema: z.ZodType<Prisma.CourseDeleteArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
}).strict()

export const CourseUpdateArgsSchema: z.ZodType<Prisma.CourseUpdateArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  data: z.union([ CourseUpdateInputSchema,CourseUncheckedUpdateInputSchema ]),
  where: CourseWhereUniqueInputSchema,
}).strict()

export const CourseUpdateManyArgsSchema: z.ZodType<Prisma.CourseUpdateManyArgs> = z.object({
  data: z.union([ CourseUpdateManyMutationInputSchema,CourseUncheckedUpdateManyInputSchema ]),
  where: CourseWhereInputSchema.optional(),
}).strict()

export const CourseDeleteManyArgsSchema: z.ZodType<Prisma.CourseDeleteManyArgs> = z.object({
  where: CourseWhereInputSchema.optional(),
}).strict()

export const CourseDescriptionCreateArgsSchema: z.ZodType<Prisma.CourseDescriptionCreateArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  data: z.union([ CourseDescriptionCreateInputSchema,CourseDescriptionUncheckedCreateInputSchema ]),
}).strict()

export const CourseDescriptionUpsertArgsSchema: z.ZodType<Prisma.CourseDescriptionUpsertArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  where: CourseDescriptionWhereUniqueInputSchema,
  create: z.union([ CourseDescriptionCreateInputSchema,CourseDescriptionUncheckedCreateInputSchema ]),
  update: z.union([ CourseDescriptionUpdateInputSchema,CourseDescriptionUncheckedUpdateInputSchema ]),
}).strict()

export const CourseDescriptionCreateManyArgsSchema: z.ZodType<Prisma.CourseDescriptionCreateManyArgs> = z.object({
  data: z.union([ CourseDescriptionCreateManyInputSchema,CourseDescriptionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CourseDescriptionDeleteArgsSchema: z.ZodType<Prisma.CourseDescriptionDeleteArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  where: CourseDescriptionWhereUniqueInputSchema,
}).strict()

export const CourseDescriptionUpdateArgsSchema: z.ZodType<Prisma.CourseDescriptionUpdateArgs> = z.object({
  select: CourseDescriptionSelectSchema.optional(),
  include: CourseDescriptionIncludeSchema.optional(),
  data: z.union([ CourseDescriptionUpdateInputSchema,CourseDescriptionUncheckedUpdateInputSchema ]),
  where: CourseDescriptionWhereUniqueInputSchema,
}).strict()

export const CourseDescriptionUpdateManyArgsSchema: z.ZodType<Prisma.CourseDescriptionUpdateManyArgs> = z.object({
  data: z.union([ CourseDescriptionUpdateManyMutationInputSchema,CourseDescriptionUncheckedUpdateManyInputSchema ]),
  where: CourseDescriptionWhereInputSchema.optional(),
}).strict()

export const CourseDescriptionDeleteManyArgsSchema: z.ZodType<Prisma.CourseDescriptionDeleteManyArgs> = z.object({
  where: CourseDescriptionWhereInputSchema.optional(),
}).strict()

export const LessonCreateArgsSchema: z.ZodType<Prisma.LessonCreateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  data: z.union([ LessonCreateInputSchema,LessonUncheckedCreateInputSchema ]),
}).strict()

export const LessonUpsertArgsSchema: z.ZodType<Prisma.LessonUpsertArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereUniqueInputSchema,
  create: z.union([ LessonCreateInputSchema,LessonUncheckedCreateInputSchema ]),
  update: z.union([ LessonUpdateInputSchema,LessonUncheckedUpdateInputSchema ]),
}).strict()

export const LessonCreateManyArgsSchema: z.ZodType<Prisma.LessonCreateManyArgs> = z.object({
  data: z.union([ LessonCreateManyInputSchema,LessonCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const LessonDeleteArgsSchema: z.ZodType<Prisma.LessonDeleteArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict()

export const LessonUpdateArgsSchema: z.ZodType<Prisma.LessonUpdateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  data: z.union([ LessonUpdateInputSchema,LessonUncheckedUpdateInputSchema ]),
  where: LessonWhereUniqueInputSchema,
}).strict()

export const LessonUpdateManyArgsSchema: z.ZodType<Prisma.LessonUpdateManyArgs> = z.object({
  data: z.union([ LessonUpdateManyMutationInputSchema,LessonUncheckedUpdateManyInputSchema ]),
  where: LessonWhereInputSchema.optional(),
}).strict()

export const LessonDeleteManyArgsSchema: z.ZodType<Prisma.LessonDeleteManyArgs> = z.object({
  where: LessonWhereInputSchema.optional(),
}).strict()

export const TagCreateArgsSchema: z.ZodType<Prisma.TagCreateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
}).strict()

export const TagUpsertArgsSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
  update: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
}).strict()

export const TagCreateManyArgsSchema: z.ZodType<Prisma.TagCreateManyArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const TagDeleteArgsSchema: z.ZodType<Prisma.TagDeleteArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict()

export const TagUpdateArgsSchema: z.ZodType<Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
  where: TagWhereUniqueInputSchema,
}).strict()

export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
}).strict()

export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict()

export const DemoCreateArgsSchema: z.ZodType<Prisma.DemoCreateArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  data: z.union([ DemoCreateInputSchema,DemoUncheckedCreateInputSchema ]),
}).strict()

export const DemoUpsertArgsSchema: z.ZodType<Prisma.DemoUpsertArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  where: DemoWhereUniqueInputSchema,
  create: z.union([ DemoCreateInputSchema,DemoUncheckedCreateInputSchema ]),
  update: z.union([ DemoUpdateInputSchema,DemoUncheckedUpdateInputSchema ]),
}).strict()

export const DemoCreateManyArgsSchema: z.ZodType<Prisma.DemoCreateManyArgs> = z.object({
  data: z.union([ DemoCreateManyInputSchema,DemoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const DemoDeleteArgsSchema: z.ZodType<Prisma.DemoDeleteArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  where: DemoWhereUniqueInputSchema,
}).strict()

export const DemoUpdateArgsSchema: z.ZodType<Prisma.DemoUpdateArgs> = z.object({
  select: DemoSelectSchema.optional(),
  include: DemoIncludeSchema.optional(),
  data: z.union([ DemoUpdateInputSchema,DemoUncheckedUpdateInputSchema ]),
  where: DemoWhereUniqueInputSchema,
}).strict()

export const DemoUpdateManyArgsSchema: z.ZodType<Prisma.DemoUpdateManyArgs> = z.object({
  data: z.union([ DemoUpdateManyMutationInputSchema,DemoUncheckedUpdateManyInputSchema ]),
  where: DemoWhereInputSchema.optional(),
}).strict()

export const DemoDeleteManyArgsSchema: z.ZodType<Prisma.DemoDeleteManyArgs> = z.object({
  where: DemoWhereInputSchema.optional(),
}).strict()

export const PrerequisiteCreateArgsSchema: z.ZodType<Prisma.PrerequisiteCreateArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  data: z.union([ PrerequisiteCreateInputSchema,PrerequisiteUncheckedCreateInputSchema ]),
}).strict()

export const PrerequisiteUpsertArgsSchema: z.ZodType<Prisma.PrerequisiteUpsertArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  where: PrerequisiteWhereUniqueInputSchema,
  create: z.union([ PrerequisiteCreateInputSchema,PrerequisiteUncheckedCreateInputSchema ]),
  update: z.union([ PrerequisiteUpdateInputSchema,PrerequisiteUncheckedUpdateInputSchema ]),
}).strict()

export const PrerequisiteCreateManyArgsSchema: z.ZodType<Prisma.PrerequisiteCreateManyArgs> = z.object({
  data: z.union([ PrerequisiteCreateManyInputSchema,PrerequisiteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PrerequisiteDeleteArgsSchema: z.ZodType<Prisma.PrerequisiteDeleteArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  where: PrerequisiteWhereUniqueInputSchema,
}).strict()

export const PrerequisiteUpdateArgsSchema: z.ZodType<Prisma.PrerequisiteUpdateArgs> = z.object({
  select: PrerequisiteSelectSchema.optional(),
  include: PrerequisiteIncludeSchema.optional(),
  data: z.union([ PrerequisiteUpdateInputSchema,PrerequisiteUncheckedUpdateInputSchema ]),
  where: PrerequisiteWhereUniqueInputSchema,
}).strict()

export const PrerequisiteUpdateManyArgsSchema: z.ZodType<Prisma.PrerequisiteUpdateManyArgs> = z.object({
  data: z.union([ PrerequisiteUpdateManyMutationInputSchema,PrerequisiteUncheckedUpdateManyInputSchema ]),
  where: PrerequisiteWhereInputSchema.optional(),
}).strict()

export const PrerequisiteDeleteManyArgsSchema: z.ZodType<Prisma.PrerequisiteDeleteManyArgs> = z.object({
  where: PrerequisiteWhereInputSchema.optional(),
}).strict()

export const CourseFeatureCreateArgsSchema: z.ZodType<Prisma.CourseFeatureCreateArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  data: z.union([ CourseFeatureCreateInputSchema,CourseFeatureUncheckedCreateInputSchema ]),
}).strict()

export const CourseFeatureUpsertArgsSchema: z.ZodType<Prisma.CourseFeatureUpsertArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  where: CourseFeatureWhereUniqueInputSchema,
  create: z.union([ CourseFeatureCreateInputSchema,CourseFeatureUncheckedCreateInputSchema ]),
  update: z.union([ CourseFeatureUpdateInputSchema,CourseFeatureUncheckedUpdateInputSchema ]),
}).strict()

export const CourseFeatureCreateManyArgsSchema: z.ZodType<Prisma.CourseFeatureCreateManyArgs> = z.object({
  data: z.union([ CourseFeatureCreateManyInputSchema,CourseFeatureCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CourseFeatureDeleteArgsSchema: z.ZodType<Prisma.CourseFeatureDeleteArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  where: CourseFeatureWhereUniqueInputSchema,
}).strict()

export const CourseFeatureUpdateArgsSchema: z.ZodType<Prisma.CourseFeatureUpdateArgs> = z.object({
  select: CourseFeatureSelectSchema.optional(),
  include: CourseFeatureIncludeSchema.optional(),
  data: z.union([ CourseFeatureUpdateInputSchema,CourseFeatureUncheckedUpdateInputSchema ]),
  where: CourseFeatureWhereUniqueInputSchema,
}).strict()

export const CourseFeatureUpdateManyArgsSchema: z.ZodType<Prisma.CourseFeatureUpdateManyArgs> = z.object({
  data: z.union([ CourseFeatureUpdateManyMutationInputSchema,CourseFeatureUncheckedUpdateManyInputSchema ]),
  where: CourseFeatureWhereInputSchema.optional(),
}).strict()

export const CourseFeatureDeleteManyArgsSchema: z.ZodType<Prisma.CourseFeatureDeleteManyArgs> = z.object({
  where: CourseFeatureWhereInputSchema.optional(),
}).strict()

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict()

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict()

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict()

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict()

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict()

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict()

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict()

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict()

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict()

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const InstructorCreateArgsSchema: z.ZodType<Prisma.InstructorCreateArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  data: z.union([ InstructorCreateInputSchema,InstructorUncheckedCreateInputSchema ]),
}).strict()

export const InstructorUpsertArgsSchema: z.ZodType<Prisma.InstructorUpsertArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  where: InstructorWhereUniqueInputSchema,
  create: z.union([ InstructorCreateInputSchema,InstructorUncheckedCreateInputSchema ]),
  update: z.union([ InstructorUpdateInputSchema,InstructorUncheckedUpdateInputSchema ]),
}).strict()

export const InstructorCreateManyArgsSchema: z.ZodType<Prisma.InstructorCreateManyArgs> = z.object({
  data: z.union([ InstructorCreateManyInputSchema,InstructorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const InstructorDeleteArgsSchema: z.ZodType<Prisma.InstructorDeleteArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  where: InstructorWhereUniqueInputSchema,
}).strict()

export const InstructorUpdateArgsSchema: z.ZodType<Prisma.InstructorUpdateArgs> = z.object({
  select: InstructorSelectSchema.optional(),
  include: InstructorIncludeSchema.optional(),
  data: z.union([ InstructorUpdateInputSchema,InstructorUncheckedUpdateInputSchema ]),
  where: InstructorWhereUniqueInputSchema,
}).strict()

export const InstructorUpdateManyArgsSchema: z.ZodType<Prisma.InstructorUpdateManyArgs> = z.object({
  data: z.union([ InstructorUpdateManyMutationInputSchema,InstructorUncheckedUpdateManyInputSchema ]),
  where: InstructorWhereInputSchema.optional(),
}).strict()

export const InstructorDeleteManyArgsSchema: z.ZodType<Prisma.InstructorDeleteManyArgs> = z.object({
  where: InstructorWhereInputSchema.optional(),
}).strict()

export const InstructorEducationalBackgroundCreateArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  data: z.union([ InstructorEducationalBackgroundCreateInputSchema,InstructorEducationalBackgroundUncheckedCreateInputSchema ]),
}).strict()

export const InstructorEducationalBackgroundUpsertArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpsertArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  where: InstructorEducationalBackgroundWhereUniqueInputSchema,
  create: z.union([ InstructorEducationalBackgroundCreateInputSchema,InstructorEducationalBackgroundUncheckedCreateInputSchema ]),
  update: z.union([ InstructorEducationalBackgroundUpdateInputSchema,InstructorEducationalBackgroundUncheckedUpdateInputSchema ]),
}).strict()

export const InstructorEducationalBackgroundCreateManyArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundCreateManyArgs> = z.object({
  data: z.union([ InstructorEducationalBackgroundCreateManyInputSchema,InstructorEducationalBackgroundCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const InstructorEducationalBackgroundDeleteArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundDeleteArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  where: InstructorEducationalBackgroundWhereUniqueInputSchema,
}).strict()

export const InstructorEducationalBackgroundUpdateArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateArgs> = z.object({
  select: InstructorEducationalBackgroundSelectSchema.optional(),
  include: InstructorEducationalBackgroundIncludeSchema.optional(),
  data: z.union([ InstructorEducationalBackgroundUpdateInputSchema,InstructorEducationalBackgroundUncheckedUpdateInputSchema ]),
  where: InstructorEducationalBackgroundWhereUniqueInputSchema,
}).strict()

export const InstructorEducationalBackgroundUpdateManyArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundUpdateManyArgs> = z.object({
  data: z.union([ InstructorEducationalBackgroundUpdateManyMutationInputSchema,InstructorEducationalBackgroundUncheckedUpdateManyInputSchema ]),
  where: InstructorEducationalBackgroundWhereInputSchema.optional(),
}).strict()

export const InstructorEducationalBackgroundDeleteManyArgsSchema: z.ZodType<Prisma.InstructorEducationalBackgroundDeleteManyArgs> = z.object({
  where: InstructorEducationalBackgroundWhereInputSchema.optional(),
}).strict()

export const UserSocialMediaCreateArgsSchema: z.ZodType<Prisma.UserSocialMediaCreateArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  data: z.union([ UserSocialMediaCreateInputSchema,UserSocialMediaUncheckedCreateInputSchema ]),
}).strict()

export const UserSocialMediaUpsertArgsSchema: z.ZodType<Prisma.UserSocialMediaUpsertArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  where: UserSocialMediaWhereUniqueInputSchema,
  create: z.union([ UserSocialMediaCreateInputSchema,UserSocialMediaUncheckedCreateInputSchema ]),
  update: z.union([ UserSocialMediaUpdateInputSchema,UserSocialMediaUncheckedUpdateInputSchema ]),
}).strict()

export const UserSocialMediaCreateManyArgsSchema: z.ZodType<Prisma.UserSocialMediaCreateManyArgs> = z.object({
  data: z.union([ UserSocialMediaCreateManyInputSchema,UserSocialMediaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserSocialMediaDeleteArgsSchema: z.ZodType<Prisma.UserSocialMediaDeleteArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  where: UserSocialMediaWhereUniqueInputSchema,
}).strict()

export const UserSocialMediaUpdateArgsSchema: z.ZodType<Prisma.UserSocialMediaUpdateArgs> = z.object({
  select: UserSocialMediaSelectSchema.optional(),
  include: UserSocialMediaIncludeSchema.optional(),
  data: z.union([ UserSocialMediaUpdateInputSchema,UserSocialMediaUncheckedUpdateInputSchema ]),
  where: UserSocialMediaWhereUniqueInputSchema,
}).strict()

export const UserSocialMediaUpdateManyArgsSchema: z.ZodType<Prisma.UserSocialMediaUpdateManyArgs> = z.object({
  data: z.union([ UserSocialMediaUpdateManyMutationInputSchema,UserSocialMediaUncheckedUpdateManyInputSchema ]),
  where: UserSocialMediaWhereInputSchema.optional(),
}).strict()

export const UserSocialMediaDeleteManyArgsSchema: z.ZodType<Prisma.UserSocialMediaDeleteManyArgs> = z.object({
  where: UserSocialMediaWhereInputSchema.optional(),
}).strict()

export const ReviewCreateArgsSchema: z.ZodType<Prisma.ReviewCreateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
}).strict()

export const ReviewUpsertArgsSchema: z.ZodType<Prisma.ReviewUpsertArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
  create: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
  update: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
}).strict()

export const ReviewCreateManyArgsSchema: z.ZodType<Prisma.ReviewCreateManyArgs> = z.object({
  data: z.union([ ReviewCreateManyInputSchema,ReviewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ReviewDeleteArgsSchema: z.ZodType<Prisma.ReviewDeleteArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict()

export const ReviewUpdateArgsSchema: z.ZodType<Prisma.ReviewUpdateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
  where: ReviewWhereUniqueInputSchema,
}).strict()

export const ReviewUpdateManyArgsSchema: z.ZodType<Prisma.ReviewUpdateManyArgs> = z.object({
  data: z.union([ ReviewUpdateManyMutationInputSchema,ReviewUncheckedUpdateManyInputSchema ]),
  where: ReviewWhereInputSchema.optional(),
}).strict()

export const ReviewDeleteManyArgsSchema: z.ZodType<Prisma.ReviewDeleteManyArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
}).strict()

export const InstructorsOnCourseCreateArgsSchema: z.ZodType<Prisma.InstructorsOnCourseCreateArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  data: z.union([ InstructorsOnCourseCreateInputSchema,InstructorsOnCourseUncheckedCreateInputSchema ]),
}).strict()

export const InstructorsOnCourseUpsertArgsSchema: z.ZodType<Prisma.InstructorsOnCourseUpsertArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  where: InstructorsOnCourseWhereUniqueInputSchema,
  create: z.union([ InstructorsOnCourseCreateInputSchema,InstructorsOnCourseUncheckedCreateInputSchema ]),
  update: z.union([ InstructorsOnCourseUpdateInputSchema,InstructorsOnCourseUncheckedUpdateInputSchema ]),
}).strict()

export const InstructorsOnCourseCreateManyArgsSchema: z.ZodType<Prisma.InstructorsOnCourseCreateManyArgs> = z.object({
  data: z.union([ InstructorsOnCourseCreateManyInputSchema,InstructorsOnCourseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const InstructorsOnCourseDeleteArgsSchema: z.ZodType<Prisma.InstructorsOnCourseDeleteArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  where: InstructorsOnCourseWhereUniqueInputSchema,
}).strict()

export const InstructorsOnCourseUpdateArgsSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateArgs> = z.object({
  select: InstructorsOnCourseSelectSchema.optional(),
  include: InstructorsOnCourseIncludeSchema.optional(),
  data: z.union([ InstructorsOnCourseUpdateInputSchema,InstructorsOnCourseUncheckedUpdateInputSchema ]),
  where: InstructorsOnCourseWhereUniqueInputSchema,
}).strict()

export const InstructorsOnCourseUpdateManyArgsSchema: z.ZodType<Prisma.InstructorsOnCourseUpdateManyArgs> = z.object({
  data: z.union([ InstructorsOnCourseUpdateManyMutationInputSchema,InstructorsOnCourseUncheckedUpdateManyInputSchema ]),
  where: InstructorsOnCourseWhereInputSchema.optional(),
}).strict()

export const InstructorsOnCourseDeleteManyArgsSchema: z.ZodType<Prisma.InstructorsOnCourseDeleteManyArgs> = z.object({
  where: InstructorsOnCourseWhereInputSchema.optional(),
}).strict()

export const CategoriesOnCourseCreateArgsSchema: z.ZodType<Prisma.CategoriesOnCourseCreateArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  data: z.union([ CategoriesOnCourseCreateInputSchema,CategoriesOnCourseUncheckedCreateInputSchema ]),
}).strict()

export const CategoriesOnCourseUpsertArgsSchema: z.ZodType<Prisma.CategoriesOnCourseUpsertArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  where: CategoriesOnCourseWhereUniqueInputSchema,
  create: z.union([ CategoriesOnCourseCreateInputSchema,CategoriesOnCourseUncheckedCreateInputSchema ]),
  update: z.union([ CategoriesOnCourseUpdateInputSchema,CategoriesOnCourseUncheckedUpdateInputSchema ]),
}).strict()

export const CategoriesOnCourseCreateManyArgsSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyArgs> = z.object({
  data: z.union([ CategoriesOnCourseCreateManyInputSchema,CategoriesOnCourseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CategoriesOnCourseDeleteArgsSchema: z.ZodType<Prisma.CategoriesOnCourseDeleteArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  where: CategoriesOnCourseWhereUniqueInputSchema,
}).strict()

export const CategoriesOnCourseUpdateArgsSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateArgs> = z.object({
  select: CategoriesOnCourseSelectSchema.optional(),
  include: CategoriesOnCourseIncludeSchema.optional(),
  data: z.union([ CategoriesOnCourseUpdateInputSchema,CategoriesOnCourseUncheckedUpdateInputSchema ]),
  where: CategoriesOnCourseWhereUniqueInputSchema,
}).strict()

export const CategoriesOnCourseUpdateManyArgsSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateManyArgs> = z.object({
  data: z.union([ CategoriesOnCourseUpdateManyMutationInputSchema,CategoriesOnCourseUncheckedUpdateManyInputSchema ]),
  where: CategoriesOnCourseWhereInputSchema.optional(),
}).strict()

export const CategoriesOnCourseDeleteManyArgsSchema: z.ZodType<Prisma.CategoriesOnCourseDeleteManyArgs> = z.object({
  where: CategoriesOnCourseWhereInputSchema.optional(),
}).strict()

export const UsersOnCourseCreateArgsSchema: z.ZodType<Prisma.UsersOnCourseCreateArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  data: z.union([ UsersOnCourseCreateInputSchema,UsersOnCourseUncheckedCreateInputSchema ]),
}).strict()

export const UsersOnCourseUpsertArgsSchema: z.ZodType<Prisma.UsersOnCourseUpsertArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  where: UsersOnCourseWhereUniqueInputSchema,
  create: z.union([ UsersOnCourseCreateInputSchema,UsersOnCourseUncheckedCreateInputSchema ]),
  update: z.union([ UsersOnCourseUpdateInputSchema,UsersOnCourseUncheckedUpdateInputSchema ]),
}).strict()

export const UsersOnCourseCreateManyArgsSchema: z.ZodType<Prisma.UsersOnCourseCreateManyArgs> = z.object({
  data: z.union([ UsersOnCourseCreateManyInputSchema,UsersOnCourseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UsersOnCourseDeleteArgsSchema: z.ZodType<Prisma.UsersOnCourseDeleteArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  where: UsersOnCourseWhereUniqueInputSchema,
}).strict()

export const UsersOnCourseUpdateArgsSchema: z.ZodType<Prisma.UsersOnCourseUpdateArgs> = z.object({
  select: UsersOnCourseSelectSchema.optional(),
  include: UsersOnCourseIncludeSchema.optional(),
  data: z.union([ UsersOnCourseUpdateInputSchema,UsersOnCourseUncheckedUpdateInputSchema ]),
  where: UsersOnCourseWhereUniqueInputSchema,
}).strict()

export const UsersOnCourseUpdateManyArgsSchema: z.ZodType<Prisma.UsersOnCourseUpdateManyArgs> = z.object({
  data: z.union([ UsersOnCourseUpdateManyMutationInputSchema,UsersOnCourseUncheckedUpdateManyInputSchema ]),
  where: UsersOnCourseWhereInputSchema.optional(),
}).strict()

export const UsersOnCourseDeleteManyArgsSchema: z.ZodType<Prisma.UsersOnCourseDeleteManyArgs> = z.object({
  where: UsersOnCourseWhereInputSchema.optional(),
}).strict()

export const TagsOnCourseCreateArgsSchema: z.ZodType<Prisma.TagsOnCourseCreateArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  data: z.union([ TagsOnCourseCreateInputSchema,TagsOnCourseUncheckedCreateInputSchema ]),
}).strict()

export const TagsOnCourseUpsertArgsSchema: z.ZodType<Prisma.TagsOnCourseUpsertArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  where: TagsOnCourseWhereUniqueInputSchema,
  create: z.union([ TagsOnCourseCreateInputSchema,TagsOnCourseUncheckedCreateInputSchema ]),
  update: z.union([ TagsOnCourseUpdateInputSchema,TagsOnCourseUncheckedUpdateInputSchema ]),
}).strict()

export const TagsOnCourseCreateManyArgsSchema: z.ZodType<Prisma.TagsOnCourseCreateManyArgs> = z.object({
  data: z.union([ TagsOnCourseCreateManyInputSchema,TagsOnCourseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const TagsOnCourseDeleteArgsSchema: z.ZodType<Prisma.TagsOnCourseDeleteArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  where: TagsOnCourseWhereUniqueInputSchema,
}).strict()

export const TagsOnCourseUpdateArgsSchema: z.ZodType<Prisma.TagsOnCourseUpdateArgs> = z.object({
  select: TagsOnCourseSelectSchema.optional(),
  include: TagsOnCourseIncludeSchema.optional(),
  data: z.union([ TagsOnCourseUpdateInputSchema,TagsOnCourseUncheckedUpdateInputSchema ]),
  where: TagsOnCourseWhereUniqueInputSchema,
}).strict()

export const TagsOnCourseUpdateManyArgsSchema: z.ZodType<Prisma.TagsOnCourseUpdateManyArgs> = z.object({
  data: z.union([ TagsOnCourseUpdateManyMutationInputSchema,TagsOnCourseUncheckedUpdateManyInputSchema ]),
  where: TagsOnCourseWhereInputSchema.optional(),
}).strict()

export const TagsOnCourseDeleteManyArgsSchema: z.ZodType<Prisma.TagsOnCourseDeleteManyArgs> = z.object({
  where: TagsOnCourseWhereInputSchema.optional(),
}).strict()