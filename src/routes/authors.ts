import { Router } from 'express';
import { authorsCntrl } from '../controllers/authors';

export const authorsRoutes = (router: Router) => {
	const { getAll, getOne, create, update, remove } = authorsCntrl();

	router.get('/authors', getAll);
	router.get('/authors/:id', getOne);
	router.post('/authors', create);
	router.put('/authors/:id', update);
	router.delete('/authors/:id', remove);

	return router;
};
