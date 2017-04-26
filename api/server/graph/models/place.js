import mongoose from 'mongoose'

const Place = mongoose.model('Place', {
  name: String,
  location: {
    name: String,
    coords: {
      latitude: Number,
      longitude: Number,
    }
  }
});

export default Place;
