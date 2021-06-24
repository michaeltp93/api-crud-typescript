import { Router } from 'express';
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

export const docRoutes = (router: Router) => {
	const fileContents = fs.readFileSync(path.resolve(__dirname, '../../swagger.yaml'), 'utf-8');

	const swaggerDoc = yaml.load(fileContents) as JsonObject;

	if (process.env.APP_URL) {
		swaggerDoc.host = process.env.APP_URL.replace(/https?:\/\//, '');

		if (process.env.APP_URL.includes('https//')) {
			swaggerDoc.schemes = ['https'];
		}
	}

	const swagger = swaggerUi.setup(swaggerDoc, {
		customSiteTitle: 'TypeScript CRUD API',
	});

	router.use(swaggerUi.serve);
	router.get('/', swagger);

	return router;
};
