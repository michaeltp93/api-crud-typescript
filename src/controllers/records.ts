import { Request, Response } from 'express';
import { Repository } from 'typeorm';

export const recordsController = <T>(repository: Repository<T>) => {
	const getAll = async (_: Request, res: Response) => {
		const results = await repository.find();
		return res.send(results);
	};

	const getOne = async (req: Request, res: Response) => {
		const { id } = req.params;
		const results = await repository.findOne(id);
		return res.send(results);
	};

	const create = async (req: Request, res: Response) => {
		const record = repository.create(req.body);
		const results = await repository.save(record);
		return res.send(results);
	};
	const update = async (req: Request, res: Response) => {
		const { id } = req.params;
		const record = await repository.findOne(id);

		repository.merge(record, req.body);

		const results = await repository.save(record);
		return res.send(results);
	};

	const remove = async (req: Request, res: Response) => {
		const { id } = req.params;
		const results = await repository.delete(id);
		return res.send(results);
	};

	return { getAll, getOne, create, update, remove };
};
