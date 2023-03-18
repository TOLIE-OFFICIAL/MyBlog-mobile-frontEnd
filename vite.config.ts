import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  WindiCSS(),
  Components({
    dts: "src/typings/components.d.ts",
    resolvers: [VantResolver()],
  }),
  AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
    ],
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    // 自动导入 Vue-router,pinia 相关函数
    imports: ['vue', 'vue-router', "pinia"],
    dts: "src/typings/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
    // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    resolvers: [
      // ElementPlusResolver(),

      // // 自动导入图标组件
      // IconsResolver({
      //   prefix: 'Icon',
      // }),
    ],
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})