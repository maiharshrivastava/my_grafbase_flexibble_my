import NextAuth from "next-auth/next";
import { AuthOptions } from "@/lib/session";
import { auth } from "@grafbase/sdk";
const handler = NextAuth(AuthOptions);
export {handler as GET,handler as POST};