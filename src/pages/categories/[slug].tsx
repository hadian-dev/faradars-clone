import { GetServerSidePropsContext } from 'next'
import { createServerSideHelpers } from '@trpc/react-query/server'
import SuperJSON from 'superjson'
import CategoryView from '@/views/category'
import { appRouter } from '@/server/routers/app.routes'

const CategoryPage = () => {
  return <CategoryView />
}

export default CategoryPage

export const getServerSideProps = async ({
  params,
  req,
  res,
}: GetServerSidePropsContext) => {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { req: req as any, res: res as any },
    transformer: SuperJSON,
  })

  if (!params || !params.slug) return { props: {} }

  await helpers.getCategory.prefetch({ slug: String(params.slug) })

  return { props: { slug: String(params.slug) } }
}
