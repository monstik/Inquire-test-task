import React from 'react'
import { Box } from '@mui/material'
import { selectStatus } from '../../../features/posts/postSlice'
import CommentItem from './CommentItem'
import { useAppSelector } from '../../../store/store'
import SkeletonCommentItem from './SkeletonCommentItem'
import { Comment } from '../../../features/posts/postTypes'

interface CurrentPostCommentsProps {
	comments: Comment[]
}

const CurrentPostComments: React.FC<CurrentPostCommentsProps> = ({
	comments,
}) => {
	const status = useAppSelector(selectStatus)

	return (
		<Box
			sx={{
				width: '100%',
				mb: 5,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					rowGap: '15px',
				}}
			>
				{status === 'loading' ? (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							rowGap: '15px',
						}}
					>
						<SkeletonCommentItem />
						<SkeletonCommentItem />
						<SkeletonCommentItem />
						<SkeletonCommentItem />
						<SkeletonCommentItem />
					</Box>
				) : (
					comments.map((comment) => (
						<CommentItem
							key={comment.id}
							id={comment.id}
							name={comment.name}
							body={comment.body}
							email={comment.email}
							postId={comment.postId}
						/>
					))
				)}
			</Box>
		</Box>
	)
}

export default CurrentPostComments
