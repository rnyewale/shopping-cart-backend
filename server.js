require("dotenv").config();
const express = require('express')
const PORT = process.env.APP_PORT | 3000;
const app = express();
const cors = require('cors');
const { execArgv } = require("process");
const products = require('./routes/products')

app.use('/', products)
//this function is to parse any incomming request data to json object.
app.use(express.json());

var corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true
}
console.log('corsOptions ',corsOptions);
app.use(cors(corsOptions));

//this function is essential for basic configuration of project.
app.use(express.urlencoded({
    extended: true,
}))

app.get('/', (req, res) => {
    res.json({
        success: 1,
        message: 'hello root'
    })
})

app.listen(PORT, () => {
    console.log(`Server is up & running on port: ${PORT}`);
})


// const express = require('express');
// const cors = require('cors');
// const cookieSession = require('cookie-session')
// //const errorhandler = require('errorhandler')
// const bodyParser = require('body-parser')
// const router = require('./routes/router')
// const database = require('./config/databaseConfig')
// const app = express()
// const PORT = process.env.APP_PORT | 8087;


// class Server {
//     constructor() {
//         this.start();
//         this.pathFinder();
//         this.initRoutes();
//         this.initDBConnection();
//         this.initExpressMiddleware();
//     }

//     start(){
//         app.listen(PORT, (error) =>{
//             if(!error){
//                 console.log(`Server Listening on port http://localhost ${process.env.NODE_ENV, port}`);
//             }else{
//                 console.log("error while running server..!")
//             }
//         })
//     }

//     pathFinder(){
//         global.base_dir = __dirname;
//         global.abs_path = function(path){
//             return base_dir + path;
//         }
//         global.include = function(file){
//             return require(abs_path('/'+file));
//         }
//     }

//     initExpressMiddleware(){
//         app.use(bodyParser.urlencoded({
//             extended:true
//         }));

//         var corsOptions = {
//            origin: 'http://localhost:4200',
//            credentials: true
//         }
//         app.use(cors(corsOptions));

//         app.use(bodyParser.json());
//         app.use(cookieParser());
//         app.use(cookieSession({
//             name: 'session',
//             keys: ['key', 'value'],
//             maxAge: 30*60*1000 //30 min
//         }));

//         app.use((req, res, next) => {
//             console.log('validation ');
//             next();
//         })
//     }

//     initRoutes(){
//         //redirect request to controllers
//         router.load(app, './controllers')

//         //redirect all other calls with error
//         app.all('/*', (req, res) =>{
//             res.json({
//                 "success": false,
//                 "error": {
//                     "code":404,
//                     "message": 'Invalid URL!'
//                 }
//             });
//             res.end;
//         })
//     }
// }
//let server =new Server();