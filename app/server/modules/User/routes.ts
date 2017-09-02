import { Request, Response } from 'express';
import UserController from './controller';

let UserCtrl

/**
 * Routes from Users
 */
class UserRoutes {

	/**
	 * Constructor
	 */
	constructor() {
		UserCtrl = new UserController();
	}

	/**
	 * [index description]
	 * @param {Request}  req [description]
	 * @param {Response} res [description]
	 */
	index(req: Request, res: Response) {
		return UserCtrl.getAll(req, res);
	}

	/**
	 * [findOne description]
	 * @param {Request}  req [description]
	 * @param {Response} res [description]
	 */
	findOne(req: Request, res: Response) {
		return UserCtrl.getById(req, res);
	}

	/**
	 * [create description]
	 * @param {Request}  req [description]
	 * @param {Response} res [description]
	 */
	create(req: Request, res: Response) {
		return UserCtrl.createUser(req, res);
	}

	/**
	 * [Update an User Information]
	 * @param {Request}  req [description]
	 * @param {Response} res [description]
	 */
	update(req: Request, res: Response) {
		return UserCtrl.updateUser(req, res);
	}

	/**
	 * [Delete one User]
	 * @param {Request}  req [description]
	 * @param {Response} res [description]
	 */
	destroy(req: Request, res: Response) {
		return UserCtrl.deleteUser(req, res);
	}


}

export default UserRoutes;