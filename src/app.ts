import express from 'express';
import cors from 'cors';
import { articlesRoutes } from './routes/articles';
import { authorsRoutes } from './routes/authors';
import { rateLimiter } from './middlewares/rateLimiter';
import { docRoutes } from './routes/docs';

export const app = async (port: number) => {
	const app = express();
	app.use(express.json());
	app.use(cors());
	app.use(rateLimiter);
	app.set('trust proxy', 1);

	const router = express.Router();
	app.use(articlesRoutes(router));
	app.use(authorsRoutes(router));
	app.use(docRoutes(router));

	// start server
	app.listen(port, () => console.log('Server running on PORT:', port));
};
