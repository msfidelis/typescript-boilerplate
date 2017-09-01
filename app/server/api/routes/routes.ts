import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';

/**
 * Rotas da Aplicação
 */
class Routes {

	private router: UserRoutes;

	constructor(app: Application) {
		this.router = new UserRoutes();
		this.getRoutes(app);
	}

	getRoutes(app: Application) {

		//Users
		app.route('/api/users/all').get(this.router.index);
		app.route('/api/users/:id').get(this.router.findOne);
		app.route('/api/users/create').post(this.router.create);
		app.route('/api/users/:id/update').put(this.router.update);
		app.route('/api/users/:id/destroy').delete(this.router.findOne);


	}

}

export default Routes;