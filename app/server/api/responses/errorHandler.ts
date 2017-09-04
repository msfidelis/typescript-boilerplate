import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function onError(res: Response, message: string, err: any) {
    console.log(`Error ${err}`)
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({msg: message});
}

export function onBadRequest(res: Response, message: string, err: any) {
    console.log(`Error ${err}`)
    res.status(HTTPStatus.BAD_REQUEST).json({msg: message});
}

