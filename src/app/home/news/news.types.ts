export interface INews {
	id: number;
	title: string;
	description: string;
	author: string;
	categoryId: number;
	keywords: string;
	views: number;
	active: boolean;
	thumbnail: string;
	age?: number;
	createdAt: string;
	updatedAt: string;
	createdBy?: string;
	updatedBy: number;
	slug: string;
	featured: boolean;
	hot: boolean;
	type: string;
	blogCategory: IBlogCategory;
}

export interface IBlogCategory {
	id: number;
	name: string;
	slug: string;
	description: string;
	active: boolean;
	order: number;
	createdBy: number;
	createdTime: number;
	modifiedBy?: string;
	modifiedTime?: string;
}