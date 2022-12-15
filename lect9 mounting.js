//Routing refers to how an application’s endpoints(URIs) respond to client requests

express = require('express') ;
const app = express() ;

app.use(express.json()) ;
app.listen(3000) ;

let user = {} ;

// now lets create a router 
const userRouter= express.Router() ;

app.use('/user',userRouter) ;// this line means that when the req come on the url maintioned  userRouter router runs

//now lets make route for router userRouter 
//it means we made the car but now we mill make the results which the car carry and sendto clint
userRouter.route('/')  //we use '/' because base url is now '/user' as we write above while useing app.use
.get(getu)
.post(postu)
.patch(updateu)
.delete(deleteu) ;

// route for parameters
userRouter.route('/:id')
.get(paraget)
//we can make all 4 req but i not making now 

function getu (req, res){
    res.send(user);
}
function postu(req, res) {
    console.log(req.body);
    user = req.body;

    res.send({
        message: "data received successfully",
        infoOFuserData: req.body
    });
}
function updateu(req, res) {
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated successfully",
        userData: user
    });
}
function deleteu(req, res) {
    user = {};
    res.json({
        message: 'data has been deleted'
    })
}
function paraget(req,res){
    res.send("user name is ");
    console.log(req.params);
    console.log(req.params.id);
}