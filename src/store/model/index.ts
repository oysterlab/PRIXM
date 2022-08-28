import LayoutState from "./LayoutState"

export interface Frame {
	width: number,
	height: number,
	x: number,
	y: number,
}

export interface Property<T> {
	id?:string
	displayCategory: string
	displayName: string
	codeName: string
	codeType: string
	value?: T
}

export interface ExportData {
	date:string,
	outputPath:string,
	artboards:ExportArtboardData[]
}

export interface ExportArtboardData {
	id:string,
	type:string,
	name:string,
	width: number,
	height: number,  
	pageName:string,  
	imagePath:string,
	components:GuideComponent[]
	floatings:GuideComponent[],
	fileName?: string
}


export interface Reference {
	id: string,
	fileName?: string
}

export interface BoundingBox {
	left:number, top:number, width:number, height:number
}

export interface GuideComponent {
	id:string,
	frame:Frame,
	variableName: string,
	readonly name:string,
	readonly properties:Property<any>[],
	children:GuideComponent[]
	artboardId:string,
	depth?:number
}

export interface GuideReference extends ExportArtboardData {
	parent: string,
	boundingBox: BoundingBox,
	depth: number
}

export interface GuideArtboard extends ExportArtboardData {
	references: GuideReference[]
}

export interface AppState {
	artboards: GuideArtboard[],
    layout: LayoutState    
}
  
export interface ScreenComponent extends GuideComponent {
	depth:number,
}
  