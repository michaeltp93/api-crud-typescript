import { Entity, Column, ManyToOne } from 'typeorm';
import { Record } from './Record';
import { Author } from './Author';
import { Length } from 'class-validator';

@Entity()
export class Article extends Record {
	@Column()
	@Length(3, 50)
	title: string;

	@Column()
	@Length(3, 500)
	text: string;

	@ManyToOne(type => Author, author => author.articles, {
		onDelete: 'CASCADE',
	})
	author: Author;
}
