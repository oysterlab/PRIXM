import react from 'react'
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import { LayerType } from '../../store/model/Layer';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Label from '@mui/icons-material/Label';
import Typography from '@mui/material/Typography';
import LayerIcon, { ImageBoxIcon } from './LayerIcon';

type LayerTreeItemProps = TreeItemProps & {
	type: LayerType;
	labelText: string;
}
  
const Root = styled(TreeItem)(({theme}) => ({
	color: theme.palette.text.secondary,
	[`& .${treeItemClasses.content}`]: {
		paddingRight: theme.spacing(1),
	},
  [`& .${treeItemClasses.group}`]: {
//   marginLeft: 0,
    // [`& .${treeItemClasses.content}`]: {
    //   paddingLeft: theme.spacing(2)
    // }
  }
}))

export default function LayerTreeItem(props: LayerTreeItemProps) {
	const {
		type,
		labelText,
		...others
	} = props

	return (
		<Root {...others}
			label= {
				<Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
		          {/* <Box component={icon} color="inherit" sx={{ mr: 1 }} />	 */}
				  <ImageBoxIcon fontSize="small" color="primary" />
					<Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
						{labelText}
					</Typography>
				</Box>
			}>
		</Root>                
	)
}