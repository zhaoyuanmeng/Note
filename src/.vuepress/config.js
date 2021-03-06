let VuepressEs = require('./vuepressEs/index.js')

// 初始化定义 & 启动报警提示
let vuepressEs = new VuepressEs({
    // 1.导航栏文案（因为导航栏文件夹不能是中文的）
    navDataConfig: [
        ['1.note', '前端体系'],
        ['2.quickcheck', '速查'],
        ['3.other', '其他']
    ]
})

module.exports = {
    "title": "Notes",
    "description": "不断完善的前端知识体系",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ]
    ],
    "themeConfig": {
        "repo": "https://github.com/zhaoyuanmeng/zhaoyuanmeng",
        "nav": vuepressEs.getNavData(),
        "sidebar": vuepressEs.getSidebarData()
    },
    "serviceWorker": true,
    "markdown": {
        "lineNumbers": false
    },
    "plugins": [
        [
            "vuepress-plugin-zooming",
            {
                "selector": ".theme-default-content img",
                "delay": 500,
                "options": {
                    "bgColor": "black",
                    "zIndex": 10000
                }
            }
        ],
        [
            "@vuepress/pwa",
            {
                "serviceWorker": true,
                "updatePopup": {
                    "/": {
                        "message": "发现新内容可用",
                        "buttonText": "刷新"
                    }
                }
            }
        ]
    ]
}