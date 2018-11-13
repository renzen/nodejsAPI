import mongoose from 'mongoose';
import {ContactSchema} from '../models/loginModel';
import jwt from 'jsonwebtoken';

// LOGIN USER
export const userLogin = (req, res) => {
    const user = Contact.find(user => user.username == body.username);
     if(!user || body.password != 'login') return res.sendStatus(401);
      // const user = {id: 3};
       const token = jwt.sign({user}, 'my_secret_key',  {expiresIn: '2h'});
       res.json({
           'success':true,                                     
            token: token,
            user: user.id
            
        });
   };