import { configureStore } from '@reduxjs/toolkit'
import formReducer from './reducer';
import authReducer from './authSlice';
import darkModeReducer from './darkModeSlice'
export const store = configureStore({
    reducer: {
        form: formReducer,
        auth: authReducer,
        darkMode: darkModeReducer,
      },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch