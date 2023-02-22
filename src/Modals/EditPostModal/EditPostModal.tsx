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
import { useAppDispatch, useAppSelector } from '../../store/store'
import {
	closeEditModal,
	selectIsOpenEditModal,
} from '../../features/navigationBarSlice'
import { selectCurrentPost } from '../../features/posts/postSlice'
import { useForm, SubmitHandler } from 'react-hook-form'
import { updatePost } from '../../features/posts/postActions'

interface FormValues {
	title: string
	body: string
}

const EditPostModal = () => {
	const isOpenEditModal = useAppSelector(selectIsOpenEditModal)
	const dispatch = useAppDispatch()
	const currentPost = useAppSelector(selectCurrentPost)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>()

	const watchAllFields = watch()

	const handleClose = () => {
		dispatch(closeEditModal())
	}

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		if (
			watchAllFields.title !== currentPost.title ||
			watchAllFields.body !== currentPost.body
		) {
			dispatch(
				updatePost({ id: currentPost.id, title: data.title, body: data.body })
			)
			dispatch(closeEditModal())
		}
		dispatch(closeEditModal())
	}

	return (
		<Dialog
			disableScrollLock={true}
			open={isOpenEditModal}
			onClose={handleClose}
			fullWidth={true}
		>
			<DialogTitle>{`Edit post with ID: ${currentPost.id}`}</DialogTitle>
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
						label="Title"
						id={'titleInput'}
						multiline
						rows={2}
						variant="outlined"
						defaultValue={currentPost.title}
						{...register('title', { required: true })}
						error={!!errors.title}
						helperText={errors.title ? 'This field is required' : null}
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
						defaultValue={currentPost.body}
						{...register('body', { required: true })}
						error={!!errors.body}
						helperText={errors.body ? 'This field is required' : null}
					/>
				</Box>
				<DialogActions>
					<Button
						onClick={handleSubmit(onSubmit)}
						color={
							watchAllFields.title === currentPost.title &&
							watchAllFields.body === currentPost.body
								? 'error'
								: 'success'
						}
						variant={'contained'}
					>
						Save
					</Button>
					<Button onClick={handleClose} color={'info'} variant={'contained'}>
						Cancel
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	)
}

export default EditPostModal
