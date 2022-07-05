import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Context } from './context'

const Sidebar = () => {

  const contextSidebar = useContext(Context)

  return (
    <aside className={contextSidebar.showSidebar ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <h3>Coding Addict</h3>
        <button 
          className='close-btn'
          onClick={contextSidebar.handleShowSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((item,id)=>(
          <li key={item.id}>
            <a href={item.url}> {item.icon} {item.text}</a>
          </li>
        ))}
      </ul>
      <ul className='social-icons'>
        {social.map((item,id)=>(
          <li key={item.id}>
            <a href={item.url}> {item.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
