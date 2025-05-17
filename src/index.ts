import { staticPlugin } from '@elysiajs/static'
import { log } from 'console'
import { Elysia } from 'elysia'
import { cwd } from 'process'

const app = new Elysia()
	.use(staticPlugin({
		assets: `${cwd()}/public`, // path to the folder with files
		prefix: '/' // under which URL the files will be available
	  }))
	.get('/', () => 'Hello')
	.listen(3000)

log(`We are running at ${app.server?.hostname}:${app.server?.port}`)