const http = require('http');
const fs = require('fs') ; // fs means file system this module helps you to work with the file in the computer

//let us also edit the status code
// basically status code tell us message eg:- 200 means the req you send to us in response to tht we give you .... , 404 means the req you send we couldnt able to send to the result so we send this default file



const server = http.createServer((req, res) => {
    console.log('request has been made from browser to server');

    res.setHeader('content-Type', 'text/html');


    let path ='./htmlfiles';
    switch(req.url){
        case '/':
            path+='/tp_index.html';
            res.statusCode(200);
            break ;
        case '/alert':
            path+='/about.html';
            res.statusCode(200);

            break ;
        default :
            path+= '/404pg.html';
            res.statusCode(404);

            break;
    }
    fs.readFile(path,(err , filecode)=>{
        if(err){
            console.log(err) ;
        }
        else {
            res.write(filecode) ;
            res.end() ;
        }
    }) ;  // readfile has 2 values 1 is file location and other is call back function means what to do after reading

});





server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000');
});

