import Joi from 'joi';
import Tag from '../../db/tag';

async function createTag(root, { name }) {
  const newTag = new Tag({ name: name.toLowerCase() });
  await newTag.save();

  return newTag;
}

export default createTag;
