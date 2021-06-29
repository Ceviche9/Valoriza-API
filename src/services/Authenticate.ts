import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import { Subject } from "typeorm/persistence/Subject";

interface AuthenticateRequest {

    email: string;
    password: string

}

class AuthenticateUser {

    async execute({email, password}: AuthenticateRequest) {

        const user = getCustomRepository(UsersRepositories);

        //Verify if email exists =>
        const userExists = await user.findOne({
            email
        });

        if(!userExists){

            throw new Error('Email/Password incorrect');
        }

        //Verify if password is correct => 

        const passwordMatch = await compare(password,userExists.password);
        
        if(!passwordMatch){

            throw new Error('Email/Password incorrect');
        }

        //Token => 

        const token = sign({
            email: userExists.email
        }, "243hjjSKdhlkkljdk4844r3erefdfdf", {
            subject: userExists.id,
            expiresIn: "1d"
        } );

        return token;

    }

    

}

export {AuthenticateUser}