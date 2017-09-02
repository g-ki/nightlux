import Joi from 'joi';
import { default as User } from '../../db/user';


async function deleteUser(root, { id }) {
  console.log(`DELETE User ${id}`);

  const response = await User.remove({ _id : id });
  if (response)
    return { id }

  return null;
}

export default deleteUser;
