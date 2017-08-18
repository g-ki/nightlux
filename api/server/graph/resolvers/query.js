import Tag from '../models/tag';
import Service from '../models/service'

const Query = {
  tags(root, { categoriesOnly, name = "", offset = 0, limit = 18 }) {
    return Tag.find({ name: { $regex: `^${name}` } }).skip(offset).limit(limit);
  },


  tag(root, { id }) {
    return Tag.findById(id);
  },


  service(root, { id }) {
    return Service.findById(id);
  }
};

export default Query;
