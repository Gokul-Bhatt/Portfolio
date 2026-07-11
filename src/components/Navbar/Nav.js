import React, { useState } from 'react'
import "./Nav.css"
import {Link} from 'react-scroll';
import menu from "../../assets/menu.png"


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
   <section className="navbar">
    <h1>Gokul</h1>
    <div className="menubar">
      <Link activeClass='active' to='home'  spy={true} smooth={true} offset={-100} duration={500} className='menuitem'>Home</Link>
      <Link activeClass='active' to='about'  spy={true} smooth={true} offset={-100} duration={500} className='menuitem'>About</Link>
      <Link activeClass='active' to='skills'  spy={true} smooth={true} offset={-100} duration={500} className='menuitem'>Skills</Link>
     <Link activeClass='active' to='work'  spy={true} smooth={true} offset={-100} duration={500} className='menuitem'>Work</Link> 
     <Link activeClass='active' to='contact'  spy={true} smooth={true} offset={-100} duration={500} className='menuitem'>Contact</Link> 
    </div>
    <img src={menu} alt="menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className="mobmenubar" style={ {display: showMenu? 'flex': 'none'}}>
      <Link activeClass='active' to='home'  spy={true} smooth={true} offset={-100} duration={500} className='mobmenuitem'onClick={()=>setShowMenu(false)}>Home</Link>
      <Link activeClass='active' to='about'  spy={true} smooth={true} offset={-100} duration={500} className='mobmenuitem'onClick={()=>setShowMenu(false)}>About</Link>
      <Link activeClass='active' to='skills'  spy={true} smooth={true} offset={-100} duration={500} className='mobmenuitem'onClick={()=>setShowMenu(false)}>Skills</Link>
     <Link activeClass='active' to='work'  spy={true} smooth={true} offset={-100} duration={500} className='mobmenuitem'onClick={()=>setShowMenu(false)}>Work</Link> 
     <Link activeClass='active' to='contact'  spy={true} smooth={true} offset={-100} duration={500} className='mobmenuitem'onClick={()=>setShowMenu(false)}>Contact</Link> 
    </div>
   </section>
  )
}

export default Nav
