import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';

/**
 * UserController
 */
class UserController {

    constructor() {}

    createUser(req: Request, res: Response) {
        res.status(HTTPStatus.CREATED).json({
            msg : "OK"
        })
    }

    getAll(req: Request, res: Response) {
        res.status(HTTPStatus.OK).json({
            msg : "OK"
        })
    }

    getById(req: Request, res: Response) {
        res.status(HTTPStatus.OK).json({
            msg : "OK"
        })
    }

    updateUser(req: Request, res: Response) {
        res.status(HTTPStatus.OK).json({
            msg : "OK"
        })
    }

    deleteUser(req: Request, res: Response) {
        res.status(HTTPStatus.OK).json({
            msg : "OK"
        })
    }

}

export default UserController;