import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

export default defineConfig({
    plugins: [vue()],
    base: "./", //打包路径
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), //设置别名
        },
    },
    server: {
        port: 4000, //启动端口
        open: true, //自动打开网页
        proxy: {
            // 选项写法
            // "/api": "http://123.56.85.24:5000", //代理网址
        },
        cors: true,
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "./src/assets/less/global.less";`,
            },
        },
    },
});
