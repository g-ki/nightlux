import mongoose from 'mongoose'

const { Schema } = mongoose;

const Tag = mongoose.model('Tag', {
  name: String,
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
});

export default Tag;
