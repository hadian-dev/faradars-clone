import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const CategoriesOnCourseScalarFieldEnumSchema = z.enum(['courseId','categoryId','assignedAt']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','slug','image','cover','description','parentId']);

export const CommentScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','text','userId','courseId']);

export const CourseDescriptionScalarFieldEnumSchema = z.enum(['id','label','content','courseId']);

export const CourseFeatureScalarFieldEnumSchema = z.enum(['id','name','value','image','position','courseId']);

export const CourseScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','publishedAt','name','slug','enabled','viewCount','rating','ratingCount','favoriteCount','duration','price','originalPrice','imageCover','publisher','videoCover','size','language','type']);

export const DemoScalarFieldEnumSchema = z.enum(['id','name','link','position','courseId']);

export const LessonScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','description','duration','video','images','notes','practices','rating','ratingCount','courseId']);

export const PrerequisiteScalarFieldEnumSchema = z.enum(['id','name','link','type','position','courseId']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TagScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','slug']);

export const TagsOnCourseScalarFieldEnumSchema = z.enum(['courseId','tagId','assignedAt']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','image','email','phone','slug','biography','grade','degree','wishlist','gender']);

export const UsersOnCourseScalarFieldEnumSchema = z.enum(['courseId','userId']);

export const LanguageSchema = z.enum(['EN','FA']);

export type LanguageType = `${z.infer<typeof LanguageSchema>}`

export const CourseTypeSchema = z.enum(['ONLINE','WEBINAR']);

export type CourseTypeType = `${z.infer<typeof CourseTypeSchema>}`

export const GenderTypeSchema = z.enum(['Man','Woman','Unknown']);

export type GenderTypeType = `${z.infer<typeof GenderTypeSchema>}`

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
  parentId: z.number().int().nullable(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// COURSE SCHEMA
/////////////////////////////////////////

export const CourseSchema = z.object({
  language: LanguageSchema.nullable(),
  type: CourseTypeSchema.nullable(),
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  publishedAt: z.string().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().nullable(),
  videoCover: z.string().nullable(),
  size: z.string().nullable(),
})

export type Course = z.infer<typeof CourseSchema>

/////////////////////////////////////////
// COURSE DESCRIPTION SCHEMA
/////////////////////////////////////////

export const CourseDescriptionSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  content: z.string(),
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
  grade: z.string().nullable(),
  degree: z.string().nullable(),
  wishlist: z.number().int().array(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// COMMENT SCHEMA
/////////////////////////////////////////

export const CommentSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  text: z.string(),
  userId: z.number().int(),
  courseId: z.number().int(),
})

export type Comment = z.infer<typeof CommentSchema>

/////////////////////////////////////////
// CATEGORIES ON COURSE SCHEMA
/////////////////////////////////////////

export const CategoriesOnCourseSchema = z.object({
  courseId: z.number().int(),
  categoryId: z.number().int(),
  assignedAt: z.coerce.date(),
})

export type CategoriesOnCourse = z.infer<typeof CategoriesOnCourseSchema>

/////////////////////////////////////////
// USERS ON COURSE SCHEMA
/////////////////////////////////////////

export const UsersOnCourseSchema = z.object({
  courseId: z.number().int(),
  userId: z.number().int(),
})

export type UsersOnCourse = z.infer<typeof UsersOnCourseSchema>

/////////////////////////////////////////
// TAGS ON COURSE SCHEMA
/////////////////////////////////////////

export const TagsOnCourseSchema = z.object({
  courseId: z.number().int(),
  tagId: z.number().int(),
  assignedAt: z.coerce.date(),
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
  parentId: z.boolean().optional(),
  parent: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  courses: z.union([z.boolean(),z.lazy(() => CategoriesOnCourseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COURSE
//------------------------------------------------------

export const CourseIncludeSchema: z.ZodType<Prisma.CourseInclude> = z.object({
  prerequisites: z.union([z.boolean(),z.lazy(() => PrerequisiteFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsOnCourseFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoriesOnCourseFindManyArgsSchema)]).optional(),
  lessons: z.union([z.boolean(),z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  demos: z.union([z.boolean(),z.lazy(() => DemoFindManyArgsSchema)]).optional(),
  features: z.union([z.boolean(),z.lazy(() => CourseFeatureFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
  descriptions: z.union([z.boolean(),z.lazy(() => CourseDescriptionFindManyArgsSchema)]).optional(),
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
  prerequisites: z.boolean().optional(),
  tags: z.boolean().optional(),
  categories: z.boolean().optional(),
  lessons: z.boolean().optional(),
  users: z.boolean().optional(),
  demos: z.boolean().optional(),
  features: z.boolean().optional(),
  comments: z.boolean().optional(),
  descriptions: z.boolean().optional(),
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
  imageCover: z.boolean().optional(),
  publisher: z.boolean().optional(),
  videoCover: z.boolean().optional(),
  size: z.boolean().optional(),
  language: z.boolean().optional(),
  type: z.boolean().optional(),
  prerequisites: z.union([z.boolean(),z.lazy(() => PrerequisiteFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsOnCourseFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoriesOnCourseFindManyArgsSchema)]).optional(),
  lessons: z.union([z.boolean(),z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  demos: z.union([z.boolean(),z.lazy(() => DemoFindManyArgsSchema)]).optional(),
  features: z.union([z.boolean(),z.lazy(() => CourseFeatureFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
  descriptions: z.union([z.boolean(),z.lazy(() => CourseDescriptionFindManyArgsSchema)]).optional(),
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
  label: z.boolean().optional(),
  content: z.boolean().optional(),
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

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  courses: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
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
  comments: z.boolean().optional(),
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
  grade: z.boolean().optional(),
  degree: z.boolean().optional(),
  wishlist: z.boolean().optional(),
  gender: z.boolean().optional(),
  courses: z.union([z.boolean(),z.lazy(() => UsersOnCourseFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMMENT
//------------------------------------------------------

export const CommentIncludeSchema: z.ZodType<Prisma.CommentInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
}).strict()

export const CommentArgsSchema: z.ZodType<Prisma.CommentArgs> = z.object({
  select: z.lazy(() => CommentSelectSchema).optional(),
  include: z.lazy(() => CommentIncludeSchema).optional(),
}).strict();

export const CommentSelectSchema: z.ZodType<Prisma.CommentSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  text: z.boolean().optional(),
  userId: z.boolean().optional(),
  courseId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  course: z.union([z.boolean(),z.lazy(() => CourseArgsSchema)]).optional(),
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
  courseId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  assignedAt: z.boolean().optional(),
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
  courseId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  assignedAt: z.boolean().optional(),
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
  publishedAt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
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
  imageCover: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  publisher: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  videoCover: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  size: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => EnumLanguageNullableFilterSchema),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumCourseTypeNullableFilterSchema),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagsOnCourseListRelationFilterSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseListRelationFilterSchema).optional(),
  lessons: z.lazy(() => LessonListRelationFilterSchema).optional(),
  users: z.lazy(() => UsersOnCourseListRelationFilterSchema).optional(),
  demos: z.lazy(() => DemoListRelationFilterSchema).optional(),
  features: z.lazy(() => CourseFeatureListRelationFilterSchema).optional(),
  comments: z.lazy(() => CommentListRelationFilterSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionListRelationFilterSchema).optional()
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
  imageCover: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  prerequisites: z.lazy(() => PrerequisiteOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseOrderByRelationAggregateInputSchema).optional(),
  lessons: z.lazy(() => LessonOrderByRelationAggregateInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseOrderByRelationAggregateInputSchema).optional(),
  demos: z.lazy(() => DemoOrderByRelationAggregateInputSchema).optional(),
  features: z.lazy(() => CourseFeatureOrderByRelationAggregateInputSchema).optional(),
  comments: z.lazy(() => CommentOrderByRelationAggregateInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionOrderByRelationAggregateInputSchema).optional()
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
  imageCover: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
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
  publishedAt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
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
  imageCover: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  publisher: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  videoCover: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  size: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => EnumLanguageNullableWithAggregatesFilterSchema),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumCourseTypeNullableWithAggregatesFilterSchema),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
}).strict();

export const CourseDescriptionWhereInputSchema: z.ZodType<Prisma.CourseDescriptionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourseDescriptionWhereInputSchema),z.lazy(() => CourseDescriptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseDescriptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseDescriptionWhereInputSchema),z.lazy(() => CourseDescriptionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional().nullable(),
}).strict();

export const CourseDescriptionOrderByWithRelationInputSchema: z.ZodType<Prisma.CourseDescriptionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const CourseDescriptionWhereUniqueInputSchema: z.ZodType<Prisma.CourseDescriptionWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const CourseDescriptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.CourseDescriptionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
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
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
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
  grade: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  degree: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  wishlist: z.lazy(() => IntNullableListFilterSchema).optional(),
  gender: z.union([ z.lazy(() => EnumGenderTypeFilterSchema),z.lazy(() => GenderTypeSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseListRelationFilterSchema).optional(),
  comments: z.lazy(() => CommentListRelationFilterSchema).optional()
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
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
  wishlist: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  courses: z.lazy(() => UsersOnCourseOrderByRelationAggregateInputSchema).optional(),
  comments: z.lazy(() => CommentOrderByRelationAggregateInputSchema).optional()
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
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
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
  grade: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  degree: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  wishlist: z.lazy(() => IntNullableListFilterSchema).optional(),
  gender: z.union([ z.lazy(() => EnumGenderTypeWithAggregatesFilterSchema),z.lazy(() => GenderTypeSchema) ]).optional(),
}).strict();

export const CommentWhereInputSchema: z.ZodType<Prisma.CommentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
}).strict();

export const CommentOrderByWithRelationInputSchema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional()
}).strict();

export const CommentWhereUniqueInputSchema: z.ZodType<Prisma.CommentWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const CommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.CommentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CommentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CommentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CommentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CommentSumOrderByAggregateInputSchema).optional()
}).strict();

export const CommentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CommentScalarWhereWithAggregatesInputSchema),z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentScalarWhereWithAggregatesInputSchema),z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const CategoriesOnCourseWhereInputSchema: z.ZodType<Prisma.CategoriesOnCourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesOnCourseWhereInputSchema),z.lazy(() => CategoriesOnCourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesOnCourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesOnCourseWhereInputSchema),z.lazy(() => CategoriesOnCourseWhereInputSchema).array() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoriesOnCourseOrderByWithRelationInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional()
}).strict();

