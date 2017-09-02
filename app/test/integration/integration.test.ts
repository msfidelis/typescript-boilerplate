import { app, request, expect } from './config/helpers';
import * as HTTPStatus from 'http-status';

describe('Testes de integração', () => {

	describe('GET /api/users/all', () => {

		it("Deve retornar um JSON com todos os usuários", done => {

			request(app)
				.get('/api/users/all')
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					done(error);
				});

		});

	});

	describe('GET /api/users/:id', () => {

		it("Deve retornar as informações de um usuário específico", done => {

			request(app)
				.get(`/api/users/${1}`)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					done(error);
				});

		});

	});


	describe('POST /api/users/create', () => {

		it("Deve criar um usuário", done => {

			const user = {
				name: 'Teste'
			};

			request(app)
				.post('/api/users/create')
				.send(user)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.CREATED);
					done(error);
				});
			
		});

	});

	describe('PUT /api/users/:id/update', () => {

		it("Deve atualizar um usuário", done => {

			const user = {
				name: 'Teste Update'
			};

			request(app)
				.put(`/api/users/${1}/update`)
				.send(user)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					done(error);
				});			
			
		});

	});


	describe('DELETE /api/users/:id/destroy', () => {

		it("Deve deletar um usuário", done => {

			request(app)
				.delete(`/api/users/${1}/destroy`)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					done(error);
				});			
			
		});

	});



});