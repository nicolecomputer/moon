import Fastify from 'fastify'
import view from '@fastify/view'
import staticFiles from '@fastify/static'
import handlebars from 'handlebars'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { moonphase } from './moon/moon'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const server = Fastify({
    logger: true
})

// Register static file serving
await server.register(staticFiles, {
    root: join(__dirname, 'public'),
    prefix: '/public/'
})

// Register view engine
await server.register(view, {
    engine: {
        handlebars: handlebars
    },
    root: join(__dirname, 'views')
})

server.get('/', async (request, reply) => {
    return reply.view('index.hbs', {
        title: 'Moon Phase Tracker',
        moonphase: moonphase(new Date())
    })
})

const start = async () => {
    try {
        await server.listen({
            port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
            host: '0.0.0.0'
        })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()
