# :tada: unplugin-index-extension

[English](./README.md) | 简体中文

你是否曾困扰于：

```diff
+ import JsChild from './Component'
+ import JsChildNoExt from './Component/index'
+ import JSChildDirectly from './Component/index.js'

- import VueChild from './Component'
- import SvelteChild from './Component/index'
```

这个插件赐予更多后缀名这样的能力！

## :memo: 安装

以pnpm为例:

```sh
$ pnpm i -D unplugin-index-extension
```

以Vite为例:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import IndexExt from 'unplugin-index-extension/vite'

export default defineConfig({
  plugins: [
    vue(),
    IndexExt(),
  ],
})
```

同样支持 `esbuild, rollup, webpack`， 通过相同方法安装。

> 首先检查`.vue`，其次检查`.svelte`，之后进行默认行为。

## License

[MIT](./LICENSE) :heart:
