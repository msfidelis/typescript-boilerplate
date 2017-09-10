import { Response } from 'express';
import * as HTTPStatus from 'http-status';

/**
 * 500 - Internal Server Error
 * @param res 
 * @param message 
 * @param err 
 */
export function onError(res: Response, message: string, err: any) {
    console.log(`Error ${err}`)
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({msg: message});
}

/**
 * 400 - Bad Request
 * @param res 
 * @param message 
 * @param err 
 */
export function onBadRequest(res: Response, message: string, err: any) {
    console.log(`Error ${err}`)
    res.status(HTTPStatus.BAD_REQUEST).json({msg: message});
}

/**
 * 404 - Not Found
 * @param res 
 * @param message 
 * @param err 
 */
export function onNotFound(res: Response, message: string, err: any) {
    console.log(`Error ${err}`)
    res.status(HTTPStatus.NOT_FOUND).json({msg: message});
}

