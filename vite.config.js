import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

const env = loadEnv('', process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: env.VITE_APP_PORT || 5174,
		cors: true,
		proxy: {
			'/v1': {
				target: env.VITE_BACKEND_BASE_URL,
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, '/v1'),
			},
		},
	},
});
