import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BaseModal from './modals/BaseModal'
import Sidebar from './modals/Sidebar'

function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const onToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  }

  return (
    <div>
      <Navbar onToggleSideBar={onToggleSideBar} />
      <BaseModal open={toggleSideBar} onClose={onToggleSideBar} >
        <Sidebar />
      </BaseModal>
    </div>
  )
}

export default App
