import react from 'react'
import TreeView from '@mui/lab/TreeView';
import { useSelector } from 'react-redux';
import { getLeftPanelWidth } from '../../store/slice/LayoutSelectors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { LayerType } from '../../store/model/Layer';
import LayerTreeItem from './LayerTreeItem';

function ArrowDownIcon(props: SvgIconProps) {
	return (
		<SvgIcon style={{width:6, height:6}} viewBox="0 0 6 6" {...props}>
			<path d="M3 5l3-4H0l3 4z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
		</SvgIcon>
	)
}

function ArrowRightIcon(props: SvgIconProps) {
	return (
		<SvgIcon style={{width:6, height:6}} viewBox="0 0 6 6" {...props}>
			<path d="M5 3L1 0v6l4-3z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
		</SvgIcon>
	)
}

export default function Treeview() {
	const leftPanelWidth  = useSelector(getLeftPanelWidth)

	return (
		<TreeView
			aria-label="file system navigator"
			defaultCollapseIcon={<ArrowDownIcon />}
			defaultExpandIcon={<ArrowRightIcon />}
			sx={{ height: 240, flexGrow: 1, maxWidth: leftPanelWidth, overflowY: 'auto'}}
		>
		<LayerTreeItem nodeId="1" labelText="Applications" type={LayerType.LAYOUT_L}>
			<LayerTreeItem nodeId="2" labelText="Calendar"  type={LayerType.LAYOUT_L}/>
		</LayerTreeItem>
		<LayerTreeItem nodeId="5" labelText="Documents" type={LayerType.LAYOUT_L}>
			<LayerTreeItem nodeId="10" labelText="OSS" type={LayerType.LAYOUT_L}/>
			<LayerTreeItem nodeId="6" labelText="MUI" type={LayerType.LAYOUT_L}>
				<LayerTreeItem nodeId="8" labelText="index.js" type={LayerType.LAYOUT_L} />
				<LayerTreeItem nodeId="9" labelText="indeddddddssssssssssssx.js" type={LayerType.LAYOUT_L}>
					<LayerTreeItem nodeId="10" labelText="index.js" type={LayerType.LAYOUT_L}/>
				</LayerTreeItem>
			</LayerTreeItem>
		</LayerTreeItem>
		</TreeView>
	)
}