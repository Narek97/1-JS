import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "asdcvbtjhm",
  },
});

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: "GOOGLE_CLIENT_ID",
//       clientSecret: "GOOGLE_CLIENT_SECRET",
//       authorizationUrl:
//         "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
//     }),
//   ],
//   jwt: {
//     encryption: true,
//   },
//   secret: "secret token",
//   //Callback here
//   callbacks: {
//     async jwt(token, account) {
//       if (account?.accessToken) {
//         token.accessToken = account.accessToken;
//       }
//       return token;
//     },
//     redirect: async (url, _baseUrl) => {
//       if (url === "/user") {
//         return Promise.resolve("/");
//       }
//       return Promise.resolve("/");
//     },
//   },
// });
