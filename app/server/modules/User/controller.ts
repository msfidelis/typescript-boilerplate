import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';

import User from './service';
import { onError, onBadRequest, onNotFound } from '../../api/responses/errorHandler';
import { onSuccess, onCreate } from '../../api/responses/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';

/**
 * UserController
 */
class UserController {

    constructor() {}

    /**
     * Create a single User on Database
     * @param req 
     * @param res 
     */
    createUser(req: Request, res: Response) {
        User.create(req.body)
        .then(_.partial(onCreate, res))
        .catch(onError, res, `Erro ao criar o usuário`);
    }

    /**
     * Return a simple User List
     * @param req 
     * @param res 
     */
    getAll(req: Request, res: Response) {
        User.getAll()
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Erro ao listar os usuários`));
    }

    /**
     * Return a simple User identified by ID
     * @param req 
     * @param res 
     */
    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);

        User.getById(userId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onNotFound, res, `Usuário não encontrado`));
    }

    /**
     * Update a simple user identified by ID
     * @param req 
     * @param res 
     */
    updateUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const props = req.body;

        User.update(userId, props)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Erro ao atualizar o usuário`));
    }
    
    /**
     * Delete a simple user identified by ID
     * @param req 
     * @param res 
     */
    deleteUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        
        User.delete(userId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Não foi possível deletar o usuário`));
    }

}

export default UserController;