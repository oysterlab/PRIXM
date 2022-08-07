
export default interface Layer {
    left: number,
    top: number,
    width: number,
    height: number
}

export default function Layer({left, top, width, height}:Layer) {    
    return (
        <div className='layer' style={{
            position: 'relative',
            left, top, width, height,
            border: '1px solid #000'
        }}>
            {width}X{height}  ({left},{top})
        </div>
    )    
} 