import react, { RefObject, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { actions } from '../store/slice/app'


interface HeaderProps {

}

export default function Header({}:HeaderProps) {
	return <div className='header'>
		Header
	</div>
}