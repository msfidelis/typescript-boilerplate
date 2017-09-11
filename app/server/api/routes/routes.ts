import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from  '../../modules/Auth/auth';

/**
 * Rotas da Aplicação
 */
class Routes {

	private userRouter: UserRoutes;
	private tokenRouter;

	/**
	 * Routes Constructor
	 * @param app 
	 */
	constructor() {
		//Routers
		this.userRouter = new UserRoutes();
		this.tokenRouter = new TokenRoutes();
	}

	/**
	 * Configure server routes
	 * @param app 
	 */
	initRoutes(app: Application, auth: any) {

		//Auth
		app.route('/api/token').post(this.tokenRouter.auth);

		//Users
		app.route('/api/users/all').all(auth.authenticate()).get(this.userRouter.index);
		app.route('/api/users/:id').all(auth.authenticate()).get(this.userRouter.findOne);
		app.route('/api/users/create').all(auth.authenticate()).post(this.userRouter.create);
		app.route('/api/users/:id/update').all(auth.authenticate()).put(this.userRouter.update);
		app.route('/api/users/:id/destroy').all(auth.authenticate()).delete(this.userRouter.findOne);


	}

}

export default new Routes();