import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';

import User from '../User/service';
import Responses from './../../api/responses/handler';
class TokenRoutes {

    auth(req: Request, res: Response) {

        const credentials = {
            email: req.body.email,
            password: req.body.password
        }
        
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            User
                .getByEmail(credentials.email)
                .then(_.partial(Responses.authSuccess, res, credentials))
                .catch(_.partial(Responses.authFail, req, res))
        }

    }
    
}

export default new TokenRoutes();