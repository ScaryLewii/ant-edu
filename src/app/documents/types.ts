export interface IDocument {
	id: number
  title: string
  description: string
  author: string
  categoryId: number
  keywords: string
  views: number
  active: boolean
  thumbnail: string
  age: unknown
  createdAt: string
  updatedAt: string
  createdBy: number
  updatedBy: number
  slug: string
  featured: boolean
  hot: boolean
  type: unknown
  documents: Document[]
}

export interface Document {
	displayName: string
  url: string
}