import React from 'react'

import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className = 'social'>
            <AiFillFacebook className='icon' />
            <AiFillInstagram className='icon' />
            <FaTwitter className='icon' />
            <BsPinterest className='icon' />
        </div>
        <div className = 'container'>
          <div className ='col'>
            <h3>Home</h3>
            <p>Connect Phantom</p>
            <p>Upload Ticket</p>
            <p>Discover Widget</p>
            <p>Search Events</p>
          </div>
          <div className ='col'>
            <h3>About</h3>
            <p>Connect Phantom</p>
            <p> Minting Tokens</p>
            <p>Upload Tickets</p>
            <p>Book Tickets</p>
          </div>
          <div className ='col'>
            <h3>Contact</h3>
            <p>Home Phone</p>
            <p>Office Phone</p>
            <p>Email</p>
            <p>Mailing Address</p>
          <div/>
        </div>
    </div>
  </div>
  )
}

export default Footer