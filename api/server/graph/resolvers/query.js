import Tag from '../models/tag';
import Service from '../models/service'

const Query = {
  tags(root, { categoriesOnly }) {
    return Tag.find();
  },


  tag(root, { id }) {
    return Tag.findById(id);
  },


  service(root, { id }) {
    return Service.findById(id);
  }
};

export default Query;
