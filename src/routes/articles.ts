import { Router } from 'express';
import { articlesCtr } from '../controllers/articles';

export const articlesRoutes = (router: Router) => {
	const { getAll, getOne, create, update, remove } = articlesCtr();

	router.get('/articles', getAll);
	router.get('/articles/:id', getOne);
	router.post('/articles', create);
	router.put('/articles/:id', update);
	router.delete('/articles/:id', remove);

	return router;
};
