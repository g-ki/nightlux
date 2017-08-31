export default {
  async tags(service) {
    await service.populate('tags').execPopulate();
    return service.tags;
  }
};
