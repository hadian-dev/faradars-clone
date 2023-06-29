import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { prisma } from '@/server/utils/connect-db'
import { Adapter } from 'next-auth/adapters'
import { createTransport } from 'nodemailer'
import html from './html'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/login',
    verifyRequest: '/auth/verify',
    error: '/auth/error',
  },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest(params) {
        const { identifier, url, provider } = params
        const transport = createTransport(provider.server)
        const result = await transport.sendMail({
          from: provider.from,
          to: identifier,
          subject: `به فرادرس خوش آمدید`,
          html: html(url),
        })

        const failed = result.rejected.concat(result.pending).filter(Boolean)

        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(', ')}) could not be sent.`)
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: true,
  adapter: PrismaAdapter(prisma) as Adapter,
}
