import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { authenticate } from './middleware/auth';

const router = Router();

router.use(authenticate);

router.get('/ruok',
    asyncHandler(async (req, res) => {
        res.send('IMOK');
    }),
);

export default router;
