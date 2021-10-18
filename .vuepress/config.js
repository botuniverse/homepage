module.exports = {
    title: 'OneBot',
    description: '一个聊天机器人应用接口标准',
    head: [
        ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'application-name', content: 'OneBot' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'OneBot' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }]
    ],
    theme: 'antdocs',
    themeConfig: {
        smoothScroll: true,
        search: false,
        logo: "/logo.png",
        repo: "https://github.com/botuniverse/homepage",
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '介绍',
                link: '/introduction'
            },
            {
                text: '生态',
                link: '/ecosystem.md'
            },
            {
                text: '论坛',
                link: 'https://github.com/botuniverse/onebot/discussions'
            },
        ]
    }
}
