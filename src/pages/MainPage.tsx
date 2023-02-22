import React from 'react'
import { Box, Fab, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../store/store'
import { selectPostPerPage } from '../features/posts/postSlice'
import PostList from '../components/PostList/PostList'
import AddIcon from '@mui/icons-material/Add'
import { openAddPostModal } from '../features/navigationBarSlice'
import AddPostModal from '../Modals/AddPostModal/AddPostModal'

const MainPage = () => {
	const postsPerPage = useAppSelector(selectPostPerPage)
	const dispatch = useAppDispatch()

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',

				pb: 2,
			}}
		>
			<Typography
				sx={{
					mb: 2,
					mt: 1,
				}}
				component={'h1'}
				variant={'h2'}
			>
				Posts
			</Typography>
			<Fab
				onClick={() => dispatch(openAddPostModal())}
				sx={{
					position: 'fixed',
					bottom: 66,
					right: 16,
				}}
				color="primary"
				aria-label="add"
			>
				<AddIcon />
			</Fab>
			<PostList posts={postsPerPage} />
			<AddPostModal />
		</Box>
	)
}

export default MainPage
