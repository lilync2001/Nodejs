const express = require('express')
const movies = require('./movie.json')
const crypto = require('node:crypto')
const app = express()
app.disable('x-powered-by')
app.use(express.json())

//todos los recursos que sean moovies se indentifican como /movies
app.get('/movies', (req,res)=>{
    const{genre}= req.query
    if(genre){
    const filterMovies = movies.filter(
        movie=> movie.genre.some(g=>g.toLowerCase()== genre.toLowerCase())
    )
    return res.json(filterMovies)
    }
    res.json(movies)
})

//para recuperar por el id
app.get('/movies/:id',(req,res)=>{
    const {id}=req.params 
    const movie = movies.find(movie => movie.id ==id)
    if(movie) return res.json(movie)
      res.status(404).json({mesage: 'Not found'})
})

app.post('/movies', (req, res) => {    
   console.log(req.body)
    const{
        title,
        genre,
        year,
        director,
        duration,
        rate,
        poster
    } = req.body
      
    const newMovie ={
        id:crypto.randomUUID(),
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate
    }
    //cambiar luego 
    movies.push(newMovie)
    res.status(201).json(newMovie) //actualizar la cache del cliente
})

app.listen(1234, ()=>{
    console.log(`server listening on port http://localhost:${1234}`)
})
