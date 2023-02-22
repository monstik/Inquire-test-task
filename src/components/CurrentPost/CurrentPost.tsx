import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import { useAppSelector } from '../../store/store'
import { selectStatus } from '../../features/posts/postSlice'

import ActionsButton from './ActionButton/ActionsButton'

interface CurrentPostProps {
	title: string
	body: string
	postId: number
}

const CurrentPost: React.FC<CurrentPostProps> = ({ title, body, postId }) => {
	const status = useAppSelector(selectStatus)

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<ActionsButton />
			<Box>
				<Typography
					sx={{
						textAlign: 'center',
						mb: 3,
					}}
					component={'h1'}
					variant={'h4'}
				>
					{status === 'loading' ? (
						<React.Fragment>
							<Skeleton width={'65vw'} sx={{ backgroundColor: 'grey.600' }} />
							<Skeleton width={'65vw'} sx={{ backgroundColor: 'grey.600' }} />
						</React.Fragment>
					) : (
						title
					)}
				</Typography>
			</Box>
			<Box>
				<Box>
					<Typography component={'h1'} variant={'body2'}>
						{status === 'loading' ? (
							<Skeleton width={'40px'} sx={{ backgroundColor: 'grey.500' }} />
						) : (
							`ID: ${postId}`
						)}
					</Typography>
				</Box>
				<Box>
					<Typography component={'p'} variant={'body1'}>
						{status === 'loading' ? (
							<React.Fragment>
								<Skeleton width={'65vw'} sx={{ backgroundColor: 'grey.500' }} />
								<Skeleton width={'65vw'} sx={{ backgroundColor: 'grey.500' }} />
							</React.Fragment>
						) : (
							body
						)}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default CurrentPost
