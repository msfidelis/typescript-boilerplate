import { app, request, expect } from './config/helpers';


describe('Testes de integração', () => {

	describe('GET /api/users/all', () => {

		it("Deve retornar um JSON com todos os usuários", done => {

			request(app)
				.get('/api/users/all')
				.end((error, res) => {
					expect(res.status).to.equal(200);
					done(error);
				});

		});

	});

	describe('GET /api/users/:id', () => {

		it("Deve retornar as informações de um usuário específico", done => {

			request(app)
				.get(`/api/users/${1}`)
				.end((error, res) => {
					expect(res.status).to.equal(200);
					done(error);
				});

		});

	});


	describe('POST /api/users/new', () => {

		it("Deve criar um usuário", done => {

			const user = {
				name: 'Teste'
			};

			request(app)
				.post('/api/users/new')
				.send(user)
				.end((error, res) => {
					expect(res.status).to.equal(201);
					done(error);
				});
			
		});

	});

	describe('PUT /api/users/:id/edit', () => {

		it("Deve atualizar um usuário", done => {

			const user = {
				name: 'Teste Update'
			};

			request(app)
				.put(`/api/users/${1}/edit`)
				.send(user)
				.end((error, res) => {
					expect(res.status).to.equal(200);
					done(error);
				});			
			
		});

	});


	describe('DELETE /api/users/:id', () => {

		it("Deve deletar um usuário", done => {

			request(app)
				.delete(`/api/users/${1}`)
				.end((error, res) => {
					expect(res.status).to.equal(200);
					done(error);
				});			
			
		});

	});



});