express = require('express');
const app = express();
const mongoose = require('mongoose') ;

app.use(express.json());
app.listen(3000);

let user = {};
const userRouter = express.Router();

app.use('/auth/signup', userRouter);

userRouter.route('/')
    .get(sendile)
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




//we use mongoose to connect our this code with mongo db database 
// so wee use a property of mongoose 
//mongoose.connect(linkOfDatabase).then(callbackFunction)

const db_link ='mongodb+srv://akshat_k:ilovechemicalengineering@cluster0.6ugwfe3.mongodb.net/?retryWrites=true&w=majority' ;
mongoose.connect(db_link)
.then(function(db){
    console.log('database connected') ;
})
.catch(function(err){
    console.log(err);

})

// ----------general information------------
/*
in mongo db website we add 1 user named akshat_k only he can access any database which are created from my kakshat35@gmail.com account 
and also we add ip address from where only this user can access 
at present we add ip address open means from any where this user can access 
but when we deploy this code on server then we add that ip address only as we want that from there only this user can read and write
*/