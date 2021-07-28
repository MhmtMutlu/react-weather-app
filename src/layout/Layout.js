import React from 'react';
import './Layout.style.scss';

function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout;
