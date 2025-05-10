import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDB'

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (account.provider === 'github') {
        await connectDB()

        const userEmail = email || user?.email

        if (!userEmail) {
          console.error('Email is undefined in signIn callback')
          return false
        }

        const currentUser = await User.findOne({ email: userEmail })

        if (!currentUser) {
          const username = userEmail.includes('@')
            ? userEmail.split('@')[0]
            : 'unknown'

          const newUser = await User.create({
            email: userEmail,
            username
          })
          await newUser.save()
        }

        return true
      }
    },
    async session({ session }) {
      if (!session?.user?.email) return session

      const dbUser = await User.findOne({ email: session.user.email })

      if (dbUser) {
        session.user.name = dbUser.username
      } else {
        console.warn(
          'User not found in DB during session callback:',
          session.user.email
        )
        session.user.name = session.user.email?.split('@')[0] || 'unknown'
      }

      return session
    }
  }
})

export { authoptions as GET, authoptions as POST }
