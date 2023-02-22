import React from 'react'
import { Card, CardContent, CardHeader, Skeleton } from '@mui/material'

const SkeletonCommentItem = () => {
	return (
		<Card
			elevation={7}
			sx={{
				width: '100%',
			}}
		>
			<CardHeader
				avatar={
					<Skeleton
						animation="wave"
						variant="circular"
						width={56}
						height={56}
					/>
				}
				title={
					<Skeleton
						animation="wave"
						height={15}
						width="60%"
						style={{ marginBottom: 6 }}
					/>
				}
				subheader={
					<React.Fragment>
						<Skeleton animation="wave" height={10} width="50%" />
						<Skeleton
							animation="wave"
							height={10}
							width="40px"
							sx={{
								mt: 1,
							}}
						/>
					</React.Fragment>
				}
			/>

			<CardContent>
				<Skeleton sx={{ height: 90 }} animation="wave" variant="rectangular" />
			</CardContent>
		</Card>
	)
}

export default SkeletonCommentItem
