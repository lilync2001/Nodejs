import pg from 'pg';

const config = {
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '12345678',
    database: 'db_movies'
};

 const client =  new  pg.Client(config);

 async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Conexión exitosa a PostgreSQL');
        
        // Realiza tus consultas y operaciones aquí
    
        
        await client.end(); // Cierra la conexión cuando hayas terminado
    } catch (error) {
        console.error('Error de conexión:', error);
    }
} 

connectToDatabase(); 
 
export class MovieModel{
    static async getAll  ({genre}){
        console.log('getAll')
        const result = await client.query(
            'SELECT id, title, year, director, duration, poster, rate FROM movie;'
        )

    console.log(result.rows) 
       
   }

   static async getById({id}){
       
   }

   static async create (req,res){
       
   }

   static async delete (req,res){
       
   }

   static async update(req, res){   
       
   }

}