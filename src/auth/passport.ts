import * as passport from 'passport';
import { config } from 'src/config';

import * as FacebookStrategy from 'passport-facebook';
import { Profile } from 'src/models';

passport.use(
    new FacebookStrategy.Strategy({
        clientID: config.facebook.appId,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackUrl,
    },
        async function (accessToken, refreshToken, profile, cb) {
            let p = await Profile.findOne({ facebookId: profile.id });
            if (!p) {
                p = new Profile();
                p.facebookId = profile.id;
                p.name = profile.displayName;
                p = await p.save();
            }
            return cb(null, p);
        },
    ),
);

passport.serializeUser(function (user: any, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id: string, done) {
    const p = await Profile.findOne({ id });
    done(null, p); // TODO: handle errors
});

export {
    passport,
};
