const http = require('node:http')
const desiredPort= process.env.PORT ?? 3000
const fs = require ('node:fs')

/* const processRequest = (req,res) => {
    if(req.url == '/'){
       // res.statusCode=200 //ok
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end('<h1>Bienvenido a la página de inicio<h1>')
    }else if(req.url == '/contacto'){
      //res.statusCode=200 //ok
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end('<h1>Contacto<h1>')
    }
    else{
        res.statusCode=404 //not found
         res.end('<h1>404<h1>')
     }

} //callback funcion que se ejecuta
  */

const processRequest = (req,res) => {
    res.setHeader('Content-Type','text/html; charset=utf-8') 
    if(req.url == '/'){
        res.end('<h1>Bienvenido a la página de inicio<h1>')
    }else if(req.url == '/imagen'){ 
        fs.readFile('./prueba.jpg', (err, data)=> {
            if(err){
                res.statusCode=500
                res.end('<h1>500 internal error<h1>')
            }else{
                res.setHeader('Content-Type','image/jpg')
                res.end(data)
            }
        })
    }
    else{
        res.statusCode=404 //not found
        res.end('<h1>404<h1>')
    }
} 


const server = http.createServer(processRequest)

//escuchar un servidor en un puerto
server.listen(desiredPort, ()=>{
    //console.log('server listening on port 3000')
    console.log(`server listening on port http://localhost:${desiredPort}`)
})

