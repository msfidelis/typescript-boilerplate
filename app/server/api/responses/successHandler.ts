import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function onSuccess(res: Response, data: any) {
    res.status(HTTPStatus.OK).json({payload: data});
}

export function onCreate(res: Response, data: any) {
    res.status(HTTPStatus.CREATED).json({payload: data});
}

export function onAccepted(res: Response, data: any) {
    res.status(HTTPStatus.ACCEPTED).json({payload: data});
}