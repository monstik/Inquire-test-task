import React from 'react'
import { Card, CardContent, CardHeader, Skeleton } from '@mui/material'
import { grey } from '@mui/material/colors'

const SkeletonPostListItem = () => {
	return (
		<Card
			elevation={7}
			sx={{
				width: '100%',
			}}
		>
			<CardHeader
				title={
					<Skeleton
						animation="wave"
						height={15}
						width="60%"
						sx={{ backgroundColor: grey[500] }}
						style={{ marginBottom: 6 }}
					/>
				}
				subheader={
					<React.Fragment>
						{/*<Skeleton animation="wave" height={10} width="50%" />*/}
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
				<Skeleton sx={{ height: 40 }} animation="wave" variant="rectangular" />
			</CardContent>
		</Card>
	)
}

export default SkeletonPostListItem
