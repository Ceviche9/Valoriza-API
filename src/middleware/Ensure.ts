import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken';

interface Payload{

    sub: string;

}

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {

   //Token
    const authToken = req.headers.authorization
    
   //Verify if the user has the token

   if(!authToken){
       return res.status(401).end();
   }

   //Removing the 'Bearer'
   const [ , token] = authToken.split(' ');

   //Verify if the token is valid 

   try{

    const { sub } = verify(token, "243hjjSKdhlkkljdk4844r3erefdfdf") as Payload;

    req.user_id = sub;
  
    }  catch(e) {

    console.log(e);
    return res.status(401).json({Erro: "Error"});

   }

   //Get user's information

   return next();

}