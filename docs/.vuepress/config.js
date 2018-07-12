module.exports = {
    title: 'NeuroData Docs',
    description: 'Documentation for NeuroData',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'NeuroData', link: 'https://neurodata.io' },
        ],

        //sidebar stuff
        sidebar: [
            {
                title: 'Services',
                collapsable: false,
                children: [
                    ['/services/', 'Services'],
                    '/services/ndpull.md'
                ]
            },
            {
                title: 'Libraries',
                collapsable: false,
                children: [
                    '/libraries/meda.md'
                ]
            }
        ],
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

        //google analytics
        ga: 'UA-69121088-1',

        evergreen: true, //target auto-updating browsers (faster builds and load times)
    },
}