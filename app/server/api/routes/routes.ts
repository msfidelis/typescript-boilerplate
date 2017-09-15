import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from  '../../modules/Auth/auth';

/**
 * Rotas da Aplicação
 */
class Routes {

	/**
	 * Routes Constructor
	 * @param app 
	 */
	constructor() {}

	/**
	 * Configure server routes
	 * @param app 
	 */
	initRoutes(app: Application, auth: any) {

		//Auth
		app.route('/api/token').post(TokenRoutes.auth);

		//Users
		app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.index);
		app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
		app.route('/api/users/create').all(auth.config().authenticate()).post(UserRoutes.create);
		app.route('/api/users/:id/update').all(auth.config().authenticate()).put(UserRoutes.update);
		app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(UserRoutes.findOne);


	}

}

export default new Routes();