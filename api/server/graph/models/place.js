import mongoose from 'mongoose'

const { Schema } = mongoose;

const Place = mongoose.model('Place', {
  name: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  location: {
    name: String,
    coords: {
      latitude: Number,
      longitude: Number,
    },
  },
});

export default Place;
