import React from 'react';
import './ActionsGrid.styl'; 
import Button from '../Button/Button'; 

export default function ActionsGrid(props) {
    const {
        isPlay, 
        isPause, 
        onPlay, 
        onPause, 
        onClear 
    } = props;

    return (
        <div className='actions-grid'>
            <div className='actions-grid__button'>
                <Button 
                    text='play' 
                    size='fat' 
                    onClick={() => onPlay()}
                    isActive={isPlay}/>
            </div>
            <div className='actions-grid__button'>
                <Button 
                    text='pause' 
                    size='fat' 
                    onClick={() => onPause()}
                    isActive={isPause}
                />
            </div>
            <div className='actions-grid__button'>
                <Button 
                    text='clear' 
                    size='fat' 
                    onClick={() => onClear()}
                />
            </div>
        </div>
    );
}