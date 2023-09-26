const http = require('node:http')

const request = http.createServer((req,res) => {
    console.log('request received')
    res.end('Hola Mundo')
}) //callback funcion que se ejecuta
 
const server = http.createServer(request)

//escuchar un servidor en un puerto
server.listen(0, ()=>{
    //console.log('server listening on port 3000')
    console.log(`server listening on port http://localhost:${server.address().port}`)
})

