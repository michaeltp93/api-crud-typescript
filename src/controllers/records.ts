import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

export const recordsController = <T>(repository: Repository<T>) => {
	const wrap = (fn: Function) => {
		return (req: Request, res: Response) => {
			fn(req, res).catch((e: Error) => {
				res.status(400).send(e);
			});
		};
	};

	const getAll = wrap(async (req: Request, res: Response) => {
		const results = await repository.find(req.query);
		return res.send(results);
	});

	const getOne = wrap(async (req: Request, res: Response) => {
		const { id } = req.params;
		const results = await repository.findOne(id, req.query);
		return res.send(results);
	});

	const create = wrap(async (req: Request, res: Response) => {
		const record = repository.create(req.body);
		const validation = await validate(record);
		if (validation.length) {
			return res.status(422).send({ validation });
		}

		const results = await repository.save(record);
		return res.send(results);
	});

	const update = wrap(async (req: Request, res: Response) => {
		const { id } = req.params;
		const record = await repository.findOne(id);

		repository.merge(record, req.body);

		const results = await repository.save(record);
		return res.send(results);
	});

	const remove = wrap(async (req: Request, res: Response) => {
		const { id } = req.params;
		const results = await repository.delete(id);
		return res.send(results);
	});

	return { getAll, getOne, create, update, remove };
};
