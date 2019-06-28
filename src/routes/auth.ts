import { Router, Request, Response } from 'express';
import { authenticate } from './middleware/auth';
import * as passport from 'passport';

const router = Router();

router.get('/facebook', authenticate);

router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/auth/login' }),
    function (req, res) {
        res.redirect('/');
    },
);

export default router;
