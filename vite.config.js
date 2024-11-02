import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, 
  },
  resolve: {
    alias: {
      'js-conflux-sdk': 'js-conflux-sdk/dist/js-conflux-sdk.umd.min.js', 
    },
  },
  server: {
    proxy: {
      '/rpc': {
        target: 'https://evm.confluxrpc.com', 
        changeOrigin: true,
      },
    },
  },
})
