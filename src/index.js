const express = require('express');
const app = express();
const morgan=require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 console.log("1");
//Nuestro primer WS Get
app.get('/', (req, res) => {   
    console.log(req);
    console.log("2");
    res.json(
        {
            "Title": "Hola mundoijkdafgsdffgsgsadfa"
        }
    );
    console.log("3");
});

app.post('/', (req, res) => {  
     
    console.log(req.body);
    
    res.json(
        {
            "Title": "Metodo post",
            body: req.body
        }
    );
});

console.log("4");

 
  console.log("5");
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log("8 ");
    console.log(`Server listening on port ${app.get('port')}`);
});

console.log("6");