import { PayloadAction } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal";
import { LEFT_PANEL, RIGHT_PANEL, ZOOM } from "../../Constants";
import AppState from "../model/AppState";
import { Size } from "../model/LayoutState";

export function updateLeftPanelWidth(state:WritableDraft<AppState>, {payload: value}: PayloadAction<number>) {
  (value < LEFT_PANEL.MIN_WIDTH && (value = LEFT_PANEL.MIN_WIDTH));
  (value > LEFT_PANEL.MAX_WIDTH && (value = LEFT_PANEL.MAX_WIDTH));  
  state.layout.leftPanelWidth = value
}

export function updateRightPanelWidth(state:WritableDraft<AppState>, {payload: value}: PayloadAction<number>) {
  (value < RIGHT_PANEL.MIN_WIDTH && (value = RIGHT_PANEL.MIN_WIDTH));
  (value > RIGHT_PANEL.MAX_WIDTH && (value = RIGHT_PANEL.MAX_WIDTH));    
  state.layout.rightPanelWidth = value
}

export function updateZoom(state:WritableDraft<AppState>, {payload: value}: PayloadAction<number>) {
  (value < ZOOM.MIN && (value = ZOOM.MIN));
  (value > ZOOM.MAX && (value = ZOOM.MAX));    
  state.layout.zoom = value
}

export function updateScreenSize(state:WritableDraft<AppState>, {payload: value}: PayloadAction<Size>) {
  state.layout.screen.width = value.width
  state.layout.screen.height = value.height
}
