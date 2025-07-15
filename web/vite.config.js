import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const isProduction = mode === 'production'
  
  return {
    plugins: [react()],
    server: {
      port: 2000,
    },
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    build: {
      outDir: 'dist',
      minify: isBuild && isProduction ? 'terser' : false,
      sourcemap: !isProduction,
      ...(isBuild && isProduction && {
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom']
            }
          }
        }
      })
    },
    define: {
      __DEV__: !isProduction,
    }
  }
})
