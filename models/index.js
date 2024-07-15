import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)




const uri = "mongodb+srv://rajeshpriyait123:Rithvik123@cluster0.wd3h89m.mongodb.net/Divine_Bharat";
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert test code or check if you can retrieve data
    // Example:
    const db = mongoose.connection;
    db.collection('collectionName').findOne({}, (err, result) => {
      if (err) {
        console.error('Error querying MongoDB:', err);
      } else {
        console.log('Found document:', result);
      }
      mongoose.connection.close();
    });
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));

  export default mongoose