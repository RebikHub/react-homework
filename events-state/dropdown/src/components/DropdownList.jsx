import React, {useState} from 'react'
import DropdownItem from './DropdownItem'

export default function DropdownList() {
  const changeElement = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
  const [status, setStatus] = useState('');
  function getStatus(text) {
    setStatus(text);
  }
  return (
    <ul className="dropdown">
      {changeElement.map(el => <DropdownItem 
          onChange={(ev) => getStatus(ev.currentTarget.textContent)}
          change={el === status ? 'active' : null}
          text={el}
          key={el}/>)}
    </ul>
  )
}
