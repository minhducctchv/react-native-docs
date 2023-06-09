const {description} = require('../../package')

module.exports = {
    base: '/react-native-docs/',
    /* thư mục output build, root là docs */
    dest: 'dist',
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

    markdown: {
        lineNumbers: true,
        toc: {includeLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    },

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
                    }

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
                    title: 'Setup Môi Trường',
                    collapsable: true,
                    children: [
                        '2_environment_setup'
                    ]
                },
                {
                    title: 'Cơ bản',
                    collapsable: true,
                    children: [
                        '1_the_basic/1_introduction',
                        '1_the_basic/2_component',
                        '1_the_basic/3_react_fundamental',
                        '1_the_basic/4_handling_text_input',
                        '1_the_basic/5_scrollview',
                        '1_the_basic/6_list_view',
                        '1_the_basic/7_troubleshooting',
                        '1_the_basic/1_the_basic',
                    ]
                }
            ],
            '/content/component/': [
                {
                    title: 'Components',
                    collapsable: true,
                    children: [
                        ''
                    ]
                }
            ],
            '/content/api/': [
                {
                    title: 'APIs',
                    collapsable: true,
                    children: [
                        ''
                    ]
                }
            ],
            '/content/architecture/': [
                {
                    title: 'Architecture',
                    collapsable: true,
                    children: [
                        ''
                    ]
                }
            ]
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom'
    ]
}
