import React from 'react';
import Controller from '../medias/controller.png';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Header() {
  return ( 
      <div>
      
      <div className='nav'>
      <img src={Controller}/> <h1> The Gamers Finder App.</h1>
      </div>
      
      <div className='Form-header'>
      <h1>Gamers Finder</h1>
      <AccountCircleIcon />
      <SportsEsportsIcon />
      <ChatBubbleIcon />
      </div>
      
      </div>
    )
}

export default Header
 