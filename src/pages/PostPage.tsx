import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/store'
import {
	clearCurrentPost,
	selectCurrentPost,
} from '../features/posts/postSlice'
import CurrentPost from '../components/CurrentPost/CurrentPost'
import CurrentPostComments from '../components/CurrentPost/CurrentPostComments/CurrentPostComments'

import EditPostModal from '../Modals/EditPostModal/EditPostModal'
import DeletePostModal from '../Modals/DeletePostModal/DeletePostModal'
import AddCommentModal from '../Modals/AddCommentModal/AddCommentModal'
import { openCommentModal } from '../features/navigationBarSlice'
import { fetchPost } from '../features/posts/postActions'

const PostPage: React.FC = () => {
	const { postId } = useParams()
	const dispatch = useAppDispatch()
	const currentPost = useAppSelector(selectCurrentPost)

	useEffect(() => {
		if (postId !== undefined) {
			dispatch(fetchPost(parseInt(postId)))
		}
		window.scrollTo(0, 0)
	}, [dispatch, postId])

	useEffect(() => {
		return () => {
			dispatch(clearCurrentPost())
		}
	}, [dispatch])

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					maxWidth: '1280px',
					width: '100%',
					pr: 3,
					pl: 3,
				}}
			>
				<Box
					sx={{
						mt: 5,
						mb: 5,
					}}
				>
					<CurrentPost
						title={currentPost.title}
						body={currentPost.body}
						postId={currentPost.id}
					/>
				</Box>

				<Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							mb: 3,
						}}
					>
						<Typography component={'h2'} variant={'h4'}>
							Comments:
						</Typography>
						<Button
							onClick={() => dispatch(openCommentModal())}
							sx={{
								marginLeft: 'auto',
							}}
							variant={'contained'}
						>
							Add comment
						</Button>
					</Box>
					{/*{currentPost?.comments && (*/}
					<CurrentPostComments comments={currentPost?.comments || []} />
					{/*)}*/}
				</Box>
			</Box>
			<AddCommentModal />
			<DeletePostModal />
			<EditPostModal />
		</Box>
	)
}

export default PostPage
