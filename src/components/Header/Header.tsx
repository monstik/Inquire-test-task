import React from 'react'
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const handleGoBack = () => {
		if (navigate && location.state && location.state.prevPathname) {
			navigate(-1)
		} else {
			navigate('/')
		}
	}

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Box sx={{ width: '50px' }}>
					{location.pathname !== '/' && (
						<Tooltip title="Go back">
							<IconButton
								onClick={() => handleGoBack()}
								sx={{
									color: '#fff',
								}}
							>
								<ArrowBackIcon fontSize={'large'} />
							</IconButton>
						</Tooltip>
					)}
				</Box>
				<Typography
					component={'h1'}
					variant={'h4'}
					sx={{
						marginLeft: 'auto',
					}}
				>
					Inquire test task
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