export const CategoriesOnCourseWhereUniqueInputSchema: z.ZodType<Prisma.CategoriesOnCourseWhereUniqueInput> = z.object({
  courseId_categoryId: z.lazy(() => CategoriesOnCourseCourseIdCategoryIdCompoundUniqueInputSchema).optional()
}).strict();

export const CategoriesOnCourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoriesOnCourseOrderByWithAggregationInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
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
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UsersOnCourseWhereInputSchema: z.ZodType<Prisma.UsersOnCourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnCourseWhereInputSchema),z.lazy(() => UsersOnCourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnCourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnCourseWhereInputSchema),z.lazy(() => UsersOnCourseWhereInputSchema).array() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOnCourseOrderByWithRelationInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UsersOnCourseWhereUniqueInputSchema: z.ZodType<Prisma.UsersOnCourseWhereUniqueInput> = z.object({
  courseId_userId: z.lazy(() => UsersOnCourseCourseIdUserIdCompoundUniqueInputSchema).optional()
}).strict();

export const UsersOnCourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsersOnCourseOrderByWithAggregationInput> = z.object({
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
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const TagsOnCourseWhereInputSchema: z.ZodType<Prisma.TagsOnCourseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsOnCourseWhereInputSchema),z.lazy(() => TagsOnCourseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnCourseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnCourseWhereInputSchema),z.lazy(() => TagsOnCourseWhereInputSchema).array() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  course: z.union([ z.lazy(() => CourseRelationFilterSchema),z.lazy(() => CourseWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseOrderByWithRelationInputSchema: z.ZodType<Prisma.TagsOnCourseOrderByWithRelationInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional()
}).strict();

export const TagsOnCourseWhereUniqueInputSchema: z.ZodType<Prisma.TagsOnCourseWhereUniqueInput> = z.object({
  courseId_tagId: z.lazy(() => TagsOnCourseCourseIdTagIdCompoundUniqueInputSchema).optional()
}).strict();

export const TagsOnCourseOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagsOnCourseOrderByWithAggregationInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
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
  courseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
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
  parentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseCreateInputSchema: z.ZodType<Prisma.CourseCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateInputSchema: z.ZodType<Prisma.CourseUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUpdateInputSchema: z.ZodType<Prisma.CourseUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateManyInputSchema: z.ZodType<Prisma.CourseCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable()
}).strict();

export const CourseUpdateManyMutationInputSchema: z.ZodType<Prisma.CourseUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseDescriptionCreateInputSchema: z.ZodType<Prisma.CourseDescriptionCreateInput> = z.object({
  label: z.string(),
  content: z.string(),
  course: z.lazy(() => CourseCreateNestedOneWithoutDescriptionsInputSchema).optional()
}).strict();

export const CourseDescriptionUncheckedCreateInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  content: z.string(),
  courseId: z.number().int().optional().nullable()
}).strict();

export const CourseDescriptionUpdateInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneWithoutDescriptionsNestedInputSchema).optional()
}).strict();

export const CourseDescriptionUncheckedUpdateInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CourseDescriptionCreateManyInputSchema: z.ZodType<Prisma.CourseDescriptionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  content: z.string(),
  courseId: z.number().int().optional().nullable()
}).strict();

export const CourseDescriptionUpdateManyMutationInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  grade: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutUserInputSchema).optional()
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
  grade: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema).optional()
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
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutUserNestedInputSchema).optional()
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
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
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
  grade: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema)
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
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentCreateInputSchema: z.ZodType<Prisma.CommentCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema),
  course: z.lazy(() => CourseCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const CommentUncheckedCreateInputSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  userId: z.number().int(),
  courseId: z.number().int()
}).strict();

export const CommentUpdateInputSchema: z.ZodType<Prisma.CommentUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const CommentUncheckedUpdateInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentCreateManyInputSchema: z.ZodType<Prisma.CommentCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  userId: z.number().int(),
  courseId: z.number().int()
}).strict();

export const CommentUpdateManyMutationInputSchema: z.ZodType<Prisma.CommentUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseCreateInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutCategoriesInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const CategoriesOnCourseUncheckedCreateInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateInput> = z.object({
  courseId: z.number().int(),
  categoryId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const CategoriesOnCourseUpdateInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const CategoriesOnCourseUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseCreateManyInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyInput> = z.object({
  courseId: z.number().int(),
  categoryId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const CategoriesOnCourseUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseCreateInputSchema: z.ZodType<Prisma.UsersOnCourseCreateInput> = z.object({
  course: z.lazy(() => CourseCreateNestedOneWithoutUsersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const UsersOnCourseUncheckedCreateInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateInput> = z.object({
  courseId: z.number().int(),
  userId: z.number().int()
}).strict();

export const UsersOnCourseUpdateInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateInput> = z.object({
  course: z.lazy(() => CourseUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const UsersOnCourseUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseCreateManyInputSchema: z.ZodType<Prisma.UsersOnCourseCreateManyInput> = z.object({
  courseId: z.number().int(),
  userId: z.number().int()
}).strict();

export const UsersOnCourseUpdateManyMutationInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateManyMutationInput> = z.object({
}).strict();

export const UsersOnCourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseCreateInputSchema: z.ZodType<Prisma.TagsOnCourseCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const TagsOnCourseUncheckedCreateInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedCreateInput> = z.object({
  courseId: z.number().int(),
  tagId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const TagsOnCourseUpdateInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const TagsOnCourseUncheckedUpdateInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseCreateManyInputSchema: z.ZodType<Prisma.TagsOnCourseCreateManyInput> = z.object({
  courseId: z.number().int(),
  tagId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const TagsOnCourseUpdateManyMutationInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
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

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
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

export const EnumLanguageNullableFilterSchema: z.ZodType<Prisma.EnumLanguageNullableFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional().nullable(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumCourseTypeNullableFilterSchema: z.ZodType<Prisma.EnumCourseTypeNullableFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional().nullable(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeNullableFilterSchema) ]).optional().nullable(),
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

export const CommentListRelationFilterSchema: z.ZodType<Prisma.CommentListRelationFilter> = z.object({
  every: z.lazy(() => CommentWhereInputSchema).optional(),
  some: z.lazy(() => CommentWhereInputSchema).optional(),
  none: z.lazy(() => CommentWhereInputSchema).optional()
}).strict();

export const CourseDescriptionListRelationFilterSchema: z.ZodType<Prisma.CourseDescriptionListRelationFilter> = z.object({
  every: z.lazy(() => CourseDescriptionWhereInputSchema).optional(),
  some: z.lazy(() => CourseDescriptionWhereInputSchema).optional(),
  none: z.lazy(() => CourseDescriptionWhereInputSchema).optional()
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

export const CommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CommentOrderByRelationAggregateInput> = z.object({
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
  imageCover: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
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
  imageCover: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
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
  imageCover: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  videoCover: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
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

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
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

export const EnumLanguageNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLanguageNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional().nullable(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLanguageNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLanguageNullableFilterSchema).optional()
}).strict();

export const EnumCourseTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCourseTypeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional().nullable(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCourseTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCourseTypeNullableFilterSchema).optional()
}).strict();

export const CourseRelationFilterSchema: z.ZodType<Prisma.CourseRelationFilter> = z.object({
  is: z.lazy(() => CourseWhereInputSchema).optional(),
  isNot: z.lazy(() => CourseWhereInputSchema).optional()
}).strict();

export const CourseDescriptionCountOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionMinOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourseDescriptionSumOrderByAggregateInputSchema: z.ZodType<Prisma.CourseDescriptionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
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
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
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
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
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
  grade: z.lazy(() => SortOrderSchema).optional(),
  degree: z.lazy(() => SortOrderSchema).optional(),
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

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const CommentCountOrderByAggregateInputSchema: z.ZodType<Prisma.CommentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CommentAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CommentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommentMinOrderByAggregateInputSchema: z.ZodType<Prisma.CommentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommentSumOrderByAggregateInputSchema: z.ZodType<Prisma.CommentSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseCourseIdCategoryIdCompoundUniqueInputSchema: z.ZodType<Prisma.CategoriesOnCourseCourseIdCategoryIdCompoundUniqueInput> = z.object({
  courseId: z.number(),
  categoryId: z.number()
}).strict();

export const CategoriesOnCourseCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseCountOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseAvgOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseMaxOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesOnCourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnCourseMinOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional()
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
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseAvgOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseMaxOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnCourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnCourseMinOrderByAggregateInput> = z.object({
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
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseAvgOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseMaxOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnCourseMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnCourseMinOrderByAggregateInput> = z.object({
  courseId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional()
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

export const CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
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

export const CommentCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CommentCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutCourseInputSchema),z.lazy(() => CommentCreateWithoutCourseInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CourseDescriptionCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseDescriptionCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
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

export const CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema).array(),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnCourseCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema).array() ]).optional(),
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

export const CommentUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutCourseInputSchema),z.lazy(() => CommentCreateWithoutCourseInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema).array(),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CourseDescriptionCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourseDescriptionCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourseDescriptionWhereUniqueInputSchema),z.lazy(() => CourseDescriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableEnumLanguageFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumLanguageFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LanguageSchema).optional().nullable()
}).strict();

export const NullableEnumCourseTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumCourseTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CourseTypeSchema).optional().nullable()
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

export const CommentUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CommentUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutCourseInputSchema),z.lazy(() => CommentCreateWithoutCourseInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
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

export const CommentUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutCourseInputSchema),z.lazy(() => CommentCreateWithoutCourseInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema),z.lazy(() => CommentCreateOrConnectWithoutCourseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutCourseInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutCourseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutCourseInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutCourseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
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

export const CourseCreateNestedOneWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutDescriptionsInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDescriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutDescriptionsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const CourseUpdateOneWithoutDescriptionsNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneWithoutDescriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDescriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutDescriptionsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutDescriptionsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutDescriptionsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutDescriptionsInputSchema) ]).optional(),
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

export const UserCreatewishlistInputSchema: z.ZodType<Prisma.UserCreatewishlistInput> = z.object({
  set: z.number().array()
}).strict();

export const UsersOnCourseCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CommentCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnCourseUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnCourseCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnCourseCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnCourseWhereUniqueInputSchema),z.lazy(() => UsersOnCourseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CommentUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
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

export const CommentUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CommentUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
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

export const CommentUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CourseCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.CourseCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutCommentsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export const CourseUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourseCreateWithoutCommentsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourseUpdateWithoutCommentsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
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

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLanguageNullableFilterSchema: z.ZodType<Prisma.NestedEnumLanguageNullableFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional().nullable(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumCourseTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumCourseTypeNullableFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional().nullable(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
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

export const NestedEnumLanguageNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLanguageNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LanguageSchema).optional().nullable(),
  in: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => LanguageSchema).array(),z.lazy(() => LanguageSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NestedEnumLanguageNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLanguageNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLanguageNullableFilterSchema).optional()
}).strict();

export const NestedEnumCourseTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCourseTypeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CourseTypeSchema).optional().nullable(),
  in: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  notIn: z.union([ z.lazy(() => CourseTypeSchema).array(),z.lazy(() => CourseTypeSchema) ]).optional().nullable(),
  not: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NestedEnumCourseTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCourseTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCourseTypeNullableFilterSchema).optional()
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

export const CategoryCreateWithoutChildrenInputSchema: z.ZodType<Prisma.CategoryCreateWithoutChildrenInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  cover: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
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
  courseId: z.number().int(),
  assignedAt: z.coerce.date().optional()
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
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
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
  tagId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const TagsOnCourseCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.TagsOnCourseCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => TagsOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsOnCourseCreateWithoutCourseInputSchema),z.lazy(() => TagsOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const TagsOnCourseCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.TagsOnCourseCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsOnCourseCreateManyCourseInputSchema),z.lazy(() => TagsOnCourseCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CategoriesOnCourseCreateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateWithoutCourseInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedCreateWithoutCourseInput> = z.object({
  categoryId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const CategoriesOnCourseCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => CategoriesOnCourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoriesOnCourseCreateWithoutCourseInputSchema),z.lazy(() => CategoriesOnCourseUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CategoriesOnCourseCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoriesOnCourseCreateManyCourseInputSchema),z.lazy(() => CategoriesOnCourseCreateManyCourseInputSchema).array() ]),
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
  user: z.lazy(() => UserCreateNestedOneWithoutCoursesInputSchema)
}).strict();

export const UsersOnCourseUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateWithoutCourseInput> = z.object({
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

export const CommentCreateWithoutCourseInputSchema: z.ZodType<Prisma.CommentCreateWithoutCourseInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const CommentUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  userId: z.number().int()
}).strict();

export const CommentCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommentCreateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CommentCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.CommentCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommentCreateManyCourseInputSchema),z.lazy(() => CommentCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CourseDescriptionCreateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateWithoutCourseInput> = z.object({
  label: z.string(),
  content: z.string()
}).strict();

export const CourseDescriptionUncheckedCreateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  content: z.string()
}).strict();

export const CourseDescriptionCreateOrConnectWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => CourseDescriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseDescriptionCreateWithoutCourseInputSchema),z.lazy(() => CourseDescriptionUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CourseDescriptionCreateManyCourseInputEnvelopeSchema: z.ZodType<Prisma.CourseDescriptionCreateManyCourseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CourseDescriptionCreateManyCourseInputSchema),z.lazy(() => CourseDescriptionCreateManyCourseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
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
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
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

export const CommentUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommentUpdateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutCourseInputSchema) ]),
  create: z.union([ z.lazy(() => CommentCreateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedCreateWithoutCourseInputSchema) ]),
}).strict();

export const CommentUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateWithoutCourseInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutCourseInputSchema) ]),
}).strict();

