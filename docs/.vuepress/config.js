module.exports = {
    title: 'NeuroData Docs',
    description: 'Documentation for NeuroData',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'NeuroData', link: 'https://neurodata.io' },
        ],
        sidebar: [
            '/',
            'meda.md',
            'ndpull.md'
        ],
        sidebarDepth: 2,
        // displayAllHeaders: true,
        // activeHeaderLinks: false, // Default: true
        // sidebar: 'auto'
        repo: 'neurodata/docs.neurodata.io',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: 'Help us improve this page!'
    }
}