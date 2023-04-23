import React from 'react'

const HamburgerMenu = ({active, setActive}) => {
  return (
    <div id='menu' onClick={() => setActive(active => !active)}>
        <span className={`${active ? 'firstSpan' : ''}`}></span>
        <span className={`${active ? 'secondSpan' : ''}`}></span>
        <span className={`${active ? 'thirdSpan' : ''}`}></span>
    </div>
  )
}

export default HamburgerMenu
