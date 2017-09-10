import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from  '../../modules/Auth/auth';

/**
 * Rotas da Aplicação
 */
class Routes {

	private userRouter: UserRoutes;
	private tokenRouter;
	private auth;

	/**
	 * Routes Constructor
	 * @param app 
	 */
	constructor(app: Application, auth: any) {
		//Routers
		this.userRouter = new UserRoutes();
		this.tokenRouter = new TokenRoutes();

		this.auth = auth;
		this.getRoutes(app);
	}

	/**
	 * Configure server routes
	 * @param app 
	 */
	getRoutes(app: Application) {

		//Auth
		app.route('/api/token').post(this.tokenRouter.auth);

		//Users
		app.route('/api/users/all').all(this.auth.authenticate()).get(this.userRouter.index);
		app.route('/api/users/:id').all(this.auth.authenticate()).get(this.userRouter.findOne);
		app.route('/api/users/create').all(this.auth.authenticate()).post(this.userRouter.create);
		app.route('/api/users/:id/update').all(this.auth.authenticate()).put(this.userRouter.update);
		app.route('/api/users/:id/destroy').all(this.auth.authenticate()).delete(this.userRouter.findOne);


	}

}

export default Routes;