# cloud.neurodata.io

This is the static site generator for [NeuroData](https://neurodata.io)'s cloud docs, which are served at [cloud.neurodata.io](cloud.neurodata.io).  We use [VuePress](https://vuepress.vuejs.org) for the docs generator.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. `npm`
1. `vuepress`

### Installing

Install node/npm ([download]((https://nodejs.org/en/)))

Install dependencies (from within the project directory)

```bash
npm i
```

Run the site locally @ localhost:8080

```bash
npm run docs:dev
```

### Notes

Each page on the site is a folder under `docs/`.  The index.html content is extracted from a file called `README.md` within each folder.  Follow the guide on [vuepress.vue.js.org](https://vuepress.vuejs.org) for any advanced usage.

## Deployment

Hosted on [Netflify](https://www.netlify.com/).

Setup project from GitHub source using:

- Build command: `npm run docs:build`
- Publish directory `docs/.vuepress/dist`

On AWS Route53 we have a CNAME for `cloud.neurodata.io` to point to netflify DNS.
