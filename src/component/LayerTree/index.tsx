import react from 'react'
import { useSelector } from 'react-redux';
import { getLeftPanelWidth } from '../../store/slice/LayoutSelectors';
import { Box } from '@mui/material';
import { ArrowDropDownRounded, ArrowRightRounded } from '@mui/icons-material';
import LayerTreeItem, { LayerTreeItemProp } from './LayerTreeItem';
import { TreeView } from '@mui/lab';

import DUMMY from './dummy'

interface LayerTreeItemsProp {
	items: LayerTreeItemProp[]
}

function TreeItems({items}:LayerTreeItemsProp) {
	const recvItems = (_items:LayerTreeItemProp[]) => _items.map((d:LayerTreeItemProp) => {
		return (
			<LayerTreeItem
				key={d.nodeId}
				{...d}>
				{d.layers && recvItems(d.layers)}
			</LayerTreeItem>
		)
	})

	return (items && <>{recvItems(items)}</>)
}

export default function Treeview() {
	const leftPanelWidth  = useSelector(getLeftPanelWidth)

	const items = (DUMMY as LayerTreeItemProp[])

	return (
		<Box sx={{ width: leftPanelWidth }}>
			<TreeView
				defaultCollapseIcon={<ArrowDropDownRounded />}
				defaultExpandIcon={<ArrowRightRounded/>}>
				{<TreeItems items={items} />}
			</TreeView>
		</Box>
	)
}