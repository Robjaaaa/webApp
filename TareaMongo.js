const mongoose = require('mongoose');

// Connection URL and database name
mongoose.connect('mongodb+srv://User1:Messi1@mydatabase1.50zygv4.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const dbName = 'MyDataBase1';

// Define a MongoDB model for your data
const Task = mongoose.model('Task', {
  name: String,
  email: String,
  ID: String,
  phone: String,
  gender: String,
  age: String,

});

// Data to insert into the database
const dataToInsert = {
  name: 'Roberto Anchía',
  email: 'roberto.anchia@ucreativa.com',
  ID: '7',
  phone: '89394428',
  gender: 'Male',
  age: '26',
  
};

// Connect to the server and insert data
mongoose.connection.once('open', () => {
  console.log('Connected successfully to MongoDB');
  const db = mongoose.connection.db;

  // Get the collection (or create it if it doesn't exist)
  const collection = db.collection('tasks');

  // Insert a single document
  collection.insertOne(dataToInsert, (insertErr, result) => {
    if (insertErr) {
      console.error('Error inserting document:', insertErr);
    } else {
      console.log('Document inserted successfully');
    }

    // Close the connection
    mongoose.connection.close();
  });
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});
