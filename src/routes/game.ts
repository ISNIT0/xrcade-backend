import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { Game } from 'src/models/Game.model';
import { Rating } from 'src/models/Rating.model';
import { makeValidateBody } from 'express-class-validator';
import { IsOptional, IsNumber, IsInt, Min, Max } from 'class-validator';
import { Profile } from 'src/models';

const router = Router();

router.get('/all',
    asyncHandler(async (req, res) => {
        const games = await Game.find();
        const sortedGames = games.sort((a, b) => a.rating < b.rating ? -1 : 1);
        res.send(sortedGames);
    }),
);

class UpdateUserBody {
    @IsInt() @Min(0) @Max(5) public value: number;
}

router.post('/rate/:gameId',
    makeValidateBody(UpdateUserBody),
    asyncHandler(async (req, res) => {
        const game = await Game.findOneOrFail({ id: req.params.gameId });
        const rating = new Rating();

        rating.ratingValue = req.body.value;
        rating.userAgent = req.headers['user-agent'];
        rating.profile = req.user;
        rating.game = game;

        await rating.save();
        res.send(rating);
    }),
);

export default router;
