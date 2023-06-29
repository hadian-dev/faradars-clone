import { authOptions } from '@/lib/auth'
import connectDB from '@/server/utils/connect-db'
import NextAuth from 'next-auth'

connectDB()

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
