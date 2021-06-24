import { config as configEnv } from 'dotenv';
import { app } from './app';

configEnv();

const port = parseInt(process.env.PORT);

const run = async () => {
	await app(port);
};

run();
