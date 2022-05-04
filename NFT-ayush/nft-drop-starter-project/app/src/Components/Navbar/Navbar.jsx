import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'

import './Navbar.css'

import Tagmatch from '../../assets/tagmatch.png'
import Suggestion from '../Suggetion/suggestion'
import { fetchItems } from '../../utility/getEvents'
import Popup from '../Popup/popup'

//yesma change garna parcha
const Navbar = () => {
    
    const [inputValue,setInputValue] = useState('');
    const [state,setState] = useState({isFocused:false,events:[],popUpEvent:{},isPopupOpen:false})
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const inputRef = useRef()
    
    useEffect(()=>{
        async function fetch(){
            let events = await fetchItems('*','US',1,5,inputValue);
            if(events){
                setState(s=>({
                ...s,
                events:[...events]
            }))
        }
        else{
            setState(s=>({
                ...s,
                events:[]
            }))
        }
    }
    fetch();
	},[inputValue])   

  	const inputHandler = useCallback((e) => {
    	const { value } = e.target;
    	setInputValue(value);
    	setState(s=>({
        	...s,
        	isFocused:true
    	}))
  	})

	const clickHandler = useCallback((id) =>{
    	setState(s=>({
        	...s,
        	popUpEvent:id,
        	isPopupOpen:true
    	}))
	},[])

	useEffect(()=>{
    	window.document.addEventListener('click',(event)=>{
        	const suggestionComponent = window.document.getElementById('suggestion');
        	const inputComponent = inputRef.current;
        	if((suggestionComponent && suggestionComponent.contains(event.target)) || (inputComponent && inputComponent.contains(event.target))){
            	setState(s=>({
                	...s,
                	isFocused:true
            	}))
        	}
        	else{
            	setState(s=>({
                	...s,
                	isFocused:false
            	}))
        	}
    	})
    	return ()=>{
        	window.document.removeEventListener('click',()=>{
            	console.log("Event Listener removed");
        	})
    	}
	},[])
	const closeHandler = useCallback(() =>{
    	setState(s=>({
        	...s,
        	isPopupOpen:false
    	}))
    	setInputValue('')
	},[])
    
    //<span className="logo"> TagMatch </span>
    return (
        <div className = 'navbar'>
        	{
        		state.isPopupOpen?<Popup closeHandler={closeHandler} data={state.popUpEvent} />:null
        	}
            <div className = 'container'>
                <div className="topleft">
                    <a href ="#"> <img src = {Tagmatch} height = '50px' width = '50px' alt = "TagMatch"/><span>TagMatch</span></a>
                </div>
                <div className="topcenter">
                    <div className = "searchbar">
                        <AiOutlineSearch className="searchIcon" />
                        <input ref={inputRef} onFocus={()=>{setState(s=>({
                            ...s,
                            isFocused:true
                        }))}} placeholder = " Search for event, venue..." className = "searchInput"/>
                    </div>
                    {
                        state.isFocused?<Suggestion suggestions = {state.events} clickHandler={clickHandler}/>:null
                    }
                </div>
                <div className="topright">
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li><a href='#' ><span> Home </span></a></li>
                        <li><a href='#' ><span> About </span></a></li>
                        <li><a href='#' ><span> Contact </span></a></li>
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