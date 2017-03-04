import React from 'react';
import './TopMenu.styl';
import Menu from '../Menu/Menu';
import ActionsGridContainer from '../../containers/ActionsGridContainer';
import Generation from '../../containers/Generation'; 

function TopMenu() { 
  return (
    <div className='top-menu'>
       <Menu direction='top'> 
         <div className='top-menu__content'>
            <div className='top-menu__actions'>
              <ActionsGridContainer/>
            </div>  
            <span className='top-menu__generation'> 
              <Generation />
            </span> 
         </div>
       </Menu>
    </div>
  );
}

export default TopMenu;