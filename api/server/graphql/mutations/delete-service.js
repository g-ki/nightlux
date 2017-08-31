import Joi from 'joi';
import { default as Service, validService } from '../../db/service';


async function deleteService(root, { id }) {
    console.log(`DELETE service ${id}`);

    return Service.deleteOne({ _id : id });
}

export default deleteService;
