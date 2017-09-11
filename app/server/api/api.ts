import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { Application } from 'express';

import Routes from './routes/routes';
import { errorHandlerApi } from './errorHandlerApi';
import Auth from '../auth';

/**
 * API Module
 */
class Api {

	public express: Application

	constructor() {
		this.express = express();
		this.middleware();
		this.configs();
	}

	/**
	 * Middlewares Configs
	 */
	middleware(): void {
		this.express.use(morgan('dev'));
		this.express.use(bodyParser.urlencoded({extended : true}));
		this.express.use(bodyParser.json());
		this.express.use(errorHandlerApi);
		this.express.use(Auth.config().initialize());
		this.router(this.express, Auth);
	}

	/**
	 * API Configs
	 */
	configs() : void{
		this.express.set('json spaces', 4);
	}

	private router(app: Application, auth: any): void {
		Routes.initRoutes(app, auth);
	}

}


export default new Api().express;