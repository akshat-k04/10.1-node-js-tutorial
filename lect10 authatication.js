express = require('express') ;
const app = express() ;

app.use(express.json());
app.listen(3000);

//let user = {};
const userRouter = express.Router();

app.use('/auth/signup', userRouter);

userRouter.route('/')
.get(sendile)
.post(getdata);

function sendile(req, res){
    res.sendFile('./htmlfiles/tp_index.html', { root: __dirname });
}
function getdata(req, res){
    console.log(req.body) ;
    let dataOb= req.body ;
    res.json({
        mesage: "we successfully get your data",
        details : dataOb 
    });
}