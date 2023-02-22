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
	closeAddPostModal,
	selectIsOpenAddPostModal,
} from '../../features/navigationBarSlice'
import { useForm, SubmitHandler } from 'react-hook-form'
import { addPost } from '../../features/posts/postActions'

interface FormValues {
	title: string
	body: string
}

const AddPostModal = () => {
	const isOpenAddPostModal = useAppSelector(selectIsOpenAddPostModal)
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()

	const handleClose = () => {
		dispatch(closeAddPostModal())
	}

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(addPost({ title: data.title, body: data.body }))
		dispatch(closeAddPostModal())
	}

	return (
		<Dialog
			disableScrollLock={true}
			open={isOpenAddPostModal}
			onClose={handleClose}
			fullWidth={true}
		>
			<DialogTitle>{'Add new post'}</DialogTitle>
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
						{...register('body', { required: true })}
						error={!!errors.body}
						helperText={errors.body ? 'This field is required' : null}
					/>
				</Box>
				<DialogActions>
					<Button
						onClick={handleSubmit(onSubmit)}
						disabled={!!(errors.body || errors.title)}
						color={'success'}
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

export default AddPostModal
