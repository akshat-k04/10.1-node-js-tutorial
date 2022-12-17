express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.listen(3000);

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




const db_link = 'mongodb+srv://akshat_k:ilovechemicalengineering@cluster0.6ugwfe3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
    .then(function (db) {
        console.log('database connected');
    })
    .catch(function (err) {
        console.log(err);

    });


// creating a schema
const userinfo =mongoose.Schema({
    name: {
        type:String ,
        required : true 
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
});

//creating a model

const usermodl = mongoose.model('biodata',userinfo); 
// we created a model which send and recive data as  userinfo datatype
// this biodata is the name of storage area in our project where this info is going to store

// lets make a function which take 
(async function createUSer(){
    let user ={
        name :'khandelwal',
        email:'kakshat@gmail.com',
        password:'hello'
    };
    let data = await usermodl.create(user) ; // this line send the data in 'user' to database 

    console.log(data) ;
})() ;
// we write above createUSer function in (createUSer function)()
//because to run function we have to call it 
// but if we don't want to call the function but we want that as the code run the function then we write function in ()()
