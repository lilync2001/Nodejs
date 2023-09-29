import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.disable('x-powered-by')
app.use(json())
app.use(corsMiddleware()) // es un middleware
app.use('/movies',moviesRouter)

app.listen(1234, ()=>{
    console.log(`server listening on port http://localhost:${1234}`)
})
