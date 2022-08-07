import react, { RefObject, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { actions } from '../store/slice/app'
import LayerTree from './LayerTree'

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
		const diff = e.clientX - previousX.current
		dispatch(actions.updateLeftPanelWidth(diff + width))
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
	left: number
}

function Edge({left:_left}:EdgeProps) {
	const ref = useRef<HTMLDivElement>(null)
	const width = AdjustWidth(_left, ref)

	return (	
		<div ref={ref} className="edge" style={{left:width+'px'}}></div>		
	)
}

interface LeftPanelProps {
	width: number
}

export default function LeftPanel({width}:LeftPanelProps) {
	return <div className='left-panel' style={{width:width+'px'}}>
		<LayerTree />
		<Edge left={width}/>
	</div>
}