import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';

/**
 * Auth on Fail
 * @param req 
 * @param res 
 */
export default function authFail(req: Request, res: Response) {
    res.sendStatus(HTTPStatus.UNAUTHORIZED);
}