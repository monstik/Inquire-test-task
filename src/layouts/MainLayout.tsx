import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../store/store'
import Header from '../components/Header/Header'
import { fetchPosts } from '../features/posts/postActions'
const MainLayout = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<Box>
			<Header />
			<Outlet />
		</Box>
	)
}

export default MainLayout
