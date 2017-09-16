'use strict';

import * as HTTPStatus from 'http-status';
import * as jwt from 'jwt-simple';

import { app, request, expect } from './config/helpers';
import * as passport from 'passport';

const model = require('../../server/models');
const config = require('../../server/config/config')();

const userTest = {
	id: 100, 
	name: "Matheus Fidelis", 
	email: "msfidelis01@gmail.com",
	password: "xupisco"
}

const userDefault = {
	id: 1, 
	name: "Default User", 
	email: "default@default.com",
	password: "default"
}

before(done => {
	model.sequelize.sync()
	.then(() => {
		console.log("Banco de teste configurado");
		done();
	});
});

after(done => {
	model.User.destroy({
		where: {}
	}).then(() => {
		console.log("Banco de teste zerado");
		done();
	});
});

describe('Testes de integração', () => {

	let id;
	let token;
		
	before((done) => {

		model.User.destroy({
			where: {}
		}).then(() => {
			return model.User.create(userDefault);
		}).then(user => {
			model.User.create(userTest)
			.then(() => {
				token = jwt.encode({id: user.id}, config.secret);
				done();
			});
		});

	});

	describe('POST /api/token', () => {

		it("Deve retornar um Token", done => {
			const credentials = {
				email: userDefault.email,
				password: userDefault.password
			};

			request(app)
				.post('/api/token')
				.send(credentials)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					expect(res.body.token).to.equal(token);
					done(error);
				})
		});


		it("Não deve gerar um Token", done => {
			const credentials = {
				email: "invalid@email.com",
				password: "invalidpassword"
			};

			request(app)
				.post('/api/token')
				.send(credentials)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.UNAUTHORIZED);
					done(error);
				})
		});

	});

	describe('GET /api/users/all', () => {

		it("Deve retornar um Array com todos os usuários", done => {

			request(app)
				.get('/api/users/all')
				.set('Content-type', 'application/json')
				.set('Authorization', `JWT ${token}`)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					expect(res.body.payload).to.be.an('array');
					expect(res.body.payload[0].name).to.be.equal(userDefault.name)
					expect(res.body.payload[0].email).to.be.equal(userDefault.email)
					done(error);
				});

		});

	});

	describe('GET /api/users/:id', () => {

		it("Deve retornar as informações de um usuário específico", done => {

			request(app)
				.get(`/api/users/${userDefault.id}`)
				.set('Content-type', 'application/json')
				.set('Authorization', `JWT ${token}`)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					expect(res.body.payload.id).to.equal(userDefault.id)
					expect(res.body.payload).to.have.all.keys([
						'id', 'name', 'email', 'password'
					]);
					id = res.body.payload.id;
					done(error);
				});

		});

	});


	describe('POST /api/users/create', () => {

		it("Deve criar um usuário", done => {

			const user = {
				id: 2,
				name: 'Teste',
				email: 'tchupis@loko.com',
				password: '123'
			};

			request(app)
				.post('/api/users/create')
				.set('Content-type', 'application/json')
				.set('Authorization', `JWT ${token}`)
				.send(user)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.CREATED);
					expect(res.body.payload.id).to.eql(user.id);
					expect(res.body.payload.name).to.eql(user.name);
					expect(res.body.payload.email).to.eql(user.email)
					done(error);
				});
			
		});

	});

	describe('PUT /api/users/:id/update', () => {

		it("Deve atualizar um usuário", done => {

			const user = {
				name: 'Teste Update',
				email: 'update@update.com'
			};

			request(app)
				.put(`/api/users/${userDefault.id}/update`)
				.set('Content-type', 'application/json')
				.set('Authorization', `JWT ${token}`)
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
				.delete(`/api/users/${userDefault.id}/destroy`)
				.set('Content-type', 'application/json')
				.set('Authorization', `JWT ${token}`)
				.end((error, res) => {
					expect(res.status).to.equal(HTTPStatus.OK);
					done(error);
				});			
			
		});

	});



});