import { Request, Response } from 'express';

class UserController {

    constructor() {

    }

    createUser(req: Request, res: Response) {
        res.status(201).json({
            msg : "OK"
        })
    }

    getAll(req: Request, res: Response) {
        res.status(200).json({
            msg : "OK"
        })
    }

    getById(req: Request, res: Response) {
        res.status(200).json({
            msg : "OK"
        })
    }

    updateUser(req: Request, res: Response) {
        res.status(200).json({
            msg : "OK"
        })
    }

    deleteUser(req: Request, res: Response) {
        res.status(200).json({
            msg : "OK"
        })
    }


}

export default UserController;