import * as http from 'http';
import Api from './api/api';

const config = require('./config/config')();

const server = http.createServer(Api);

server.listen(config.serverPort);

server.on('listening', () => {
	console.log(`Server rodando na porta ${config.serverPort}`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
	console.log(`Ocorreu um erro louco: ${error}`);
});

