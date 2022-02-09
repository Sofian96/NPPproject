import React, {Component} from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IconButton from '@mui/material/IconButton';




class Main extends Component {
    render() {
        return (
            <div className='Main-header'>
            <IconButton>
            <AccountCircleIcon fontSize='large'/>
            </IconButton>

            <IconButton>
            <SportsEsportsIcon fontSize='large'/>
            </IconButton>

            <IconButton>
            <ChatBubbleIcon fontSize='large' />
            </IconButton>

            <IconButton>
            <BuildCircleIcon fontSize='large'/>
            </IconButton>
            </div>
 
        )
    }
}

export default Main;