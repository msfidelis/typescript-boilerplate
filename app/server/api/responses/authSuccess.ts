import {Request, Response} from 'express';
import * as jwt from 'jwt-simple';
import * as HTTPStatus from 'http-status';

const config = require('../../config/config')();


/**
 * Verify Login
 * @param res 
 * @param credentials 
 * @param data 
 */
export default function authSuccess(res: Response, credentials: any, data: any) {

    const isMatch = (credentials.password == data.password);

    if (isMatch) {

        const payload = {id: data.id};
        res.json({
            token: jwt.encode(payload, config.secret)
        });

    } else {
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }

}