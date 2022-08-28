import react from 'react'
import { Box, styled, svgIconClasses, SvgIconProps, Typography, typographyClasses } from '@mui/material';
import { TreeItem, treeItemClasses, TreeItemProps, TreeView } from '@mui/lab';
import InfoIcon from "@mui/icons-material/Info";
import { LayerType } from '../../store/model/Type';
import { ArtTrack, CategoryOutlined, Extension, ExtensionOutlined, Interests, Layers, LinearScale, SquareOutlined, SvgIconComponent, TableRows, TableRowsOutlined, ViewColumn, ViewColumnOutlined, ViewComfy, ViewList } from '@mui/icons-material';

type ItemStyle = {
    icon: SvgIconComponent
    color: string
    bgcolor: string
}

const ITEM_STYLE:{[key in LayerType]: ItemStyle} = {
    L_FlexH: {
        icon: ViewColumnOutlined,
        bgcolor: '',
        color: ''
    },
    L_FlexV: {
        icon: TableRowsOutlined,
        bgcolor: '',
        color: ''
    },
    L_Frame: {
        icon: Layers,
        bgcolor: '',
        color: ''
    },
    L_Linear: {
        icon: LinearScale,
        bgcolor: '',
        color: ''
    },
    COMPONENT: {
        icon: SquareOutlined,
        bgcolor: '',
        color: ''
    },
    PATTERN: {
        icon: ViewComfy,
        bgcolor: '',
        color: ''
    },
    ITEM: {
        icon: CategoryOutlined,
        bgcolor: '',
        color: ''
    }
}

declare module 'react' {
	interface CSSProperties {
		'--tree-view-color'?: string
		'--tree-view-bgcolor'?: string
	}
}


const LayerTreeItemRoot = styled(TreeItem)(({theme}) => ({
    
	[`.${treeItemClasses.content}`]: {
		[`.${treeItemClasses.iconContainer}`]: {
			mr: 0,
		},
		color: theme.palette.text.secondary,
		'&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
			backgroundColor: `var(--tree-view-bgcolor, ${theme.palette.action.selected})`,
			color: `var(--tree-view-color)`,
		},
        [`.${svgIconClasses.root}`]: {
            fontSize: '1.2rem',
        },
        [`.${typographyClasses.root}`]: {
            fontSize: '0.8rem',
        }

	}
}))


export type LayerTreeItemProp = TreeItemProps & {
    nodeId: string
	labelText: string
    type: LayerType
    layers?: LayerTreeItemProp[]
}

export default function LayerTreeItem(props: LayerTreeItemProp) {
	const {
		labelText,
		type,
		...other
	} = props

    const {icon, color, bgcolor} = ITEM_STYLE[type]

	return (
		<LayerTreeItemRoot
			label={
				<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					p: 0.5, 
					pr: 0
				}}>
					<Box component={icon} color='inherit' sx={{mr: 1}}></Box>
					<Typography sx={{flexGrow: 1}}>{labelText}</Typography>
			</Box>
			}
			style={{
				'--tree-view-color': color,
				'--tree-view-bgcolor': bgcolor
			}}
		{...other}/>
	)
}