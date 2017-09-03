import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';

describe('Testes Unitários do Controller', () => {

	describe('[C]reate', () => {

		it('Deve criar um novo usuário', () => {

			const novoUsuario = {
				id: 191, 
				name: 'Novo Usuário',
				email: 'email@email.com',
				password: '1234'
			}

			const user = new User();
			return user.create(novoUsuario)
				.then(data => {
					expect(data.dataValues).to.have.all.keys(
						['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
					)
				});

		});

	});


	describe('[R]ead', () => {

		it('Deve listar os usuários', () => {
			const user = new User();
			return user.getAll().then(data => {
				expect(data).to.be.an('array');
				expect(data[0]).to.have.all.keys(
					['email', 'id', 'name', 'password']
				);
			})
		});

		it('Deve retornar um registro baseado no ID passado', () => {
			const user = new User();
			return user.getById(190).then(data => {
				expect(data).to.have.all.keys(
					['email', 'id', 'name', 'password']
				);
			});
		});

		it('Deve retornar um registro baseado no email passado', () => {
			const user = new User();
			return user.getByEmail('email@email.com').then(data => {
				expect(data).to.have.all.keys(
					['email', 'id', 'name', 'password']
				);
			});
		});

	});

	describe('[U]pdate', () => {

		it('Deve atualizar um usuário', () => {
			const usuarioAtualizado = {
				name: 'Nome Atualizado',
				email: 'atualizado@gmail.com'
			};
			const user = new User();
			return user.update(1, usuarioAtualizado).then(data => {
				expect(data[0]).to.be.equal(1);
			});
		});

	});


	describe('[D]elete', () => {

		it('Deve deletar um usuário', () => {
			const user = new User();
			return user.delete(1).then(data => {
				expect(data).to.be.equal(1);
			});
		});

	});



});