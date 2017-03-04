import React from 'react';
import Menu from '../Menu/Menu';
import ControlGridSizeContainer from '../../containers/ControlGridSizeContainer';
import ControlGridSpeedContainer from '../../containers/ControlGridSpeedContainer';
import './BottomMenu.styl';

function BottomMenu(props) {
  return (
    <div className='bottom-menu'>
      <Menu direction='bottom'>
        <div className='bottom-menu__control-grid-size'>
          <ControlGridSizeContainer />
        </div> 
        <div className='bottom-menu__control-grid-speed'>
          <ControlGridSpeedContainer />
        </div> 
      </Menu>
    </div>
  );
}

export default BottomMenu;