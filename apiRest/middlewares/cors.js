import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:1234',
    'https://movies.com',
    'https://midu.dev'
]

export const corsMiddleware = ({acceptedOrigins = ACCEPTED_ORIGINS}={}) => cors({
   // console.log('prueba', acceptedOrigins)
    origin: (origin, callback) => {
        
    if(acceptedOrigins.includes(origin)){
        return callback(null, true)
    }

    if(!origin){
        return callback(null, true)
    }
    
    return callback(new Error('Not alowed by CORS'))
    }
})