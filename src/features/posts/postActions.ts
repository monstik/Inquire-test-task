import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {
	AddPostPayload,
	CreateCommentPayload,
	DeletePostPayload,
	Post,
	UpdatePostPayload,
	Comment,
} from './postTypes'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await axios.get<Post[]>(
		'https://blog-api-t6u0.onrender.com/posts'
	)
	return response.data
})

export const fetchPost = createAsyncThunk(
	'posts/fetchPost',
	async (postId: number) => {
		const response = await axios.get<Post>(
			`https://blog-api-t6u0.onrender.com/posts/${postId}?_embed=comments`
		)
		return response.data
	}
)

export const createComment = createAsyncThunk(
	'comments/addComment',
	async (payload: CreateCommentPayload) => {
		const response = await axios.post<Comment>(
			'https://blog-api-t6u0.onrender.com/comments',
			payload
		)
		return response.data
	}
)

export const addPost = createAsyncThunk(
	'posts/addPost',
	async (payload: AddPostPayload) => {
		const response = await axios.post<Post>(
			'https://blog-api-t6u0.onrender.com/posts',
			payload
		)
		return response.data
	}
)

export const updatePost = createAsyncThunk(
	'posts/updatePost',
	async (payload: UpdatePostPayload) => {
		const response = await axios.put<Post>(
			`https://blog-api-t6u0.onrender.com/posts/${payload.id}`,
			payload
		)
		return response.data
	}
)

export const deletePost = createAsyncThunk(
	'posts/deletePost',
	async (payload: DeletePostPayload) => {
		await axios.delete(`https://blog-api-t6u0.onrender.com/posts/${payload.id}`)
		return payload.id
	}
)
