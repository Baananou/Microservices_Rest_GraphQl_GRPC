const mongoose = require('mongoose');

// Connect to the MongoDB database
if (mongoose.connect('mongodb+srv://baananou:baananou@cluster1.a8kimmf.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })) {
    console.log("Connected");
}


// Define the schema for the movie object
const movieSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Define the schema for the tvShow object
const tvShowSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Create models from the schemas
const Movie = mongoose.model('Movie', movieSchema);
const TVShow = mongoose.model('TVShow', tvShowSchema);
