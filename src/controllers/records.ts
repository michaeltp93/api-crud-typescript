import { Request, Response } from 'express';

export const recordsController = () => {
	const getAll = async (req: Request, res: Response) => {
		res.send('all records will be returned');
	};

	const getOne = async (req: Request, res: Response) => {
		res.send('all records will be returned');
	};

	const create = async (req: Request, res: Response) => {
		res.send('all records will be returned');
	};
	const update = async (req: Request, res: Response) => {
		res.send('all records will be returned');
	};

	const remove = async (req: Request, res: Response) => {
		res.send('all records will be returned');
	};

	return { getAll, getOne, create, update, remove };
};
