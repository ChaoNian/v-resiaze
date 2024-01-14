import {defineConfig} from 'vite'

export default defineConfig({
    // 库的 构建发布配置build.lib
    build: {
        lib: {
            entry: "src/index.ts", // 入口文件
            name: "useResize" // 这里和hook同名
        },
        // 通过option 透传一些属性
        rollupOptions: {
            external: ["vue"], // 忽略一起打包进库的依赖
            output: {
                // 打包结果
                globals: {
                    // umd 支持模式： amd cmd cjs   全局变量模式
                    useResize: "useResize" // 提供全局变量， 给umd 库使用
                }
            }
        }

    }
})