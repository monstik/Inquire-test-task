import React from 'react'

import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../../features/posts/postTypes'

interface PostListItemProps {
	post: Post
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
	const navigate = useNavigate()

	const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		navigate(`/post/${post.id}`)
	}

	return (
		<Card
			elevation={6}
			sx={{
				width: '90%',
				height: '150px',
				transition: '.3s ease',
				'&:hover': {
					transform: 'scale(1.03)',
				},
			}}
		>
			<CardActionArea
				sx={{
					height: '100%',
				}}
				onClick={handleCardClick}
			>
				<CardContent>
					<Typography
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 1,
						}}
						gutterBottom
						variant="h5"
					>
						{post.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						ID: {post.id}
					</Typography>
					<Typography
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 3,
						}}
						variant="body2"
						color="text.secondary"
					>
						{post.body}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default PostListItem
