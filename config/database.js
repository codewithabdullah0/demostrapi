
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceuhklqrrk0bnku469g0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'sample_8ldg'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'CL1YLVHKLljp8uqIYlutYnK9McDbIQbe'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});


