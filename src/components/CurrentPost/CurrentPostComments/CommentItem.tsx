import React from 'react'

import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	Typography,
} from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { Comment } from '../../../features/posts/postTypes'

const CommentItem: React.FC<Comment> = ({ id, name, postId, email, body }) => {
	return (
		<Card elevation={7}>
			<CardHeader
				avatar={
					<Avatar
						sx={{ backgroundColor: deepPurple[300], width: 56, height: 56 }}
					>
						{name[0].toUpperCase()}
					</Avatar>
				}
				title={
					<Typography
						sx={{
							fontWeight: '500',
						}}
					>
						{name}
					</Typography>
				}
				subheader={
					<Box>
						<Typography component={'p'} variant={'body2'}>
							Email:{email}
						</Typography>
						<Typography component={'p'} variant={'body2'}>
							ID:{id}
						</Typography>
					</Box>
				}
			/>
			<CardContent>
				<Typography variant={'body1'}>{body}</Typography>
			</CardContent>
		</Card>
	)
}

export default CommentItem
