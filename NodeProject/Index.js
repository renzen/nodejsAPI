import express from 'express';
import mongoose from 'mongoose'; //database connection
import bodyParser from 'body-parser'; // allows send object get the right data posted to database
import routes from './src/routes/crmRoute';
import jwt  from 'jsonwebtoken';


const app = express();
const PORT = process.env.PORT || 3000

// database connection
const dbpath = "mongodb://localhost/CRMdb";
const mongo = mongoose.connect(dbpath, {useNewUrlParser: true });
    mongo.then(() => {
    console.log('MongoDB Connected');
    }).catch((err) => {
    console.log('err', err);
    });

// body-parser set up
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


routes(app);

app.get('/api/protected', ensureToken, function (req, res) {
    jwt.verify(req.token, 'my_secret_key', function(err, data){
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'This is protected!',
                data: data
            });
        }
    })
    });
    
function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
     } else {
         res.sendStatus(403);
    }
}

//

app.get('/', (req, res) =>
        res.send(`Node and express Server is running on PORT ${PORT}`)
);

app.listen(PORT, () =>
       console.log(`your server is running on port  ${PORT}`)
);
