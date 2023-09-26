const http = require('node:http')

const dittoJSON= require('./pokemon/ditto.json')

const processRequest = (req,res) => {
   const {method, url} =req
    switch (method){
        case 'GET':
            switch(url){
                case '/pokemon/ditto':
                    res.setHeader('Content-Type','application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode=404
                    res.setHeader('Content-Type','text/html; charset=utf-8')
                    return res.end('404')
            }
    
    case 'POST':
        switch(url){
            case '/pokemon':
                let body =''
        }
    }
}



const server = http.createServer(processRequest)
server.listen(desiredPort, ()=>{
    //console.log('server listening on port 3000')
    console.log(`server listening on port http://localhost:${desiredPort}`)
})

