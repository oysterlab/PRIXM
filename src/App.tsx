import React, { useEffect } from 'react'
import Workspace from './component/Workspace'
import './sass/app.scss'
import { useAppDispatch } from './store/hooks'
import { actions } from './store/slice/app'


function App() {
  const dispatch = useAppDispatch()
 
  const updateScreenSize = () => {
    dispatch(actions.updateScreenSize({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }))
  }
  
  useEffect(() => {
    updateScreenSize()
    window.addEventListener("resize", updateScreenSize)
    return(() => {
      window.removeEventListener("resize", updateScreenSize)
    })
  })

  return (
    <div className='fullscreen-view flex-container'>
      <Workspace />
    </div>
  )
}

export default App;
