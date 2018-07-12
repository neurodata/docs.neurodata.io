# docs.neurodata.io

This is the static site generator for [NeuroData](https://neurodata.io) docs, which are served at [docs.neurodata.io](docs.neurodata.io).  We use [VuePress](https://vuepress.vuejs.org) for the docs generator.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```bash
node / npm
vuepress
```

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

Each page on the site is a folder under `docs/`.  The content is extracted from a file called `README.md` within each folder.  Follow the guide on [vuepress.vue.js.org](https://vuepress.vuejs.org) for any advanced usage.

## Deployment

```
...
```
