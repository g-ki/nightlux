import Joi from 'joi';
import { default as Tag } from '../../db/tag';


async function deleteTag(root, { id }) {
  console.log(`DELETE tag ${id}`);

  const response = await Tag.remove({ _id : id });
  if (response)
    return { id }

  return null;
}

export default deleteTag;
