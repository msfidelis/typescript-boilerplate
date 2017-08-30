import { Request, Response, ErrorRequestHandler, NextFunction} from 'express';

/**
 * [errorHandlerApi Middleware]
 * @param {ErrorRequestHandler} err  [description]
 * @param {Request}             req  [description]
 * @param {Response}            res  [description]
 * @param {NextFunction}        next [description]
 */
export function errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {

	console.error(`API Error Handler foi executada: ${err}`);

	res.status(500).json({
		errorCode : "ERR-001", 
		message : 'Erro interno do servidor'
	});


}


