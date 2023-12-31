export default {
    lang: 'zh-CN',
    title: 'OneBot',
    description: '统一的聊天机器人应用接口标准',

    lastUpdated: true,

    themeConfig: {
        logo: '/logo.png',

        nav: [
            { text: '主页', link: '/' },
            { text: '介绍', link: '/introduction.md' },
            { text: '生态', link: '/ecosystem.md' },
            { text: '交流', link: '/chat.md' },
        ],

        editLink: {
            pattern: 'https://github.com/botuniverse/homepage/edit/main/:path',
            text: '在 GitHub 上编辑此页'
        },
        lastUpdatedText: '上次更新',
        outlineTitle: '本页目录',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/botuniverse/homepage' }
        ],

        footer: {
            message: '以 MIT 许可协议发布',
            copyright: '版权所有 © 2021-2024 OneBot 社区'
        },
    }
}