export const CommentUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => CommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateManyMutationInputSchema),z.lazy(() => CommentUncheckedUpdateManyWithoutCommentsInputSchema) ]),
}).strict();

export const CommentScalarWhereInputSchema: z.ZodType<Prisma.CommentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  courseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
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
  data: z.union([ z.lazy(() => CourseDescriptionUpdateManyMutationInputSchema),z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutDescriptionsInputSchema) ]),
}).strict();

export const CourseDescriptionScalarWhereInputSchema: z.ZodType<Prisma.CourseDescriptionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourseDescriptionScalarWhereInputSchema),z.lazy(() => CourseDescriptionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourseDescriptionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourseDescriptionScalarWhereInputSchema),z.lazy(() => CourseDescriptionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  courseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const CourseCreateWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseCreateWithoutDescriptionsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutDescriptionsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutDescriptionsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDescriptionsInputSchema) ]),
}).strict();

export const CourseUpsertWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseUpsertWithoutDescriptionsInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutDescriptionsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutDescriptionsInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutDescriptionsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutDescriptionsInputSchema) ]),
}).strict();

export const CourseUpdateWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseUpdateWithoutDescriptionsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutDescriptionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutLessonsInputSchema: z.ZodType<Prisma.CourseCreateWithoutLessonsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutLessonsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutLessonsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
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
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutLessonsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutLessonsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const TagsOnCourseCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseCreateWithoutTagInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutTagsInputSchema)
}).strict();

export const TagsOnCourseUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedCreateWithoutTagInput> = z.object({
  courseId: z.number().int(),
  assignedAt: z.coerce.date().optional()
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
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutDemosInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutDemosInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
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
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutDemosInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutDemosInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseCreateWithoutPrerequisitesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutPrerequisitesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
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
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutPrerequisitesInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutPrerequisitesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseCreateWithoutFeaturesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutFeaturesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
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
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutFeaturesInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutFeaturesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const UsersOnCourseCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseCreateWithoutUserInput> = z.object({
  course: z.lazy(() => CourseCreateNestedOneWithoutUsersInputSchema)
}).strict();

export const UsersOnCourseUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedCreateWithoutUserInput> = z.object({
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

export const CommentCreateWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  course: z.lazy(() => CourseCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const CommentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  courseId: z.number().int()
}).strict();

export const CommentCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CommentCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CommentCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommentCreateManyUserInputSchema),z.lazy(() => CommentCreateManyUserInputSchema).array() ]),
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

