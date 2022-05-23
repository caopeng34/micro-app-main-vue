# micro-app-main-vue

该应用为基座应用。



引用的公共子模块（submodules\micro-app-common-vue）不可有node_modules文件夹，否则，引用公共子模块中的的代码使用的import Vue from 'vue'不是基座应用的而是公共子模块的。
