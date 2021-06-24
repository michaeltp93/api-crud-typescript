import { Entity, Column, OneToMany } from 'typeorm';
import { Record } from './Record';
import { Article } from './Article';

@Entity()
export class Author extends Record {
	@Column()
	name: string;

	@OneToMany(type => Article, article => article.author, {
		cascade: ['insert', 'update'],
	})
	articles: Article[];
}
