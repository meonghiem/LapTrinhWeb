import axios from 'axios';
// import { Session } from '';
import cookies from 'js-cookie';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
// import { type } from 'os';
import qs from 'qs'

interface newSession extends Session{
  acessToken: JWT
}
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {

      try{
        const res = await axios.post('http://localhost:3001/auth/login', qs.stringify({
              email: user.email,
               password: "null"
             }))
             const data = res.data;
            console.log("account: ", account.access_token)
            // console.log(data)
            // localStorage.setItem('token', data.accessToken);
             return true;
      }catch(err){
        // console.log(err.response.data)
        console.log(err)
        return false;
      }
    },

    async jwt({token,  user}){
        const res = await axios.post('http://localhost:3001/auth/login', qs.stringify({
              email: "meonghiem@gmail.com",
               password: "null"
             }))
             const data = res.data;
            // console.log(data)
            // localStorage.setItem('token', data.accessToken);
            token.accessToken = data.accessToken;

            return token;
    },
    
    async session({session, token}){
      session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages:{
    error: '/login'
  },
  session: {
    strategy: 'jwt'
  }
})
