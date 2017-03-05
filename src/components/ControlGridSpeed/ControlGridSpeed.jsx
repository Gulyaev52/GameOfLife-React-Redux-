import React from 'react';
import './ControlGridSpeed.styl';
import Title from '../Title/Title';
import Button from '../Button/Button';
import ControlGrid from '../ControlGrid/ControlGrid';
import * as Speed from '../../constants/Speed';


const renderButtons = (activeSpeed, onSetSpeed) => (
  Object.entries(Speed).map(([speedName, speedValue]) => ( 
    <Button 
        text={speedName} 
        size='flat'
        onClick={() => onSetSpeed(speedValue)}
        isActive={activeSpeed == speedValue}
        key={speedName}
    /> 
  ))
);

const ControlGridSpeed = ({ activeSpeed, onSetSpeed }) => {
    return (
      <div className='control-grid-speed'>
        <ControlGrid title='sim speed:'>
          { renderButtons(activeSpeed, onSetSpeed) }
        </ControlGrid>
      </div>
    );
} 

export default ControlGridSpeed;