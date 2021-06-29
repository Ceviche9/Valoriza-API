import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {hash} from 'bcryptjs';

interface IUserRequest {

    name: string;
    email: string;
    password: string;
    admin?: boolean;

}

class CreateUserService {


    async execute({name, email, password, admin}: IUserRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories);
         
        if(!email) {

            throw new Error('This email already exists');
        }

        const UserAlreadyExists = await usersRepositories.findOne({
            email
        });

       
        if(UserAlreadyExists) {

            console.log('Cheguei no erro');
            throw new Error('Erro: User already exists');
        }

        const passwordHash = await hash(password, 8);


        const user = usersRepositories.create({
            name,
            email,
            //change the value inside the password
            password: passwordHash,
            admin
        });

        await usersRepositories.save(user);

        return user

    }

}

export { CreateUserService }