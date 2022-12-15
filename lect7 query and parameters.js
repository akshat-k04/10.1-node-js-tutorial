//parameters are sent in url at the last as we see
// eg:- instagram/profile/:akshat_k.0435 so akshat_k.0435 is parameter and on the basis of this we get results

//queries are used for data filtering
// eg:- instagram/profile/:akshat_k.0435?dob=04/10/2003, ?dob=04/10/2003 is called query

const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('server is listening on port 3000');  
});


let user = {
    "id":1 ,
    "name": "aastha",
    "surname": "kahndelwal"
    
};
//let databas={} ;
app.get('/users', (req, res) => {
    res.send(user);
})
app.post('/users', (req, res) => {
    console.log(req.body);
    user = req.body;
    
    res.send({
        message: "data received successfully",
        infoOFuserData: req.body
    });
})

app.patch('/users', (req, res) => {
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated successfully",
        userData: user
    });
})
// to delete the data
app.delete('/users', (req, res) => {
    user = {};
    res.json({
        message: 'data has been deleted'
    })
})

app.get('/users/:id',(req,res)=>{
    res.send("user name is " ) ;
    console.log(req.params.id);
})