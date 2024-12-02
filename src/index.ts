// src/index.ts
import Fastify from 'fastify'
import view from '@fastify/view'
import staticFiles from '@fastify/static'
import handlebars from 'handlebars'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { moonphase } from './moon/moon.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const server = Fastify({
    logger: true
})

async function buildServer() {
    // Register plugins
    await server.register(staticFiles, {
        root: join(__dirname, 'public'),
        prefix: '/public/'
    })

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

    return server
}

const start = async () => {
    try {
        const server = await buildServer()
        await server.listen({
            port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
            host: '0.0.0.0'
        })
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

start()
