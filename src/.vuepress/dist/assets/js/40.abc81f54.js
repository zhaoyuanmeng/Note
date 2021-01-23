(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{481:function(t,s,a){"use strict";a.r(s);var r=a(57),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_7-axios源码解析以及实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-axios源码解析以及实现"}},[t._v("#")]),t._v(" 7.Axios源码解析以及实现")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意此处：等待重构")])]),t._v(" "),a("p",[a("strong",[t._v("🔥备注："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMLHttpRequest...MDN教程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"第一部分-项目构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一部分-项目构建"}},[t._v("#")]),t._v(" 第一部分：项目构建")]),t._v(" "),a("h3",{attrs:{id:"_1-需要做的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-需要做的"}},[t._v("#")]),t._v(" 1.需要做的")]),t._v(" "),a("ul",[a("li",[t._v("在浏览器端使用XMLHttpRequest对象通讯")]),t._v(" "),a("li",[t._v("支持 Promise API")]),t._v(" "),a("li",[t._v("支持 请求和响应拦截器")]),t._v(" "),a("li",[t._v("支持 请求数据和响应数据的转换")]),t._v(" "),a("li",[t._v("支持 请求的取消")]),t._v(" "),a("li",[t._v("JSON数据自动转换")]),t._v(" "),a("li",[t._v("客户端防止 XSRF")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化项目"}},[t._v("#")]),t._v(" 2.初始化项目")]),t._v(" "),a("ul",[a("li",[t._v("脚手架：git clone https://github.com/alexjoverm/typescript-library-starter.git")]),t._v(" "),a("li",[t._v("这个脚手架集成的优秀工具\n"),a("ul",[a("li",[t._v("使用 RollupJS 帮助我们打包")]),t._v(" "),a("li",[t._v("使用 Prettier 和 TSLint 帮助我们格式化代码以及保证代码风格一致性")]),t._v(" "),a("li",[t._v("使用 TypeDoc 帮助我们自动生成文档并部署到GitHub pages")]),t._v(" "),a("li",[t._v("使用 Jest 帮助我们做单元测试")]),t._v(" "),a("li",[t._v("使用 Commitizen 帮助我们生成规范化的提交注释")]),t._v(" "),a("li",[t._v("使用 Semantic release 帮助我们管理版本和发布")]),t._v(" "),a("li",[t._v("使用 husky 帮助我们更简单的使用 Git Hooks")]),t._v(" "),a("li",[t._v("使用 Conventional changelog 帮助我们通过代码提交信息 自动生成 change log")])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_3-创建入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建入口文件"}},[t._v("#")]),t._v(" 3.创建入口文件")]),t._v(" "),a("p",[a("strong",[t._v("我们在src文件夹下，建立 index.ts 文件作为入口文件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AxiosRequestConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./types/index'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AxiosRequestConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" axios\n")])])]),a("p",[a("strong",[t._v("再定义一个 types文件夹 管理我们的类型")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个文件放着公共接口类型（src/types/index.ts）")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" type Method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'head'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HEAD'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'options'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'put'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PATCH'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'patch'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AxiosRequestConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Method\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any\n    param"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("本着模块化的思想，我们抽离出来 xhr.ts 文件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AxiosRequestConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./types/index'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xhr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AxiosRequestConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"第二部分-axios基础功能实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二部分-axios基础功能实现"}},[t._v("#")]),t._v(" 第二部分：axios基础功能实现")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"📚参考列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📚参考列表"}},[t._v("#")]),t._v(" 📚参考列表")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://coding.imooc.com/class/330.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("慕课网课程...基于TypeScript从零重构axios"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);