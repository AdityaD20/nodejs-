const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res )=>{
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/html')
   
    console.log(req.url)
    if(req.url == '/hello'){
        res.statusCode =200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());

    }
    else if (req.url == '/about'){
        res.statusCode =200;
        res.end('<h1>This is CodewithAdi</h1> <p>  this is about page ! </p>');
}
else if (req.url == '/'){
    res.statusCode =200; 
res.end('<h1>This is CodewithAdi</h1> <p>  this is / page ! </p>');
}
else{
    res.statusCode = 404;
    res.end('<h1> 404 page error</h1> <p>  not found on server</p>');

}
    
})


server.listen( port, ()=>{
console.log(`server is listining on ${port }`);

});
