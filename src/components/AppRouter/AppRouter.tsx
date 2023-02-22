import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import MainPage from '../../pages/MainPage'
import PostPage from '../../pages/PostPage'

const AppRouter = () => {
	return (
		<Routes>
			<Route path={'/'} element={<MainLayout />}>
				<Route path={'/'} element={<MainPage />} />
				<Route path={'post/:postId'} element={<PostPage />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
