export default {
  async services(tag) {
    await tag.populate('services').execPopulate();
    return tag.services;
  }
};
