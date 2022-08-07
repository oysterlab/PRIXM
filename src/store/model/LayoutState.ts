import { LEFT_PANEL, RIGHT_PANEL, ZOOM } from "../../Constants"


export interface Size {
    width: number,
    height: number
}

export default interface LayoutState {
    screen: Size,
    leftPanelWidth: number
    rightPanelWidth: number
    zoom: number
}

export const defaultState:LayoutState = {
    screen: {width:document.body.clientWidth, height: document.body.clientHeight},
    leftPanelWidth: LEFT_PANEL.INIT_WIDTH,
    rightPanelWidth: RIGHT_PANEL.INIT_WIDTH,
    zoom: ZOOM.INIT
} 