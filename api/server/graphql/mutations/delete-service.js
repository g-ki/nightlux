import Joi from 'joi';
import { default as Service } from '../../db/service';


async function deleteService(root, { id }) {
  console.log(`DELETE service ${id}`);

  const response = await Service.remove({ _id : id });
  if (response)
    return { id }

  return null;
}

export default deleteService;
