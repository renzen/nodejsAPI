import { userLogin } from '../controllers/crmController';
   
   // LOGIN USER
   app.route('/api/login').post((req, res, next) => {
    next();
}, userLogin)