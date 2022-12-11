const express = require('express');
const app = express() ;
app.use(express.json());//middle way fucntion which is used to convert post req data to json
app.listen(3000) ;


let user={} ;
// app.get('/users',(req,res)=>{
//     res.send(user);
// })
app.get('/users',(req,res)=>{
    res.send(user.name);
})
app.post('/users',(req,res)=>{
    console.log(req.body) ;
    user = req.body;
    res.send({
        message: "data received successfully",
        infoOFuserData: req.body 
    });
})
// now when we make post req through postman or any frontend app it should be noted that the datawhich we want to send is comes in body of request
// that is why we get data in req.body in console