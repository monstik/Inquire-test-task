import React, { useRef } from 'react'
import {
	selectCurrentPage,
	selectStatus,
	selectTotalPages,
	setCurrentPage,
} from '../../features/posts/postSlice'
import { Box, Pagination } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/store'
import PostListItem from './PostListItem/PostListItem'
import SkeletonPostListItem from './PostListItem/SkeletonPostListItem'
import { Post } from '../../features/posts/postTypes'

interface PostListProps {
	posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
	const currentPage = useAppSelector(selectCurrentPage)
	const totalPages = useAppSelector(selectTotalPages)
	const dispatch = useAppDispatch()
	const ref = useRef<HTMLDivElement>(null)
	const status = useAppSelector(selectStatus)

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		dispatch(setCurrentPage(value))
		if (ref && ref.current) ref.current.scrollIntoView()
	}

	return (
		<Box
			ref={ref}
			sx={{
				maxWidth: '1280px',
				display: 'flex',
				width: '100%',
				flexDirection: 'column',
				alignItems: 'center',
				rowGap: '15px',
			}}
		>
			{status === 'loading'
				? [...Array(10)].map((x, i) => <SkeletonPostListItem key={i} />)
				: posts.map((post) => <PostListItem key={post.id} post={post} />)}
			<Pagination
				sx={{
					mt: 2,
					mb: 2,
				}}
				count={Math.ceil(totalPages / 10)}
				page={currentPage}
				onChange={handlePageChange}
				variant="text"
				color={'secondary'}
				shape="circular"
			/>
		</Box>
	)
}

export default PostList
