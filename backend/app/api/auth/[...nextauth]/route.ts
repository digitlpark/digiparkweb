import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultSession["user"] & { id?: string };
  }
}

const handler = NextAuth({
  providers: [
    // 🔹 Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // 🔹 Credentials Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        // For Google users, block password login
        if (user.provider !== "credentials") {
          throw new Error("Please log in with Google");
        }

        const isValid = await user.comparePassword(credentials.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    // When signing in with Google
    async signIn({ user, account }) {
      await connectDB();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        await User.create({
          email: user.email,
          name: user.name || user.email?.split("@")[0],
          image: user.image,
          provider: account?.provider || "google",
          password: null, // Google users have no password
        });
      }

      return true;
    },

    // Attach DB user id to JWT
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await User.findOne({ email: user.email });
        if (dbUser) {
          token.id = dbUser._id.toString();
        }
      }
      return token;
    },

    // Expose id in session
    async session({ session, token }) {
      if (token?.id && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login", // use your custom login page
  },
});

export { handler as GET, handler as POST };

connectDB();
