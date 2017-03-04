import React from 'react';
import './ControlGridSize.styl';
import Title from '../Title/Title';
import Button from '../Button/Button';
import * as Size from '../../constants/Size'

export default function ControlGridSize({ activeSize, onSetSize }) {
    const formatText = ([x, y]) => `Size: ${y}x${x}`;

    return (
        <div className='control-grid-size'>
            <span className='control-grid-size__title'>
                <Title text='grid size:'/>
            </span>
            <div className='control-grid-size__button'>
                <Button 
                    text={formatText(Size.SMALL)}
                    size='flat'
                    isActive={Size.SMALL == activeSize}
                    onClick={() => onSetSize(Size.SMALL)}
                />
            </div>
            <div className='control-grid-size__button'>
                <Button 
                    text={formatText(Size.MEDIUM)}
                    size='flat'
                    isActive={Size.MEDIUM == activeSize}
                    onClick={() => onSetSize(Size.MEDIUM)}
                />
            </div>
            <div className='control-grid-size__button'>
                <Button 
                    text={formatText(Size.LARGE)}
                    size='flat'
                    isActive={Size.LARGE == activeSize}
                    onClick={() => onSetSize(Size.LARGE)}
                />
            </div>   
        </div>
    );
}