export const CommentUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommentUpdateWithoutUserInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CommentUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateWithoutUserInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const CommentUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateManyMutationInputSchema),z.lazy(() => CommentUncheckedUpdateManyWithoutCommentsInputSchema) ]),
}).strict();

export const UserCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateWithoutCommentsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  biography: z.string().optional().nullable(),
  grade: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema),
  courses: z.lazy(() => UsersOnCourseCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentsInput> = z.object({
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
  grade: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema),
  courses: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const CourseCreateWithoutCommentsInputSchema: z.ZodType<Prisma.CourseCreateWithoutCommentsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutCommentsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.CourseCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourseCreateWithoutCommentsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const UserUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const UserUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCommentsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  slug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  biography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCommentsInput> = z.object({
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
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  courses: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CourseUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.CourseUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => CourseUpdateWithoutCommentsInputSchema),z.lazy(() => CourseUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => CourseCreateWithoutCommentsInputSchema),z.lazy(() => CourseUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const CourseUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.CourseUpdateWithoutCommentsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutCommentsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseCreateWithoutCategoriesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
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
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
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
  parentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  children: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutUsersInputSchema: z.ZodType<Prisma.CourseCreateWithoutUsersInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutUsersInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
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
  grade: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutUserInputSchema).optional()
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
  grade: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserCreatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.lazy(() => GenderTypeSchema),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema).optional()
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
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
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
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutUserNestedInputSchema).optional()
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
  grade: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => UserUpdatewishlistInputSchema),z.number().int().array() ]).optional(),
  gender: z.union([ z.lazy(() => GenderTypeSchema),z.lazy(() => EnumGenderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CourseCreateWithoutTagsInputSchema: z.ZodType<Prisma.CourseCreateWithoutTagsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionCreateNestedManyWithoutCourseInputSchema).optional()
}).strict();

export const CourseUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.CourseUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
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
  imageCover: z.string(),
  publisher: z.string().optional().nullable(),
  videoCover: z.string().optional().nullable(),
  size: z.string().optional().nullable(),
  language: z.lazy(() => LanguageSchema).optional().nullable(),
  type: z.lazy(() => CourseTypeSchema).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedCreateNestedManyWithoutCourseInputSchema).optional()
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
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUpdateManyWithoutCourseNestedInputSchema).optional()
}).strict();

