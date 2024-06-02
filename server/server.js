const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const db_name = "Song_collection";
const url = `mongodb://127.0.0.1:27017/${db_name}`;

// Connect to MongoDB
mongoose.connect(url)
  .then(() => {
    console.log(`Connected to MongoDB database - ${db_name}`);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const SongSchema = new mongoose.Schema({
    title: String,
    notes: [String]
})

const Chords = new mongoose.model('chords',SongSchema)

const app = express()

app.use(cors()) 


app.get('/:songName', async (req, res) => {
  const { songName } = req.params;

  try {
    const result = await Chords.findOne({ title: songName }, { notes: 1, _id: 0 });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// app.get('/',async (req,res)=>
// {
//   try{
//       // const docs = await Chords.find({})
//       const result = await Chords.find({}, { notes: 1, _id: 0 }); 
//       res.json(result);
//       // const result = JSON.stringify(docs)
//       // res.json(result)
//       // res.json(docs)
//   }
//   catch(err)
//   {
//     res.status(500).json({err: "Internal Server Error"})
//   }
// })

app.listen(8080,()=>
{
    console.log('Server Running on port 8080')
})