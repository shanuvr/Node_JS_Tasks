import http from 'http'
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    if(req.url=='/add')
res.end('<p>hello</p>')
    else
    res.end('<h1>else case</h1>')
})

server.listen(3000)