const express = require('express') ;
const app = express() ;
app.listen(3000,(req,res)=>{
    console.log('server is listening on port 3000');
});

app.get('/', (req, res) => {
    console.log('hello boi');
    res.send('<h1>Hello</h1>');
});

app.get('/alert', (req, res) => {
    console.log('hello boi');
    res.sendFile('./htmlfiles/about.html',{root:__dirname}); // we have to send the absolute path to it 
    // if we not want to send the absolute path then write relative path and write the root:directory where this code is present means this file

});
app.get('/bio', (req, res) => {
    console.log('hello boi');
    res.sendFile('C:/Users/HP/programming/10 node js/node js tut/htmlfiles/tp_index.html');
});

// syntax is res,sendfile('relative url' , callback function)

//redirect
app.get('/about-me', (req, res) => {
    console.log('hello boi');
    res.redirect('/alert');
});

//404 pge
app.use((req, res)=>{
    res.status(404).sendFile('./htmlfiles/404pg.html',{root:__dirname}) ;
})
