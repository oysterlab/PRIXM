import react from 'react'
import { useAppSelector } from '../../store/hooks'
import Canvas from './Canvas'

export default function ScreenViewer() {
	const { zoom, leftPanelWidth:left, rightPanelWidth:right }  = useAppSelector(state => state.app.layout)

	const width = document.body.clientWidth - (left + right)

	return (
		<div className='screenviewer' 
			style={{ left, width }}
		>
			<Canvas zoom={zoom} />
		</div>
	)
}