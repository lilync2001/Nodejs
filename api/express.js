const ditto= require('./pokemon/ditto.json')
const express= require('express')

const app=express()
app.disable ('x-powered-by')

//middleware puede ir entre rutas o al final 

app.use((req,res,next)=>{
  if(req.method != 'POST') return next()
  if(req.headers['content-type']!= 'application/json') return next()
  //solo se llegan request con POST y content-type: json
  
  let body =''
  //escuchar el evento data
  req.on('data', chunk =>{
      body+=chunk.toString()
  })

  req.on('end',()=>{
      const data=JSON.parse(body)
      data.timestamp=Date.now()

      //mutar la request y meter la informacion en el req body

      req.body=data
      next()
  })
})


app.get('/pokemon/ditto',(req,res) => {
    res.json(ditto)
})

app.post('/pokemon', (req,res)=>{
    res.status(201).json(req.body)
})

app.use((req,res)=>{
    res.status(404).send('<h1>Not found</h1>')
})

app.listen(1234, ()=>{
    console.log(`server listening on port http://localhost:${1234}`)
})