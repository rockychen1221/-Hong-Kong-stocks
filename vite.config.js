import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

console.log(path.resolve(__dirname, './src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  "resolve.alias": {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  hostname: '127.0.0.1',
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 反向代理
  server: {
    proxy: {
      '/fm': {
        target: 'https://www.xinguyufu.cn',
        changeOrigin: true,
        secure: false,
        ws: true,
        //rewrite: path => path.replace(/^\/fm/, '')
      }
    },
  },
  build: {
    // 打包输出地址
    outDir: 'docs',
  },
  // 静态资源服务
  base: '/-Hong-Kong-stocks/'
})
