import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
} from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger'
import artistReducer from 'store/slices/artistSlice'
import albumReducer from 'store/slices/albumSlice'
import trackReducer from 'store/slices/trackSlice'
import { ENV } from 'types'

const middlewares: Middleware[] = []
if (process.env.NODE_ENV === ENV.DEVELOPMENT) {
  middlewares.push(reduxLogger)
}

export const rootReducer = {
  artists: artistReducer,
  albums: albumReducer,
  tracks: trackReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>
