import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { Game } from 'src/models/Game.model';
import { readFileSync } from 'fs';
import * as Handlebars from 'handlebars';

const shareHtml = readFileSync('src/views/share.html', 'utf8');
const shareView = Handlebars.compile(shareHtml);

const router = Router();

router.get('/:friendlyId',
    asyncHandler(async (req, res) => {
        const game = await Game.findOne({ friendlyId: req.params.friendlyId });
        const html = shareView({ game });
        res.send(html);
    }),
);

export default router;
