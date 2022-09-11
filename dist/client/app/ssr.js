// entry for SSR
import { createApp } from './index.js';
import { renderToString } from 'vue/server-renderer';
export async function render(path) {
    const { app, router } = createApp();
    await router.go(path);
    return renderToString(app);
}