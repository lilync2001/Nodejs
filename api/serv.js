const http = require('node:http')
const desiredPort= process.env.PORT ?? 3000

const processRequest = (req,res) => {
    if(req.url == '/'){
        res.statusCode=200 //ok
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        res.end('Bienvenido a la página de inicio')
    }
} //callback funcion que se ejecuta
 
const server = http.createServer(processRequest)

//escuchar un servidor en un puerto
server.listen(desiredPort, ()=>{
    //console.log('server listening on port 3000')
    console.log(`server listening on port http://localhost:${desiredPort}`)
})

