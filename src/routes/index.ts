import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import authRouter from './auth';
import profileRouter from './profile';
import gameRouter from './game';
import shareRouter from './share';

const router = Router();

router.get('/ruok',
    asyncHandler(async (req, res) => {
        console.log('User:', req.user);
        res.send('IMOK');
    }),
);

router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/game', gameRouter);
router.use('/share', shareRouter);

export {
    router,
};
