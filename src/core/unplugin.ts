import { existsSync } from 'node:fs'
import { createUnplugin } from 'unplugin'
import { dirname, resolve } from 'pathe'

const extensionList = [
  '.vue',
  '.svelte',
]

export interface UnpluginFactoryOptions {

}
export default createUnplugin<Partial<UnpluginFactoryOptions> | undefined>((_options = {}) => {
  return {
    name: 'unplugin-index-extension',
    enforce: 'pre',
    async resolveId(id, importer) {
      if (importer === undefined)
        return

      const abs = resolve(dirname(importer), id)
      if (id.endsWith('index')) {
        for (const ext of extensionList) {
          const path = resolve(dirname(abs), `./index${ext}`)
          if (existsSync(path))
            return { id: path }
        }
      }

      for (const ext of extensionList) {
        const path = resolve(abs, `./index${ext}`)
        if (existsSync(path))
          return { id: path }
      }
    },
  }
})
