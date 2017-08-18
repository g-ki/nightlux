import mongoose from 'mongoose';
import Joi from 'joi';

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

export const validService = Joi.object().keys({
  name: Joi.string().min(2).max(256).trim().required(),
  tags: Joi.array().items(Joi.string().min(1).lowercase().trim().token()).unique(),
  location: Joi.object().keys({
    address: Joi.string().min(4).max(256).required(),
    latitude: Joi.number(),
    longitude: Joi.number(),
  }).required(),
  description: Joi.string().trim().max(1000),
});
