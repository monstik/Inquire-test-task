export interface PostsState {
	posts: Post[]
	currentPost: Post
	currentPage: number
	totalPages: number
	status: 'idle' | 'loading' | 'failed'
	error: string | null
}

export interface Comment {
	id: number
	postId: number
	name: string
	email: string
	body: string
}

export interface Post {
	id: number
	title: string
	body: string
	comments?: Comment[]
}

export interface CreateCommentPayload {
	postId: number
	name: string
	email: string
	body: string
}

export interface AddPostPayload {
	title: string
	body: string
}

export interface UpdatePostPayload extends AddPostPayload {
	id: number
	title: string
	body: string
}

export interface DeletePostPayload {
	id: number
}
