import z from 'zod' //validaciones tipos de datos
//validar
const movieSchema=z.object({
    title:z.string({
        invalid_type_error:'Debe ser un string',
        required_error:'El titulo es requerido'
    }),
    year: z.number().int().positive(),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10),
    poster:z.string().url(),
    genre: z.array(z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']))
   })

export function validateMovie(object){
    return movieSchema.safeParse(object)
}

export function validatePartialMovie(object){
    return movieSchema.partial().safeParse(object)
}

