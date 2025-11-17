import Google from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl + '/';
    }
  },
/*   //Por defecto usa localhost, pero con esto usa la variable AUTH_URL, lo cual habilita iniciar sesion con google desde devtunnels
  trustHost: true, */
});