# :tada: unplugin-index-extension

English | [简体中文](./README-zh.md)

Have you ever been troubled by：

```diff
+ import JsChild from './Component'
+ import JsChildNoExt from './Component/index'
+ import JSChildDirectly from './Component/index.js'

- import VueChild from './Component'
- import SvelteChild from './Component/index'
```

This plugin grants the ability to support more file extensions！

## :memo: Install

For Vite:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import IndexExt from 'unplugin-index-extension/vite'
// import IndexExt from 'unplugin-index-extension/esbuild'
// import IndexExt from 'unplugin-index-extension/rollup'
// import IndexExt from 'unplugin-index-extension/webpack'

export default defineConfig({
  plugins: [
    vue(),
    IndexExt(),
  ],
})
```

Also support `esbuild, rollup, webpack`, install in the same way.

> First check `.vue`, then check `.svelte`, and finally proceed with the default behavior.

## License

[MIT](./LICENSE) :heart:
