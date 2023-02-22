import React from 'react'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import SpeedDial from '@mui/material/SpeedDial'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from '../../../store/store'
import {
	openDeleteModal,
	openEditModal,
} from '../../../features/navigationBarSlice'

const ActionsButton = () => {
	const [open, setOpen] = React.useState(false)

	const dispatch = useAppDispatch()

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<SpeedDial
			ariaLabel="Actions Button"
			sx={{ position: 'fixed', bottom: 16, right: 16 }}
			icon={<SpeedDialIcon />}
			onClose={handleClose}
			onOpen={handleOpen}
			open={open}
		>
			<SpeedDialAction
				key={'Edit post'}
				icon={<EditIcon />}
				tooltipTitle={'Edit post'}
				onClick={() => dispatch(openEditModal())}
			/>
			<SpeedDialAction
				key={'Delete post'}
				icon={<DeleteIcon />}
				tooltipTitle={'Delete post'}
				onClick={() => dispatch(openDeleteModal())}
			/>
		</SpeedDial>
	)
}

export default ActionsButton
