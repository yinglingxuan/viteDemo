import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
const manualChunksList = ['table', 'icons-vue', 'ant-design-vue', 'table', 'vue-router', 'vue', 'lodash', 'animate.css', 'dayjs']
import px2vp from 'postcss-px2vp'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        // px2vp({
        //   viewportWidth: 750,
        //   unitPrecision: 3,
        //   propList: ['*'],
        //   viewportUnit: 'vw',
        //   fontViewportUnit: 'vw',
        //   selectorBlackList: [],
        //   minPixelValue: 1,
        //   mediaQuery: false,
        //   replace: false,
        //   exclude: [/node_modules/],
        //   landscape: false,
        //   landscapeUnit: 'vw',
        //   landscapeWidth: 815
        // })
      ]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    }),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style`
          }
        }
      ]
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true
        })
      ]
    }),
    legacy()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return manualChunksList.find(chunksName => id.includes(chunksName)) ?? 'vendor'
          }
        }
      }
    },
    target: ['es2020']
  }
})
