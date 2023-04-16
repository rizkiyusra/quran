import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vue App'
      args[0].template = './public/index.html'
      args[0].filename = '404.html'
      args[0].chunksSortMode = 'manual'
      args[0].chunks = ['chunk-vendors', 'chunk-common', '404']
      args[0].excludeChunks = ['index']
      return args
    })
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      404: './src/views/Error404.vue'
    },
    output: {
      filename: 'js/[name].[hash].js'
    }
  }
})
