import { createSelector, createSlice } from '@reduxjs/toolkit'
import { HEADER_HEIGHT } from '../../Constants'
import AppState from '../model/AppState'
import { defaultState as layoutInitState } from '../model/LayoutState'
import { RootState } from '../store'
import * as LayoutActions from './LayoutActions'



const appState:AppState = <AppState> {
  layout: layoutInitState
}

export const app = createSlice({
  name: 'app',
  initialState: appState,
  reducers: {
    ...LayoutActions
  }
})


export const actions = app.actions
export default app.reducer
