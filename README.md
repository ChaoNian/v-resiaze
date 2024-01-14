vue3 学习
# 需求
实现一个函数同时支持 hook 和 自定义指令 去监听dom 宽高的变化




5w3h 分析法 
why、what、who、when、where
how 工具方法规划、howmuch 需要哪些资源，需要多少、 how do you feel 结果预测 

1. 如何监听dom宽高变化
2. 如何 vite 打包库
3. 如何发布npm


# 工程创建
## 步骤
1. 创建文件目录 src/index.ts
2. 生成package.json: npm init 
3. 生成ts配置文件 tsconfig.json：tsc --init
4. 创建vite配置文件  vite.config.ts
5. 创建声明文件  index.d.ts

以上步骤完成工程创建

# 依赖
vue: npm i vue -D  因为开发的插件事给vue项目使用，没必要安装插件时，再安装vue，按装到开发依赖配置中即可
npm i vite - D
 
# vite 打包配置
1. 配置 vite.config.ts 
2. 在package.json 配置build命令 `"build": "vite build"`
   运行`npm run build` 命令 之后 项目生成dist 文件，有`.mjs` 是es module 模式（文件导入导出写法export、import）、`umd.js` 



# 发布npm
调整 package.json 
`main` require 时 查到的文件， 这里找`dist/v-resize-yuki.umd.js`  umd 是common、node 的规范，都可以使用, 使用`require` 时 找到配置的文件 `dist/v-resize-yuki.umd.js`

配置`"modulke": "dist/v-resize-yuki.mjs"` 当使用这个插件（库）时，用`inport`,`export`的时候m，就会找到 `module` 配置的文件 `dist/v-resize-yuki.mjs`


配置 `"files": ["dist", "index.d.ts"]`:发布到npm 上面的目录， ``

1. npm 账号
查看 npm 用户信息 npm whoami 
登录npm npm login - 邮箱验证登录

登录后 分布npm 库  npm publish  有邮件提示发布成功 后可在npm 网站 搜索 库的名字
注意 直接  npm publish  出现不成功，电脑改用链接手机热点，重新 npm publish ，才难发布成功

