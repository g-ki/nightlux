import Service from '../../db/service';

export default function tags(root, args) {
  const { query = "", geoQuery = null, offset = 0, limit = 18 } = args;

  if (geoQuery) {
    const coords = geoQuery.split(',');
    console.log('search near: ', coords[0], coords[1]);

    return Service.find({
      'location.coords': {
        $near: coords,
        $maxDistance: 5,
      },
      name: { $regex: `${query}`, $options: 'i' },
    }).skip(offset).limit(limit);
  }

  return Service.find({ name: { $regex: `${query}`, $options: 'i' } }).skip(offset).limit(limit);
}
