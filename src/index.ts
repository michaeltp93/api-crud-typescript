import { config as configEnv } from 'dotenv';
import { createConnection } from 'typeorm';
import { app } from './app';

configEnv();

const port = parseInt(process.env.PORT);

const run = async () => {
	const connection = await createConnection();
	await app(port);
};

run();
