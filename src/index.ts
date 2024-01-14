// 实现 插件实现   自定义指令 + hook 同时可以做到监听元素的宽高变化

/*
监听API
interSectionObserver 主要监听元素是否在视口内
MutationObserver 主要监听子集的变化 还有属性的变化 以及 增删改查
ResizeObserver 主要监听元素宽高变化
*/ 

import type{App} from 'vue'

// hook 
function useResize (el:HTMLElement, callback:Function) {
    let resize = new ResizeObserver((entries) => {
        callback(entries[0].contentRect)
    })
    resize.observe(el)
}


// 自定义指令

/**
 * let app = createApp()
    // vue 插件用法
    app.use(route).use(xxx)

    这里的 install  给 上面代码u  se使用
 */


const install = (app:App) => {
    app.directive('resize', {
        mounted(el, binding) {
            useResize(el, binding.value)
        }
    })
}

useResize.install = install

export default useResize
