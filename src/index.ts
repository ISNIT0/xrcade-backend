// tslint:disable-next-line: no-reference
///<reference path="./typings/shims.d.ts" />

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { createConnection } from './db';
import { router } from './routes';

import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import { passport } from './auth/passport';
import { config } from './config';
import { games } from './games';
import { Game } from './models/Game.model';

const app = express();

app.use(
    cors({
        credentials: true,
    }),
);

const RedisStore = connectRedis(session);

app.use(session({
    secret: 'cats',
    store: new RedisStore({
        url: config.redis.url,
    }),
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('tiny'));

app.use(bodyParser.json());

app.use('/', router);

(async () => {
    console.info('Creating Connection');
    await createConnection();

    console.info('Updating Games');
    await updateGames();

    console.info('Starting Server');
    const port = process.env.PORT || 12180;
    app.listen(port);
    console.log('Listening on port', port);
})().catch((e) => console.error(e));

async function updateGames() {
    for (const game of games) {
        let gameRow = await Game.findOne({ friendlyId: game.friendlyId });
        if (!gameRow) {
            gameRow = new Game();
        }

        Object.assign(gameRow, game);
        await gameRow.save();
    }
}
