import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import {
	closeDeleteModal,
	selectIsOpenDeleteModal,
} from '../../features/navigationBarSlice'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'
import { selectCurrentPost } from '../../features/posts/postSlice'
import { useNavigate } from 'react-router-dom'
import { deletePost } from '../../features/posts/postActions'

const DeletePostModal = () => {
	const isOpenDeleteModal = useAppSelector(selectIsOpenDeleteModal)
	const dispatch = useAppDispatch()
	const currentPost = useAppSelector(selectCurrentPost)
	const navigate = useNavigate()

	const handleDelete = () => {
		dispatch(deletePost({ id: currentPost.id }))
		dispatch(closeDeleteModal())
		navigate('/')
	}

	return (
		<Dialog
			open={isOpenDeleteModal}
			onClose={() => dispatch(closeDeleteModal())}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{'Do you really want to delete this post?'}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					This is an irreversible process and you won't be able to recover it.
					You are doing it at your own risk.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleDelete} autoFocus>
					Confirm
				</Button>
				<Button onClick={() => dispatch(closeDeleteModal())}>Reject</Button>
			</DialogActions>
		</Dialog>
	)
}

export default DeletePostModal
