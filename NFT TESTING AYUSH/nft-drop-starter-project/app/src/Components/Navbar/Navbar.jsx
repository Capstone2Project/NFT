import React, {useState} from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'

import './Navbar.css'

import Tagmatch from '../../assets/tagmatch.JPG'


//yesma change garna parcha
const Navbar = () => {
    
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    //<span className="logo"> TagMatch </span>
    return (
        <div className = 'navbar'>
            <div className = 'container'>
                <div className="topleft">
                    <a href ="#"> <img src = {Tagmatch} height = '50px' width = '50px' alt = "TagMatch"/><span>TagMatch</span></a>
                </div>
                <div className="topcenter">
                    <div className = "searchbar">
                        <AiOutlineSearch className="searchIcon" />
                        <input placeholder = " Search for event, venue..." className = "searchInput"/>
                    </div>
                </div>
                <div className="topright">
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li><a href='#' > Home </a></li>
                        <li><a href='#' > About </a></li>
                        <li><a href='#' > Contact </a></li>
                    </div>
                </div>
               
               
               <div className = 'profile-icon'>
                   <CgProfile size = "35px" />
               </div>
               <div className = 'nav-icon' onClick = {handleClick}>
                   {click ? (<FaRegTimesCircle className ='icon' />) : (<HiOutlineMenu  size = "35px" />)}
               </div>
            </div>

        </div>
    )
}

export default Navbar