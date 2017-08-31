import Service from '../../db/service';

export default function tags(root, args) {
  const { query = "", offset = 0, limit = 18 } = args;

  return Service.find({ name: { $regex: `^${query}`, $options: 'i' } }).skip(offset).limit(limit);
}
