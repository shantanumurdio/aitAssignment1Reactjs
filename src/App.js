import React, { useState } from 'react';
import Navbar from './Navbar';
import Body from './Body';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="">
      <Navbar toggleSidebar={toggleSidebar} />
      <Body isSidebarVisible={isSidebarVisible} />
    </div>
  );
}

export default App;
