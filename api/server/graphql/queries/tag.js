import Tag from '../../db/tag';

export default function tag(root, { id }) {
    return Tag.findById(id);
}
