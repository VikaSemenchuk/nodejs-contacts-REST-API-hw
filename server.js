const mongoose = require('mongoose');
const app = require('./app')

const DB_HOST = 'mongodb+srv://Victoria_dev:6kUWS1l4TS7rhNZE@cluster0.f7vfy3b.mongodb.net/Phonebook?retryWrites=true&w=majority'

mongoose.connect(DB_HOST)
.then(() => {
  console.log("Database connection successful");

  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000")
  });
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
})





