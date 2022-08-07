import react from 'react'
import { useSelector } from 'react-redux'
import { getContentAreaHeight, getLeftPanelWidth, getRightPanelWidth } from '../store/slice/LayoutSelectors'
import Header from './Header'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import ScreenViewer from './ScreenViewer'

export default function Workspace() {
	const leftPanelWidth = useSelector(getLeftPanelWidth)
	const rightPanelWidth = useSelector(getRightPanelWidth)
	const height = useSelector(getContentAreaHeight)

	return (
		<div className='workspace'>
			<Header />
			<div className='content-area' style={{height}}>
				<LeftPanel width={leftPanelWidth}></LeftPanel>
				<ScreenViewer />
				<RightPanel width={rightPanelWidth}></RightPanel>			
			</div>
		</div>
	)
}