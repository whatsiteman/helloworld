import React from 'react';
import Loading from './Loading'
import '../scss/styles.scss';

function Layout({ loading, children }) {
  return loading ? <Loading /> :
    <div id="warpper">
      {children}
    </div>
}

export default Layout