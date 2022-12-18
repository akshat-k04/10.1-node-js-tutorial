/*   hooks
used to do some operation before and after send the data to the database 
// basically we can also use function but using hook reduce our logic to write if else 
//also 1 advantage of using hooks is 
1 .in pre hook we can access the full req oobject from using "this" if we use console.log(this) then we get full req object as per schema order
or if we want to get specific tdata use this.name , this.email etc
2 . in post hook we are given with argument in callback function which is object and we can access that as shown below
*/

express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.listen(3000);


const userRouter = express.Router();

app.use('/auth/signup', userRouter);

userRouter.route('/')
    .get(sendile)
    .post(getdata, createUSer);

function sendile(req, res) {
    res.sendFile('./htmlfiles/tp_index.html', { root: __dirname });
}
function getdata(req, res, next) {
    console.log(req.body);
    let dataOb = req.body;
    res.json({
        mesage: "we successfully get your data",
        details: dataOb
    });
    next();
}




const db_link = 'mongodb+srv://akshat_k:ilovechemicalengineering@cluster0.6ugwfe3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
    .then(function (db) {
        console.log('database connected');
    })
    .catch(function (err) {
        console.log(err);

    });


// creating a schema
const userinfo = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword:{
        type:String ,
        required: true 
    }
});

userinfo.pre('save',function(){
    console.log('before saving in data base',this);
})
userinfo.post('save', function (boiData) {
    console.log('after saving in data base',boiData);
})

//creating a model

const usermodl = mongoose.model('biodata', userinfo,);

async function createUSer(req, res) {
    let user = {
        name: req.body.name,
        email: req.body.emal,
        password: req.body.password,
        confirmPassword:req.body.con
    };
    console.log("p") ;
    let data = await usermodl.create(user); // this line send the data in 'user' to database 

    console.log(data);
}
