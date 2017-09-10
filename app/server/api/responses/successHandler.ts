import { Response } from 'express';
import * as HTTPStatus from 'http-status';

/**
 * 200 - Ok
 * @param res 
 * @param data 
 */
export function onSuccess(res: Response, data: any) {
    res.status(HTTPStatus.OK).json({payload: data});
}

/**
 * 201 - Create
 * @param res 
 * @param data 
 */
export function onCreate(res: Response, data: any) {
    res.status(HTTPStatus.CREATED).json({payload: data});
}


/**
 * 202 - Response
 * @param res 
 * @param data 
 */
export function onAccepted(res: Response, data: any) {
    res.status(HTTPStatus.ACCEPTED).json({payload: data});
}