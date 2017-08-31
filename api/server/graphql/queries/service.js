import Service from '../../db/service';

export default function service(root, { id }) {
  return Service.findById(id);
}
