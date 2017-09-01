import * as http from 'http';
import Api from './api/api';

const models = require('./models');
const config = require('./config/config')();

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

export default server;



