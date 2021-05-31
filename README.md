## hope-vue-study
学习vue的小项目
>  <a href="https://github.com/java-aodeng">Author：低调小熊猫</a>

## 技术选型
前端技术
Vue
Vuex
Element-ui
Axios
Sass
Quill
Mock


```bash
# 克隆项目
git clone https://github.com/java-aodeng/hope-vue-study

# 进入项目目录
cd hope-vue-study

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:80

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 前端结构

├── build                      // 构建相关  
├── bin                        // 执行脚本
├── mock                       // 模拟数据模块 模拟 Ajax 并返回模拟数据
├── public                     // 公共文件
│   ├── favicon.ico            // favicon图标
│   └── index.html             // html模板
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── layout                 // 布局
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── permission.js          // 权限管理
│   └── settings.js            // 系统配置
├── .editorconfig              // 编码格式
├── .env.development           // 开发环境配置
├── .env.production            // 生产环境配置
├── .env.staging               // 测试环境配置
├── .eslintignore              // 忽略语法检查
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── babel.config.js            // babel.config.js
├── package.json               // package.json
└── vue.config.js              // vue.config.js

## 参考资料
https://segmentfault.com/a/1190000022829660 如何在5天内学会Vue

https://cn.vuejs.org/v2/guide/ Vue.js 语法文档

https://github.com/PanJiaChen/vue-admin-template 官方示例

https://element-plus.org/#/zh-CN ui

https://el-admin.vip/guide/ el-admin模板

https://gitee.com/y_project/RuoYi-Vue 若依模板

https://segmentfault.com/a/1190000016730919  在vue-cli项目下简单使用mockjs模拟数据

https://www.vue-treeselect.cn/

等等...