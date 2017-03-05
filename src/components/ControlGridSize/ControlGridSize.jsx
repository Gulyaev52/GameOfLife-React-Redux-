import React from 'react';
import './ControlGridSize.styl';
import Title from '../Title/Title';
import Button from '../Button/Button';
import ControlGrid from '../ControlGrid/ControlGrid';
import * as Size from '../../constants/Size'


const formatText = ([x, y]) => `Size: ${y}x${x}`;

const renderButtonItems = (activeSize, onSetSize) => (
    Object.values(Size).map((size, i) => ( 
        <Button 
            text={formatText(size)}
            size='flat'
            isActive={size == activeSize}
            onClick={() => onSetSize(size)}
            key={i.toString()}
        /> 
    ))
);

const ControlGridSize = ({ activeSize, onSetSize }) => { 
    return (
        <div className='control-grid-size'>
            <ControlGrid title='grid size:'>
                { renderButtonItems(activeSize, onSetSize) }
            </ControlGrid>
        </div>
    ); 
} 

export default ControlGridSize;