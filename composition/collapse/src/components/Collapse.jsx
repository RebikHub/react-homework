/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Collapse({collapsedLabel, expandedLabel, isExpanded, onExpandedChange}) {

  return (
    <>
      <a className="collapse" onClick={() => onExpandedChange(!isExpanded)}>
        {isExpanded ? collapsedLabel : expandedLabel}
      </a>
      <div className={isExpanded && 'none'}>
        <p>Какой то текст...</p>
      </div>
    </>
  )
}
