// middleware/auth.ts
import { useCookie } from '#app';
import { navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware(() => {
    const tokenCookie = useCookie('auth_token');

    // Jika tidak ada token, arahkan ke halaman login
    if (!tokenCookie.value) {
        return navigateTo('/auth/cover-login');
    }
});
