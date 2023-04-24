import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function ChatFooter() {
    const [message, setMessage] = useState('')

    function handleChange(e) {
        setMessage(e.target.value)
        console.log(e.target.value)
    }
    
    function handleSubmit(e) {
        alert(message)
        const input = document.querySelector('.type_message__form input');
        input.value = "";
        setMessage("")
        e.preventDefault()
    }

    return (
      <div className="chat__footer">
        <button className='insert_emotion__icon'><InsertEmoticonIcon /></button>
        <form className='type_message__form'>
          <input placeholder="Type a message" onChange={handleChange} type="text" />
          <button type="submit" onClick={handleSubmit}><SendIcon /></button>
        </form>
        <button className='mic__icon'><MicIcon /></button>
      </div>
    )
  }