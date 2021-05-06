import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';
const ChatScreen = () => {
    const [input, setInput] = useState ('');
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            img: 'https://images.alphacoders.com/169/thumbbig-169443.jpg',
            message: 'Hey!How are you.'
        },
        {
            name: 'Sarah',
            img: 'https://images.alphacoders.com/169/thumbbig-169443.jpg',
            message: 'Hows it going!'
        },
        {
            message: 'Hii Sarah, I am fine How are you?'
        },
    ]);

    const handleSend = (e)=>{
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreenTimestamp'>YOU MATCHED WITH ELLEN ON 05/05/21</p>
            {messages.map((message) =>
                message.name ? (
                    <div className='chatScreenMessage'>
                        <Avatar className='chatScreenImage' src={message.img} />
                        <p className='chatScreenText'>{message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreenMessage'>
                        <p className='chatScreenTextUser'>{message.message}</p>
                    </div>
                ))}

            <form action="" className='chatScreenInput'>
                <input  
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                className='chatScreenInputField' 
                type="text" 
                placeholder='Type a message...' />
                <button type='submit' onClick={handleSend} className='chatScreenInputButton'>Send</button>
            </form>


        </div>
    )
}

export default ChatScreen
