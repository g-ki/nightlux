import mongoose from 'mongoose'

const { Schema } = mongoose;

const Service = mongoose.model('Service', {
  name: String,
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  location: {
    address: String,
    latitude: Number,
    longitude: Number,
  },
  description: String,
});

export default Service;
