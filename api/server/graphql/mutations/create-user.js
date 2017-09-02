import Joi from 'joi';
import { default as User, validUser } from '../../db/user';
import Tag from '../../db/tag';


async function createUser(root, { input }) {
  const result = Joi.validate(input, validUser);

  if (result.error !== null)
    throw result.error;

  const inputUser = result.value;

  const newUser = new User(inputUser);
  await newUser.save();
  console.log(newUser);

  return newUser;
}

export default createUser;
