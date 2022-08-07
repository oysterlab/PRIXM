import { combineReducers } from '@reduxjs/toolkit'
import app from './slice/app'

const reducer = combineReducers({
  app
})

export type ReducerType = ReturnType<typeof reducer>
export default reducer

