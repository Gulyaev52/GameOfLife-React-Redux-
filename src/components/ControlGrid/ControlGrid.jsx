import React from 'react';
import Title from '../Title/Title';

import './ControlGrid.styl';


const ControlGrid = ({ title, children }) => {
    return ( 
        <div className='control-grid'>
            <span className='control-grid__title'>
                <Title text={title} />
            </span>
            { 
                children.map((child, i) => (
                    <div className='control-grid__item' key={i}>
                        {child}
                    </div>
                )) 
            }
        </div>
    );
}

export default ControlGrid;