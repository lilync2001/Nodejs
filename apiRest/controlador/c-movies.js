import { MovieModel } from '../modelo/postgres/movie.js'
//import { MovieModel } from '../modelo/local-file-system/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movie.js'

export class MovieController{
    static async getAll  (req, res){
         const{genre}= req.query
         const movies = await MovieModel.getAll({genre})
         res.json(movies)
    }

    static async getById(req,res){
        const {id}=req.params 
        const movie = await MovieModel.getById({id})     
        if(movie) return res.json(movie)
          res.status(404).json({mesage: 'Not found'})
    }

    static async create (req,res){
        const result = validateMovie(req.body)
   
        if(result.error){
            return res.status(400).json({error: JSON.parse (result.error.mesage)}) //400 bad request
        }
    
        const newMovie= await MovieModel.create(result.data)
    
        res.status(201).json(newMovie) //actualizar la cache del cliente 
    }

    static async delete (req,res){
        const { id } = req.params
    
        const result= await MovieModel.delete({id})
    
        if (result === false) {
            return res.status(404).json({ message: 'Movie not found' })
        }
    
        return res.json({ message: 'Movie deleted' })
    }

    static async update(req, res){   
        const result = validatePartialMovie (req.body)
        if(result.error){
            return res.status(400).json({error: JSON.parse (result.error.mesage)}) //400 bad request
        }
    
        const {id}= req.params
        const updateMovie = await MovieModel.update({id,input:result.data})
      
        return res.json(updateMovie)
    }

}