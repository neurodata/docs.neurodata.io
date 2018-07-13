module.exports = {
    title: 'NeuroData Docs',
    description: 'Documentation for NeuroData',

    // markdown: {
    //     lineNumbers: true
    // },

    ga: 'UA-69121088-1', //google analytics

    evergreen: true, //target auto-updating browsers (faster builds and load times)


    head: [
        ['link', { rel: 'icon', href: '/icons/android-icon-192x192.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-icon-152x152.png' }],
    ],

    themeConfig:
    {
        nav: [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'NeuroData',
            link: 'https://neurodata.io'
        }, ],

        lastUpdated: 'Last Updated', // string | boolean

        //sidebar stuff
        sidebar: [
        {
            title: 'Services',
            collapsable: false,
            children: [
                'ndboss.md',
                'ndpull.md',
                'ndpush.md',
                'ndviz.md',
                'ndweb.md',
            ]
        },
        {
            title: 'Libraries',
            collapsable: false,
            children: [
                'flashx.md',
                'knorR.md',
                'lol.md',
                'meda.md',
                'mgc.md',
                'ndmg.md',
                'ndreg.md',
                'oopsi.md',
                'rf.md',
            ]
        },
        {
            title: 'About',
            collapsable: false,
            children: [
                'faq.md',
            ]
        },
        {
            title: 'Guides',
            collapsable: false,
            children: [
                ['access.md', 'Data Access']
            ]
        }, ],

        sidebarDepth: 2,
        // displayAllHeaders: true, //displays ALL headers for all pages in sidebar
        // activeHeaderLinks: false, // Default: true, changes the selected header as your scroll through the page
        // sidebar: 'auto', // only header links for the current page

        //edit in github stuff
        repo: 'neurodata/docs.neurodata.io',
        editLinks: true, //adds link to bottom to edit this page
        editLinkText: 'Help us improve this page!',
        repoLabel: 'Edit on GitHub',
        docsDir: 'docs', // if docs are not at the root of the repo
    },
}