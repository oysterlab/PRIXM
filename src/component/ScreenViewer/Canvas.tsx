import Layer from './Layer'

interface DotGridProps {
	zoom: number
}

function DotGrid({zoom}:DotGridProps) {
	return (
		<div className='dot-grid' />
	)
}

interface CanvasProp {
	zoom: number
}

export default function Canvas({zoom}:CanvasProp) {    

    const width = 9400
    const height = 9400

    return (
			<div className='canvas' style={{
					width, height
			}}>
				<DotGrid zoom={zoom}/>
				<Layer left={500} top={500} width={500} height={500} />
			</div>
    )    
} 