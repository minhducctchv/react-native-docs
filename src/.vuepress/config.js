const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Tài liệu React Native',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Nội dung',
                items: [
                    {
                        text: 'Guide',
                        link: '/content/guide/'
                    },
                    {
                        text: 'Components',
                        link: '/content/component/'
                    },
                    {
                        text: 'APIs',
                        link: '/content/api/'
                    },
                    {
                        text: 'Architecture',
                        link: '/content/architecture/'
                    },

                ]
            },
            {
                text: 'HDSD VuePress',
                link: 'https://minhducctchv.github.io/vuepress-docs/guide/markdown.html'
            }
        ],
        sidebar: {
            '/content/guide/': [
                {
                    title: 'Guide',
                    collapsable: true,
                    children: [
                        '1_the_basic',
                        '2_environment_setup',
                    ]
                }
            ],
            '/content/component/': [
                {
                    title: 'Components',
                    collapsable: true,
                    children: [
                        '',
                    ]
                }
            ],
            '/content/api/': [
                {
                    title: 'APIs',
                    collapsable: true,
                    children: [
                        '',
                    ]
                }
            ],
            '/content/architecture/': [
                {
                    title: 'Architecture',
                    collapsable: true,
                    children: [
                        '',
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
