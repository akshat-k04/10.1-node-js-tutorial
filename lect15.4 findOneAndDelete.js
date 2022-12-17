express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.listen(3000, () => {
    console.log('server is running at port 3000');
});


const userRouter = express.Router();

app.use('/auth/signup', userRouter);

userRouter.route('/')
    .get(sendile)
    .post(getdata, createUSer);

userRouter.route('/data')
    .post(sendalldata);


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

async function sendalldata(req, res) {
    let mail = req.body.email;
    let allus = await usermodl.findOneAndDelete({ email: mail });  //this allus will have previous data 
    res.json({
        message: "data is deleted , the deleted data is",
        data: allus
    })
    console.log(allus);
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
    }
});

//creating a model

const usermodl = mongoose.model('biodata', userinfo,);

async function createUSer(req, res) {
    let user = {
        name: req.body.name,
        email: req.body.emal,
        password: req.body.password
    };
    let data = await usermodl.create(user); // this line send the data in 'user' to database 

    console.log(data);
}
