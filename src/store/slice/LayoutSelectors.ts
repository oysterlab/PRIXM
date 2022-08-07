import { createSelector } from "@reduxjs/toolkit"
import { HEADER_HEIGHT } from "../../Constants"
import { RootState } from "../store"

const layoutState = (state: RootState) => state.app.layout

export const getScreenSize = createSelector(layoutState, layoutState => layoutState.screen)
export const getLeftPanelWidth = createSelector(layoutState, layoutState => layoutState.leftPanelWidth)
export const getRightPanelWidth = createSelector(layoutState, layoutState => layoutState.rightPanelWidth)
export const getContentAreaHeight = createSelector(layoutState, layoutState => layoutState.screen.height - HEADER_HEIGHT)

