import React from 'react'

export default function DropdownButton({onToggle}) {
  return (
    <button className="btn" onClick={onToggle}>
      <span>Account Settings</span>
      <i className="material-icons">public</i>
    </button>
  )
}
