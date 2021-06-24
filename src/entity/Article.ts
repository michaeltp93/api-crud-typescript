import { Entity, Column } from 'typeorm';
import { Record } from './Record';

@Entity()
export class Article extends Record {
	@Column()
	title: string;

	@Column()
	text: string;
}
