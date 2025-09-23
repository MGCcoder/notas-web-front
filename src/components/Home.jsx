import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import BaseModal from '../modals/BaseModal'
import Sidebar from '../modals/Sidebar'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { asignarHeaders } from '../api/main';
import { authenticate } from '../api/auth';

const Home = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const { user } = useAuth();

  asignarHeaders({ token: user.email});

  const onToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  }

  return (
    <div>
      <Navbar onToggleSideBar={onToggleSideBar} />
      <Outlet />
      <BaseModal open={toggleSideBar} onClose={onToggleSideBar} >
        <Sidebar />
      </BaseModal>
    </div>
  );
}

export default Home;
