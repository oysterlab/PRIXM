import react, { RefObject, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { actions } from '../store/slice/app'

function AdjustWidth(width:number, ref:RefObject<HTMLDivElement>) {
	const dispatch = useAppDispatch()
	const dragging = useRef(false)
	const previousX = useRef(0)

	const mouseDown = (e:MouseEvent) => {
		dragging.current = true	
		previousX.current = e.clientX
	}

	const mouseMove = (e:MouseEvent) => {
		if (!dragging.current) return
		const diff = previousX.current - e.clientX
		dispatch(actions.updateRightPanelWidth(diff + width))
		previousX.current = e.clientX		
	}

	const mouseUp = () => {
		dragging.current = false			
	}

	useEffect(() => {
		ref.current?.addEventListener('mousedown', mouseDown)
		window.addEventListener('mousemove', mouseMove)
		window.addEventListener('mouseup', mouseUp)		

		return () => {
			ref.current?.removeEventListener('mousedown', mouseDown)
			window.removeEventListener('mousemove', mouseMove)
			window.removeEventListener('mouseup', mouseUp)		
		}
	}, [mouseDown, mouseMove, mouseUp])
	
	return width
}

interface EdgeProps {
	right: number
}

function Edge({right:_right}:EdgeProps) {
	const ref = useRef<HTMLDivElement>(null)
	const width = AdjustWidth(_right, ref)

	return (	
		<div ref={ref} className="edge" style={{right:width+'px'}}></div>		
	)
}

interface LeftPanelProps {
	width: number
}

export default function RightPanel({width}:LeftPanelProps) {
	return <div className='right-panel' style={{width:width+'px'}}>
		right
		<Edge right={width}/>
	</div>
}