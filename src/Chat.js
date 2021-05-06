import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'
import { Link } from 'react-router-dom';
const Chat = ({name, message, timestamp, profilePic}) => {
    return (
        <Link to={`/chat/${name}`}>
        <div className='chat'>
            <Avatar className='chatImage' alt={name} src={profilePic} />
            <div className='chatDetails'>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className='chatTimestamp'>{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
