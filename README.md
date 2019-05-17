# A Vue CLI project setup for Classic ASP

This setup outputs one Classis ASP file that can be included in existing ASP projects/files. 

Also suitable for other server-side framework template integration if you wish to do so - just modify the vue.config.js.

Due to likely a bug with Vue CLI ([https://github.com/vuejs/vue-cli/issues/2327](https://github.com/vuejs/vue-cli/issues/2327)), "indexPath" rule is ignored in development mode. Thus I am using the "pages" rule to output a same file for development mode.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npx vue-cli-service build --watch
```

### Compiles and minifies for production
```
npx vue-cli-service build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
