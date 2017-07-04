import mongoose from 'mongoose'

const { Schema } = mongoose;

const Category = mongoose.model('Category', {
  name: String,
  places: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
});

export default Category;
