import { Request } from 'express'
import { Profile } from 'src/models'

declare module 'express' {
    /**
     * See https://www.typescriptlang.org/docs/handbook/declaration-merging.html for
     * more on declaration merging
     */
    interface Request {
        user?: Auth0User
        profile?: Profile
    }
}
