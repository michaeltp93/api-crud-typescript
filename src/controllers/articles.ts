import { getRepository } from 'typeorm';
import { recordsController } from './records';
import { Article } from '../entity/Article';

export const articlesCtr = () => {
	const repository = getRepository(Article);
	return recordsController<Article>(repository);
};
