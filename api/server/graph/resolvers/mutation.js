import Tag from '../models/tag'
import Service from '../models/service'

export default {
  async addTag(root, { name }) {
    const newTag = new Tag({ name: name.toLowerCase() });
    await newTag.save();

    return newTag;
  },


  async addService(root, { input }) {
    const location = {
      address: input.address,
      latitude: 90 * Math.random(),
      longitude: 180 * Math.random(),
    };
    // TODO: use google api to resolve address to geo coords

    const inputTags = input.tags
        .filter(t => t.trim().length > 0)
        .map(t => t.trim().toLowerCase());

    // check for new tags and create them
    let tags = await Tag.find({
      name: { $in: inputTags },
    }).exec();

    // create missing tags
    const tagsName = tags.map(t => t.name);
    let missingTags = inputTags.filter(t => tagsName.indexOf(t) < 0);
    console.log(missingTags);

    let pQueue = missingTags.map(t => {
      const newT = new Tag({ name: t });
      return newT.save();
    });
    missingTags = await Promise.all(pQueue);

    tags = tags.concat(missingTags);

    const newService = new Service({
      name: input.name.trim(),
      location,
      tags,
      description: input.description.trim(),
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
}
