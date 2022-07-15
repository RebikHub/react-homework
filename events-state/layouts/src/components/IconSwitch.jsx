import React from 'react';

export default function Iconswitch({icon, onSwitch}) {
  return (
    <span className='icon material-icons' onClick={() => onSwitch(icon)}>{icon}</span>
  );
}
