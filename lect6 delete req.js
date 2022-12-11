// if want to do update req then we nees to give patch request

const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000);


let user = {};

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
app.delete('/users' , (req, res)=>{
    user = {} ;
    res.json({
        message : 'data has been deleted'
    })
})