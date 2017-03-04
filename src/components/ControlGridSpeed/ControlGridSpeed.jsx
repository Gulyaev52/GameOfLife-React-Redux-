import React from 'react';
import './ControlGridSpeed.styl';
import Title from '../Title/Title';
import Button from '../Button/Button';
import * as Speed from '../../constants/Speed'

export default function ControlGridSpeed({ activeSpeed, onSetSpeed }) {
    return (
        <div className='control-grid-speed'>
          <span className='control-grid-speed__title'>
            <Title text='sim speed:'/>
          </span>
          <div className='control-grid-speed__button'>
            <Button 
                text='Slow' 
                size='flat'
                onClick={() => onSetSpeed(Speed.SLOW)}
                isActive={activeSpeed == Speed.SLOW}
            />
          </div>
          <div className='control-grid-speed__button'>
            <Button 
                text='Medium' 
                size='flat'
                onClick={() => onSetSpeed(Speed.MEDIUM)}
                isActive={activeSpeed == Speed.MEDIUM}
            />
          </div>
          <div className='control-grid-speed__button'>
            <Button 
                text='Fast' 
                size='flat'
                onClick={() => onSetSpeed(Speed.FAST)}
                isActive={activeSpeed == Speed.FAST}
            />
          </div>
        </div>
    );
} 