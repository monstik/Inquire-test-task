import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Post, PostsState } from './postTypes'
import {
	addPost,
	createComment,
	deletePost,
	fetchPost,
	fetchPosts,
	updatePost,
} from './postActions'

const initialState: PostsState = {
	posts: [],
	currentPost: { id: 0, title: '', body: '' },
	status: 'idle',
	error: null,
	currentPage: 1,
	totalPages: 1,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		clearCurrentPost(state) {
			state.currentPost = { id: 0, title: '', body: '' }
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.status = 'idle'
				state.posts = action.payload
				state.currentPage = 1
				state.totalPages = action.payload.length
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || 'Something went wrong'
			})
			.addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
				state.posts.push(action.payload)
				state.currentPage = 1
				state.totalPages = state.totalPages + 1
			})
			.addCase(updatePost.fulfilled, (state, action: PayloadAction<Post>) => {
				const index = state.posts.findIndex(
					(post) => post.id === action.payload.id
				)

				state.currentPost.title = action.payload.title
				state.currentPost.body = action.payload.body

				if (index !== -1) {
					state.posts[index] = action.payload
				}
			})
			.addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
				state.posts = state.posts.filter((post) => post.id !== action.payload)
				state.currentPage = 1
				state.totalPages = state.totalPages - 1
			})

			.addCase(fetchPost.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchPost.fulfilled, (state, action: PayloadAction<Post>) => {
				state.status = 'idle'
				state.currentPost = action.payload
			})
			.addCase(fetchPost.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || 'Something went wrong'
			})

			.addCase(createComment.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(createComment.fulfilled, (state, action) => {
				state.status = 'idle'
				const comment = action.payload
				const postIndex = state.posts.findIndex(
					(post) => post.id === comment.postId
				)
				if (postIndex !== -1) {
					state.posts[postIndex].comments?.push(comment)
				}

				state.currentPost.comments?.push(action.payload)
			})
			.addCase(createComment.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message ?? 'Failed to create comment'
			})
	},
})

export const { setCurrentPage, clearCurrentPost } = postsSlice.actions

export const selectAllPosts = (state: { posts: PostsState }) =>
	state.posts.posts
export const selectCurrentPost = (state: { posts: PostsState }) =>
	state.posts.currentPost
export const selectCurrentPage = (state: { posts: PostsState }) =>
	state.posts.currentPage
export const selectTotalPages = (state: { posts: PostsState }) =>
	state.posts.totalPages
export const selectStatus = (state: { posts: PostsState }) => state.posts.status

export const selectPostPerPage = (state: { posts: PostsState }) => {
	const offset = 10
	return state.posts.posts.slice(
		(state.posts.currentPage - 1) * offset,
		(state.posts.currentPage - 1) * offset + offset
	)
}

export default postsSlice.reducer
