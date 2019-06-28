import * as Redis from 'ioredis'

import * as assert from 'assert'
import { config } from 'src/config'

assert(config.redis.url, 'Missing config: Config.redis.url')

export const redisClient = new Redis(config.redis.url)
export const newConnection = () => new Redis(config.redis.url)
