import { IUser, IUserDetail, createUser, createUsers, createUserById, createUsersByEmail } from './interface';
import * as Bluebird from 'bluebird';

const model = require('../../models');

class User implements IUser {

    public id: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(){}

    create(user: any){
        return model.User.create(user);
    }

    getAll(): Bluebird<IUser[]>{
        return model.User.findAll({
            order: ['name']
        }).then(createUsers);
    }

    getById(id: number): Bluebird<IUser[]>{
        return model.User.findOne({
            where: {id}
        }).then(createUserById)
    }

    getByEmail(email: string): Bluebird<IUser[]>{
        return model.User.findOne({
            where: {email}
        }).then(createUsersByEmail);
    }

    update(id: number, user: any){
        return model.User.update(user, {
            where: {id},
            fields: ['name', 'email', 'password'],
            hooks: true, 
            individualHooks: true
        })
    }

    delete(id: number){
        return model.User.destroy({
            where: {id}
        });
    }

}

export default new User();