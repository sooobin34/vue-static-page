import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    base: '/vue-static-page/' /* 레포이름으로지정해야함!! */

})
