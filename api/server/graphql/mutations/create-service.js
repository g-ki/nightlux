import Joi from 'joi';
import { default as Service, validService } from '../../db/service';
import Tag from '../../db/tag';


async function createService(root, { input }) {
  const result = Joi.validate(input, validService);

  if (result.error !== null)
    throw result.error;

  const inputService = result.value;

  // check for new tags and create them
  let tags = await Tag.find({
    name: { $in: inputService.tags },
  }).exec();

  // create missing tags
  const tagsName = tags.map(t => t.name);
  let missingTags = inputService.tags.filter(t => tagsName.indexOf(t) < 0);
  console.log(missingTags);

  let pQueue = missingTags.map(t => {
    const newT = new Tag({ name: t });
    return newT.save();
  });
  missingTags = await Promise.all(pQueue);

  tags = tags.concat(missingTags);

  const newService = new Service({
    ...inputService,
    tags: tags,
  });
  await newService.save();
  console.log(newService);

  // add the service to all tags
  await Promise.all(
    newService.tags.map(t => {
      t.services.push(newService);
      return t.save()
    })
  );

  return newService;
}

export default createService;
