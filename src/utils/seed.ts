import { createConnection, getRepository } from 'typeorm';
import { Author } from '../entity/Author';
import seed from './seed.json';

createConnection()
	.then(async () => {
		const authorReposity = getRepository(Author);

		seed.authors.map(async author => await authorReposity.save(author));
	})
	.catch(err => console.log(err));
