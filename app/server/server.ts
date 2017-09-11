import * as cluster from 'cluster';
import { cpus } from 'os';
import * as http from 'http';
import Api from './api/api';

const models = require('./models');
const config = require('./config/config')();

let server;

/**
 * Cluster Configs
 */
const numCPUs = cpus().length;

if (cluster.isMaster) {
	for (var i = 0; i < numCPUs; i++) {
	  cluster.fork();
	}
	cluster.on('exit', (worker, code, signal) => {
	  console.log(`worker ${worker.process.pid} died`);
	});
} else {
	
	const server = http.createServer(Api);
	
	/**
	 * Inicia o banco de dados e em seguida a aplicação
	 */
	models.sequelize.sync()
	
		.then(() => {
	
			server.listen(config.serverPort);
	
			server.on('listening', () => {
				console.log(`Server rodando na porta ${config.serverPort}`);
			});
	
			server.on('error', (error: NodeJS.ErrnoException) => {
				console.log(`Ocorreu um erro louco: ${error}`);
			});
	
		});
	
}

export default server;