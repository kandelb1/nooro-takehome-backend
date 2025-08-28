# Nooro Takehome Backend

Follow these steps to setup the backend correctly.

Install dependencies:
`npm install`

Make sure you have a MySQL database running on your computer and edit the MySQL connection string in `.env`.


Create and migrate the database, and then apply the seed at /prisma/seed
`npx prisma migrate dev --name init`

Run the backend:
`npm run dev`