const http=require('http');
const fs=require('fs')
const path=require('path')
const hostname='localhost';
const port =3000;

const server=http.createServer((req,res)=>{
    console.log(req.headers);
    console.log("Request for: "+req.url+" by method"+req.method);

    if(req.method=='GET'){
        let fileUrl;
        if(req.url=='/') fileUrl='/index.html'
        else fileUrl=req.url;

        let filePath =path.resolve('./public'+fileUrl);
        const fileExt= path.extname(filePath);

        if(fileExt=='.html'){
            fs.exists(filePath,(stat)=>{
                if(!stat){
                    res.statusCode=404;
                    res.setHeader('Content-type','Text/html')
                    res.end('<html><body><h1>Error 404, el archivo '+filePath+' no existe</h1></body></html>')
                    return;
                }
                res.statusCode=200;
                res.setHeader('Content-type', 'text/html')
                fs.createReadStream(filePath).pipe(res)
            });
        }else{
            res.statusCode=404;
            res.setHeader('Content-type','Text/html')
            res.end('<html><body><h1>Error 404, el archivo '+filePath+' no es un HTML</h1></body></html>')
            return;
        }
    }else{
        res.statusCode=404;
        res.setHeader('Content-type','Text/html')
        res.end('<html><body><h1>Error 404,'+req.method+' not supported</h1></body></html>')
        return;
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})
