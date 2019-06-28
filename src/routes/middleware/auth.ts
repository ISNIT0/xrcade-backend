import * as passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export function authenticate(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('facebook')(req, res, next);
}
