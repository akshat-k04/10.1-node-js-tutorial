// let we made a request from front end to backend
//now the function send the response so the function run b/w req and res send are called middleware function
//it means all function that we see in the backend code are middleware functions


//function in backend run in order first wirte first run

/*
app.use()  is globle middleware function
app.post() is specific middleware function
*/

// if we want to use 2 function at 1 req do this

express = require('express');
const app = express();

app.use(express.json());
app.listen(3000);

//let user = {};
const userRouter = express.Router();

app.use('/auth/signup', userRouter);

userRouter.route('/')
    .get(sayhii, sendile)
    .post(getdata);

function sendile(req, res) {
    res.sendFile('./htmlfiles/tp_index.html', { root: __dirname });
}
function getdata(req, res) {
    console.log(req.body);
    let dataOb = req.body;
    res.json({
        mesage: "we successfully get your data",
        details: dataOb
    });
}

function sayhii(req,res,next){
    console.log('hiii') ;
    next();
}