import Category from '../models/category';
import Place from '../models/place'

const Query = {
  categories() {
    return Category.find().populate('places');
  },
  category(root, { id }) {
  return Category.findById(id).populate('places');
  }
};

export default Query;
