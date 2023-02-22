import { createSlice } from '@reduxjs/toolkit'

interface NavigationBarState {
	isOpenEditModal: boolean
	isOpenAddPostModal: boolean
	isOpenAddCommentModal: boolean
	isOpenDeleteModal: boolean
}

const initialState: NavigationBarState = {
	isOpenEditModal: false,
	isOpenAddPostModal: false,
	isOpenAddCommentModal: false,
	isOpenDeleteModal: false,
}

const navigationBarSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		openEditModal(state) {
			state.isOpenEditModal = true
		},
		closeEditModal(state) {
			state.isOpenEditModal = false
		},

		openAddPostModal(state) {
			state.isOpenAddPostModal = true
		},
		closeAddPostModal(state) {
			state.isOpenAddPostModal = false
		},

		openCommentModal(state) {
			state.isOpenAddCommentModal = true
		},
		closeCommentModal(state) {
			state.isOpenAddCommentModal = false
		},

		openDeleteModal(state) {
			state.isOpenDeleteModal = true
		},
		closeDeleteModal(state) {
			state.isOpenDeleteModal = false
		},
	},
})

export const {
	openEditModal,
	closeEditModal,
	openCommentModal,
	closeCommentModal,
	openAddPostModal,
	closeAddPostModal,
	openDeleteModal,
	closeDeleteModal,
} = navigationBarSlice.actions

export const selectIsOpenAddCommentModal = (state: {
	navigation: NavigationBarState
}) => state.navigation.isOpenAddCommentModal

export const selectIsOpenAddPostModal = (state: {
	navigation: NavigationBarState
}) => state.navigation.isOpenAddPostModal

export const selectIsOpenEditModal = (state: {
	navigation: NavigationBarState
}) => state.navigation.isOpenEditModal

export const selectIsOpenDeleteModal = (state: {
	navigation: NavigationBarState
}) => state.navigation.isOpenDeleteModal

export default navigationBarSlice.reducer
