import pg from 'pg';

const config = {
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '12345678',
    database: 'db_movies'
};

 const client =  new pg.Client(config);

/*  await client.connect()
 .then(() => console.log('Conexión exitosa'))
 .catch(err => console.error('Error al conectar:', err)); */

    export class MovieModel {
        static async getAll({ genre }) {
            const result = await client.query('SELECT * FROM movie');
            console.log(result);
        }
    }

    /*  client.query('SELECT * FROM movie')
  .then(result => {
    console.log(result.rows);
  })
  .catch(err => {
    console.error('Error al ejecutar la consulta:', err);
  });
 */
   /* static async getById({id}){
       
   }

   static async create (req,res){
       
   }

   static async delete (req,res){
       
   }

   static async update(req, res){   
       
   } */

