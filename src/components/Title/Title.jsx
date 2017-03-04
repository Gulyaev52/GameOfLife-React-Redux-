import React from 'react';
import './Title.styl';

export default function Title({ text }) {
  return (
    <span className='title'>{ text }</span>
  );
}