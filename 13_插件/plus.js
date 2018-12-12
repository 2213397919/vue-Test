(function (window) {
    const MyPlugin={};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            alert(11111);
        }

        // 2. 添加全局资源
        Vue.directive('upper-text', {
            bind (el, binding) {
                el.textContent=binding.value.toUpperCase();
            }
        })
        // 4. 添加实例方法
        Vue.prototype.$l = function (methodOptions) {
            alert('vm.$l()执行啦');
        }
    }
    window.MyPlugin=MyPlugin;
})(window)