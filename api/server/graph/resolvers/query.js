import Tag from '../models/tag';
import Service from '../models/service'

const Query = {
  tags(root, { categoriesOnly }) {
    return Tag.find().populate('services');
  },


  tag(root, { id }) {
    return Tag.findById(id).populate('services');
  },


  service(root, { id }) {
    return Service.findById(id).populate('tags');
  }
};

export default Query;
