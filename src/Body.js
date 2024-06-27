import React from 'react';
import Sidebar from './Sidebar';
import TableContainer from './TableContainer';

const Body = ({ isSidebarVisible }) => {
  return (
    <div className='flex'>
      {isSidebarVisible && <Sidebar />}
      <TableContainer />
    </div>
  );
};

export default Body;
