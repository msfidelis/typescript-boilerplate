import { Response } from 'express';
import * as HTTPStatus from 'http-status';

/**
 * Error Handler from Database Operations
 * @param res 
 * @param err 
 */
export function dbErrorHandler(res: Response, err: any) {
    console.log(err);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: HTTPStatus.INTERNAL_SERVER_ERROR, 
        message: 'Error'
    });
}