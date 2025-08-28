# Nooro Takehome Backend

Follow these steps to setup the backend correctly.

Install dependencies:
`npm install`

Make sure you have a MySQL database running on your computer. Update the connection string in `.env` with your username, password, and optionally port number and database name.


Create and migrate the database:
`npx prisma migrate dev --name init`

(*OPTIONAL*) Seed the database:
`npm run seed`

Run the backend:
`npm run dev`