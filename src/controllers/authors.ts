import { getRepository } from 'typeorm';
import { Author } from '../entity/Author';
import { recordsController } from './records';

export const authorsCntrl = () => {
	const repository = getRepository(Author);

	return recordsController<Author>(repository);
};
