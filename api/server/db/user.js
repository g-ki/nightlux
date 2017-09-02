import mongoose from 'mongoose';
import Joi from 'joi';

const { Schema } = mongoose;

const User = mongoose.model('User', {
  email: String,
  password: String,
  role: String,
});

export default User;

export const validUser = Joi.object().keys({
  email: Joi.string().min(2).max(256).trim().required(),
  password: Joi.string().min(6).max(32),
  role: Joi.string(),
});
