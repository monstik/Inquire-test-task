import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import postSlice from '../features/posts/postSlice'
import navigationBarSlice from '../features/navigationBarSlice'

export const store = configureStore({
	reducer: {
		posts: postSlice,
		navigation: navigationBarSlice,
	},
})

export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch
