const http = require('http');
const fs = require('fs') ; // fs means file system this module helps you to work with the file in the computer




const server = http.createServer((req, res) => {
    console.log('request has been made from browser to server');

    res.setHeader('content-Type', 'text/html');
    //res.write('<h1>hello,user!</h1>');

    let path ='./htmlfiles';
    switch(req.url){
        case '/':
            path+='/tp_index.html';
            break ;
        case '/alert':
            path+='/about.html';
            break ;
        default :
            path+= '/404pg.html';
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

