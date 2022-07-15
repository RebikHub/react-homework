import React, {useState} from 'react'
import DropdownList from './DropdownList'
import DropdownButton from './DropdownButton'

export default function Dropdown() {
  const [open, setOpen] = useState('');
  function toggleOpen() {
    if (open === '') {
      setOpen('open')
    } else {
      setOpen('')
    }
  }
  return (
    <div className={'dropdown-wrapper ' + open}>
      <DropdownButton onToggle={toggleOpen}/>
      <DropdownList/>
    </div>
  )
}
