import User from '../../db/user';

export default function user(root, { id }) {
    return User.findById(id);
}