export const CourseUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.CourseUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publishedAt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  imageCover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoCover: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  size: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.lazy(() => LanguageSchema),z.lazy(() => NullableEnumLanguageFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CourseTypeSchema),z.lazy(() => NullableEnumCourseTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prerequisites: z.lazy(() => PrerequisiteUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  categories: z.lazy(() => CategoriesOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  users: z.lazy(() => UsersOnCourseUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  demos: z.lazy(() => DemoUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  features: z.lazy(() => CourseFeatureUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  descriptions: z.lazy(() => CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInputSchema).optional()
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
  description: z.string().optional().nullable()
}).strict();

export const CategoriesOnCourseCreateManyCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyCategoryInput> = z.object({
  courseId: z.number().int(),
  assignedAt: z.coerce.date().optional()
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
}).strict();

export const CategoriesOnCourseUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateWithoutCategoryInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoriesOnCourseUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateWithoutCategoryInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyWithoutCoursesInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyWithoutCoursesInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrerequisiteCreateManyCourseInputSchema: z.ZodType<Prisma.PrerequisiteCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  link: z.string().optional().nullable(),
  type: z.string(),
  position: z.number().int().optional().nullable()
}).strict();

export const TagsOnCourseCreateManyCourseInputSchema: z.ZodType<Prisma.TagsOnCourseCreateManyCourseInput> = z.object({
  tagId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const CategoriesOnCourseCreateManyCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseCreateManyCourseInput> = z.object({
  categoryId: z.number().int(),
  assignedAt: z.coerce.date().optional()
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

export const CommentCreateManyCourseInputSchema: z.ZodType<Prisma.CommentCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  userId: z.number().int()
}).strict();

export const CourseDescriptionCreateManyCourseInputSchema: z.ZodType<Prisma.CourseDescriptionCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  content: z.string()
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
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyWithoutTagsInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyWithoutTagsInput> = z.object({
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUpdateWithoutCourseInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const CategoriesOnCourseUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateWithoutCourseInput> = z.object({
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesOnCourseUncheckedUpdateManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CategoriesOnCourseUncheckedUpdateManyWithoutCategoriesInput> = z.object({
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
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
  user: z.lazy(() => UserUpdateOneRequiredWithoutCoursesNestedInputSchema).optional()
}).strict();

export const UsersOnCourseUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateWithoutCourseInput> = z.object({
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyWithoutUsersInput> = z.object({
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

export const CommentUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CommentUpdateWithoutCourseInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const CommentUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentUncheckedUpdateManyWithoutCommentsInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutCommentsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUpdateWithoutCourseInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUncheckedUpdateWithoutCourseInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourseDescriptionUncheckedUpdateManyWithoutDescriptionsInputSchema: z.ZodType<Prisma.CourseDescriptionUncheckedUpdateManyWithoutDescriptionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseCreateManyTagInputSchema: z.ZodType<Prisma.TagsOnCourseCreateManyTagInput> = z.object({
  courseId: z.number().int(),
  assignedAt: z.coerce.date().optional()
}).strict();

export const TagsOnCourseUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUpdateWithoutTagInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export const TagsOnCourseUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateWithoutTagInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnCourseUncheckedUpdateManyWithoutCoursesInputSchema: z.ZodType<Prisma.TagsOnCourseUncheckedUpdateManyWithoutCoursesInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseCreateManyUserInputSchema: z.ZodType<Prisma.UsersOnCourseCreateManyUserInput> = z.object({
  courseId: z.number().int()
}).strict();

export const CommentCreateManyUserInputSchema: z.ZodType<Prisma.CommentCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  text: z.string(),
  courseId: z.number().int()
}).strict();

export const UsersOnCourseUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUpdateWithoutUserInput> = z.object({
  course: z.lazy(() => CourseUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export const UsersOnCourseUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateWithoutUserInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnCourseUncheckedUpdateManyWithoutCoursesInputSchema: z.ZodType<Prisma.UsersOnCourseUncheckedUpdateManyWithoutCoursesInput> = z.object({
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentUpdateWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const CommentUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
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

export const CommentFindFirstArgsSchema: z.ZodType<Prisma.CommentFindFirstArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CommentScalarFieldEnumSchema.array().optional(),
}).strict()

export const CommentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CommentFindFirstOrThrowArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CommentScalarFieldEnumSchema.array().optional(),
}).strict()

export const CommentFindManyArgsSchema: z.ZodType<Prisma.CommentFindManyArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CommentScalarFieldEnumSchema.array().optional(),
}).strict()

export const CommentAggregateArgsSchema: z.ZodType<Prisma.CommentAggregateArgs> = z.object({
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CommentGroupByArgsSchema: z.ZodType<Prisma.CommentGroupByArgs> = z.object({
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithAggregationInputSchema.array(),CommentOrderByWithAggregationInputSchema ]).optional(),
  by: CommentScalarFieldEnumSchema.array(),
  having: CommentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CommentFindUniqueArgsSchema: z.ZodType<Prisma.CommentFindUniqueArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
}).strict()

export const CommentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CommentFindUniqueOrThrowArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
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

export const CommentCreateArgsSchema: z.ZodType<Prisma.CommentCreateArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  data: z.union([ CommentCreateInputSchema,CommentUncheckedCreateInputSchema ]),
}).strict()

export const CommentUpsertArgsSchema: z.ZodType<Prisma.CommentUpsertArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
  create: z.union([ CommentCreateInputSchema,CommentUncheckedCreateInputSchema ]),
  update: z.union([ CommentUpdateInputSchema,CommentUncheckedUpdateInputSchema ]),
}).strict()

export const CommentCreateManyArgsSchema: z.ZodType<Prisma.CommentCreateManyArgs> = z.object({
  data: z.union([ CommentCreateManyInputSchema,CommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CommentDeleteArgsSchema: z.ZodType<Prisma.CommentDeleteArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
}).strict()

export const CommentUpdateArgsSchema: z.ZodType<Prisma.CommentUpdateArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  data: z.union([ CommentUpdateInputSchema,CommentUncheckedUpdateInputSchema ]),
  where: CommentWhereUniqueInputSchema,
}).strict()

export const CommentUpdateManyArgsSchema: z.ZodType<Prisma.CommentUpdateManyArgs> = z.object({
  data: z.union([ CommentUpdateManyMutationInputSchema,CommentUncheckedUpdateManyInputSchema ]),
  where: CommentWhereInputSchema.optional(),
}).strict()

export const CommentDeleteManyArgsSchema: z.ZodType<Prisma.CommentDeleteManyArgs> = z.object({
  where: CommentWhereInputSchema.optional(),
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