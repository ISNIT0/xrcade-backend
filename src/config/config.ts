import 'dotenv/config';
import * as convict from 'convict';

import { redisDefault } from './redis';

export enum Env {
  Test = 'test',
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
}

export enum LogLevel {
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

const convictConfig = convict({
  app: {
    env: {
      doc: 'The current environment of the app',
      format: String,
      enum: Object.values(Env),
      default: Env.Development,
      env: 'NODE_ENV',
    },
    name: {
      doc: 'The name of the current server instance for handling loggers',
      format: String,
      default: 'Scribe API',
      env: 'API_NAME',
    },
    host: {
      doc: 'The host on which the server should run.',
      format: String,
      default: 'localhost',
      env: 'HOST',
    },
    port: {
      doc: 'The port on which the server should run.',
      format: 'port',
      default: 12180,
      env: 'PORT',
    },
    logLevel: {
      doc: 'Logging level, can be log, console, warn, error, info',
      format: String,
      enum: Object.values(LogLevel),
      default: LogLevel.Error,
      env: 'LOG_LEVEL',
    },
  },
  redis: {
    url: {
      doc: 'Redis url',
      format: String,
      default: redisDefault,
      env: 'REDIS_URL',
    },
  },
  facebook: {
    appId: {
      doc: 'FB App Id',
      format: String,
      default: null,
      env: 'FACEBOOK_APP_ID',
    },
    clientSecret: {
      doc: 'FB App Secret',
      format: String,
      default: null,
      env: 'FACEBOOK_APP_SECRET',
    },
    callbackUrl: {
      doc: 'FB Callback Url',
      format: String,
      default: null,
      env: 'FACEBOOK_CALLBACK_URL',
    },
  },
});

export { convictConfig };
