import Tag from '../../db/tag';

export default function tags(root, args) {
  const { categoriesOnly, name = "", offset = 0, limit = 18 } = args;

  return Tag.find({ name: { $regex: `^${name}` } }).skip(offset).limit(limit);
}
