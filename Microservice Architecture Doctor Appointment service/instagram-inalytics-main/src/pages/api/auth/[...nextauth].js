import NextAuth from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import User from "@/model/instagramModel";
import dbConnect from "@/utils/dbconnect";
import clientPromise from "@/utils/mongodb";

export const authOption = {
  providers: [
    InstagramProvider({
      clientId: "1175082610605703",
      clientSecret: "9aa6ff4793844085505fc4338b09c7f2",
      authorization: {
        params: {
          redirect_uri: "https://plugged.app/auth/signin",
          scopes: "user_profile user_media",
          authorizationUrl: "https://www.instagram.com/oauth/authorize",
          tokenUrl: "https://api.instagram.com/oauth/access_token",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "instagram") {
        token.instagramAccessToken = account.access_token;
        token.instagramRefreshToken = account.refresh_token;
        token.instagramAccessTokenExpires =
          Date.now() + account.expires_in * 1000;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.instagramAccessToken = token.instagramAccessToken;
      session.instagramRefreshToken = token.instagramRefreshToken;
      session.instagramAccessTokenExpires = token.instagramAccessTokenExpires;
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOption);
