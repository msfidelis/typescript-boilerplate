import {Request, Response, ErrorRequestHandler, NextFunction} from 'express';
import * as jwt from 'jwt-simple';
import * as HTTPStatus from 'http-status';
import * as bcrypt from 'bcrypt';
import * as passport from 'passport';

const config = require('../../config/config')();


class Responses {

    /**
     * Verify Login
     * @param res 
     * @param credentials 
     * @param data 
     */
    authFail(req: Request, res: Response) {
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }

    /**
     * Verify Login Credencitals
     * @param res 
     * @param credentials 
     * @param data 
     */
    authSuccess(res: Response, credentials: any, data: any) {
            const isMatch = bcrypt.compareSync(credentials.password, data.password);
        
            if (isMatch) {
        
                const payload = {id: data.id};
                res.json({
                    token: jwt.encode(payload, config.secret)
                });
        
            } else {
                res.sendStatus(HTTPStatus.UNAUTHORIZED);
            }
        }

        /**
         * 200 - Ok
         * @param res 
         * @param data 
         */
        onSuccess(res: Response, data: any) {
            res.status(HTTPStatus.OK).json({payload: data});
        }

        /**
         * 201 - Create
         * @param res 
         * @param data 
         */
        onCreate(res: Response, data: any) {
            res.status(HTTPStatus.CREATED).json({payload: data});
        }

        /**
         * 202 - Response
         * @param res 
         * @param data 
         */
        onAccepted(res: Response, data: any) {
            res.status(HTTPStatus.ACCEPTED).json({payload: data});
        }

        /**
         * 400 - Bad Request
         * @param res 
         * @param message 
         * @param err 
         */
        onBadRequest(res: Response, message: string, err: any) {
            console.log(`Error ${err}`)
            res.status(HTTPStatus.BAD_REQUEST).json({msg: message});
        }


        /**
         * 404 - Not Found
         * @param res 
         * @param message 
         * @param err 
         */
        onNotFound(res: Response, message: string, err: any) {
            console.log(`Error ${err}`)
            res.status(HTTPStatus.NOT_FOUND).json({msg: message});
        }

        /**
         * 500 - Internal Server Error
         * @param res 
         * @param message 
         * @param err 
         */
        onError(res: Response, message: string, err: any) {
            console.log(`Error ${err}`)
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({msg: message});
        }


        /**
         * [errorHandlerApi Middleware]
         * @param {ErrorRequestHandler} err  [description]
         * @param {Request}             req  [description]
         * @param {Response}            res  [description]
         * @param {NextFunction}        next [description]
         */
        errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
            console.error(`API Error Handler foi executada: ${err}`);
        
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                errorCode : "ERR-001", 
                message : 'Erro interno do servidor'
            });
        };

}

export default new Responses();