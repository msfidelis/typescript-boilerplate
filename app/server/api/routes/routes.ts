import { Application, Request, Response } from 'express';

/**
 * Rotas da Aplicação
 */
class Routes {

	constructor(app: Application) {
		this.getRoutes(app);
	}

	getRoutes(app: Application) {

		app.route('/').get((req: Request, res: Response) => {
			res.send("Hello FDP");
		});

		app.route('/ola/:nome').get((req: Request, res: Response) => {
			res.send(`Hello, ${req.params.nome}`);
		});

	}

}

export default Routes;