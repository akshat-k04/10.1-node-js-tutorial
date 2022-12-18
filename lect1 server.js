//server creation

// 1. http module 
const http = require('http') ;

//now when ever the req. come this function run let is called as server
const server= http.createServer((req, res)=>{
    console.log('request has been made from browser to server') ;
    //console.log(req.method);

    //lets send the response
    res.setHeader('content-Type','text/html');
    res.write('<h1>hello,user!</h1>');
    res.end(); //lets end the response
});


//the above function run when the req comes now who will say that we get req 
// so for listening the req. we make method listen
server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000') ;
});


// story till now when we start the server the start listening so we get  'server is listening on port 3000' in console
// now when we run the page means what we req the page So, server.listen tell that we get req so createserver will run and we get 'request has been made from browser to server' 


// ******server.listen*****
//it has info about host, port,and call back function


// to run file on terminal use "node lect1 server.js" or "nodemon lect1 server.js"