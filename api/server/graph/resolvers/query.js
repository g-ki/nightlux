import Category from '../models/category';
import Place from '../models/place'

const Query = {
  categories() {
    return Category.find().populate('places');
  },
};

export default Query;
