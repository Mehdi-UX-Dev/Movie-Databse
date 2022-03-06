import { configureStore } from '@reduxjs/toolkit'
import submitSlice from './submitSlice'

export const store = configureStore({
  reducer: {
      submit: submitSlice
  },
})