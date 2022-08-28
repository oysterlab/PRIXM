
import {LayerType} from '../../store/model/Type'

const data:any = [
	{
		name: 'comp1@C_TextBoxSingleLine_01'
	},
	{
		name: 'comp2@C_TextBoxSingleLine_01',
	},
	{
		name: 'comp3@C_TextBoxSingleLine_01',
	},
	{
		name: 'comp3@C_ImageBox_01',
	},	
	{
		name: 'layout@L_FlexV',
		layers: [
			{
				name: 'icon@C_ImageBox_01'
			},
			{
				name: 'layout@L_FlexH',
				layers: [
					{name: 'comp1@C_TextBoxSingleLine_01'},
					{name: 'pattern@P_ListH_01',
						layers: [
							{name: 'divider@I_Divider'},
						]
					},
					{name: 'comp2@C_TextBoxSingleLine_01'},

				]

			},
			{
				name: 'text@C_TextBoxSingleLine_01'
			},		
			{name: 'pattern@P_ListV_01'},

		]
	}
]

const recv = (d:any, depth: number):any => {
    d.type = LayerType.COMPONENT
	d.nodeId = (Math.random() * 10000 | 0) + "_" + depth
    d.labelText = d.name;
	
	if (d.name.indexOf('@L_FlexV') > 0) d.type = LayerType.L_FlexV
	else if (d.name.indexOf('@L_FlexH') > 0) d.type = LayerType.L_FlexH
	else if (d.name.indexOf('@L_Frame') > 0) d.type = LayerType.L_Frame
	else if (d.name.indexOf('@L_Linear') > 0) d.type = LayerType.L_Linear;
	else if (d.name.indexOf('@P_') > 0) d.type = LayerType.PATTERN;
	else if (d.name.indexOf('@I_') > 0) d.type = LayerType.ITEM;
	

    ((d.layers) && d.layers.forEach((c:any) => {
        recv(c, depth + 1)
    }))

    return d
}

export default data.map((d:any) => recv(d, 0))