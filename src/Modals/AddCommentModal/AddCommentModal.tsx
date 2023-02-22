import React from 'react'
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	closeCommentModal,
	selectIsOpenAddCommentModal,
} from '../../features/navigationBarSlice'
import { selectCurrentPost } from '../../features/posts/postSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { createComment } from '../../features/posts/postActions'

interface FormValues {
	name: string
	postId: number
	body: string
	email: string
}

const AddCommentModal = () => {
	const isOpenAddComment = useAppSelector(selectIsOpenAddCommentModal)
	const currentPost = useAppSelector(selectCurrentPost)
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>()

	const handleClose = () => {
		reset()
		dispatch(closeCommentModal())
	}

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(
			createComment({
				postId: currentPost.id,
				email: data.email,
				name: data.name,
				body: data.body,
			})
		)
		reset()
		dispatch(closeCommentModal())
	}

	return (
		<Dialog
			disableScrollLock={true}
			open={isOpenAddComment}
			onClose={handleClose}
			fullWidth={true}
		>
			<DialogTitle>Create comment</DialogTitle>
			<DialogContent
				sx={{
					width: '100%',
					p: 1,
				}}
			>
				<Box
					sx={{
						p: 1,
					}}
				>
					<TextField
						sx={{
							width: '100%',
						}}
						label="Name"
						id={'titleInput'}
						variant="outlined"
						{...register('name', { required: true })}
						error={!!errors.name}
						helperText={errors.name ? 'This field is required' : null}
					/>
				</Box>
				<Box
					sx={{
						p: 1,
					}}
				>
					<TextField
						sx={{
							width: '100%',
						}}
						label="Email"
						id={'titleInput'}
						type={'email'}
						variant="outlined"
						{...register('email', { required: true })}
						error={!!errors.email}
						helperText={errors.email ? 'This field is required' : null}
					/>
				</Box>

				<Box
					sx={{
						p: 1,
					}}
				>
					<TextField
						sx={{
							width: '100%',
						}}
						label="Body"
						id={'titleBody'}
						multiline
						rows={5}
						variant="outlined"
						{...register('body', { required: true })}
						error={!!errors.body}
						helperText={errors.body ? 'This field is required' : null}
					/>
				</Box>
				<DialogActions>
					<Button
						onClick={handleSubmit(onSubmit)}
						disabled={!!(errors.body || errors.name || errors.email)}
						color={'success'}
						variant={'contained'}
					>
						Create
					</Button>
					<Button onClick={handleClose} color={'info'} variant={'contained'}>
						Cancel
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	)
}

export default AddCommentModal
