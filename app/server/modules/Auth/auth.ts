import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';

import User from '../User/service';
import authSuccess from '../../api/responses/authSuccess';
import authFail from '../../api/responses/authFail';

class TokenRoutes {

    auth(req: Request, res: Response) {

        const credentials = {
            email: req.body.email,
            password: req.body.password
        }
        
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            User
                .getByEmail(credentials.email)
                .then(_.partial(authSuccess, res, credentials))
                .catch(_.partial(authFail, req, res))
        }

    }
    
}

export default new TokenRoutes();