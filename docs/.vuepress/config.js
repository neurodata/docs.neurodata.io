module.exports = {
    title: 'NeuroData Cloud',
    description: 'Docs for Image Volume Access and Analysis',

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
            },],

        lastUpdated: 'Last Updated', // string | boolean

        //sidebar stuff
        sidebar: [
            {
                title: 'Services',
                collapsable: false,
                children: [
                    'ndboss.md',
                    'ndweb.md',
                ]
            },

            {
                title: 'Access',
                collapsable: false,
                children: [
                    ['download.md', 'Download'],
                    ['visualization.md', 'Visualization'],
                ]
            },

            {
                title: 'Analyze',
                collapsable: false,
                children: [
                    ['analyze.md', 'Analyze'],
                ]
            },

            {
                title: 'Annotate',
                collapsable: false,
                children: [
                    ['annotate_fiji.md', 'Manually annotate in Fiji'],
                    ['programmatic-neuroglancer-annotations.md', 'Programmatically annotate in R'],
                    ['neuroglancer-pt-annotations.md', 'Manually annotate in Neuroglancer'],
                ]
            },

            {
                title: 'Storage',
                collapsable: false,
                children: [

                    ['ingest.md', 'Boss Ingest'],
                    ['boss-to-precompute.md', 'Precomputed Neuroglancer Format'],
                ]
            },

            {
                title: 'About',
                collapsable: false,
                children: [
                    'faq.md',
                ]
            },],

        sidebarDepth: 2,
        // displayAllHeaders: true, //displays ALL headers for all pages in sidebar
        // activeHeaderLinks: false, // Default: true, changes the selected header as your scroll through the page
        // sidebar: 'auto', // only header links for the current page

        //edit in github stuff
        repo: 'neurodata/cloud.neurodata.io',
        editLinks: true, //adds link to bottom to edit this page
        editLinkText: 'Help us improve this page!',
        repoLabel: 'Edit on GitHub',
        docsDir: 'docs', // if docs are not at the root of the repo
    },
}