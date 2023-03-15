import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicPath: '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vue App'
      args[0].template = './public/index.html'
      args[0].filename = 'index.html'
      args[0].chunksSortMode = 'manual'
      args[0].chunks = ['chunk-vendors', 'chunk-common', 'index']
      args[0].excludeChunks = ['404']
      return args
    })
    config.plugin('copy').tap(args => {
      args[0][0].ignore.push('404.html')
      return args
    })
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      404: './src/views/Error404.vue'
    },
    output: {
      filename: '[name].[hash].js'
    }
  }
})
