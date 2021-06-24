import { Entity, Column, ManyToOne } from 'typeorm';
import { Record } from './Record';
import { Author } from './Author';

@Entity()
export class Article extends Record {
	@Column()
	title: string;

	@Column()
	text: string;

	@ManyToOne(type => Author, author => author.articles, {
		onDelete: 'CASCADE',
	})
	author: Author;
}
