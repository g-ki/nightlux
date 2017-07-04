import Category from '../models/category'

export default {
  async addCategory(root, { name }) {
    const newCategory = new Category({ name });
    await newCategory.save();

    return newCategory;
  }
}
