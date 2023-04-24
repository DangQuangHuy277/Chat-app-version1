import { useState } from 'react';
import {db } from '../firebase'

export default function SidebarChatList({ chatList }) {
    const [selected, setSelected] = useState(0);

    function handleSelect(selectedDocId) {
        //alert(selectedDocId)
        setSelected(selectedDocId);


    }

    return (
        <div className="sidebar__chatlist" onClick={() => { console.log(chatList) }}>
            <h1 className="sidebar__chatlist__header">Add New Chat </h1>
            <ul>
                {
                    chatList.map((doc) => {
                        if (doc.id === selected) {
                            return <li key={doc.id} style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                                <SidebarChat user={doc} handleClick={handleSelect}/>
                            </li>
                        }
                        console.log(doc.data().name)
                        return <li key={doc.id}><SidebarChat user={doc} handleClick={handleSelect}/></li>
                    })
                }
            </ul>
        </div>
    )
}

function SidebarChat({ user, handleClick }) {
    return (
        <div className="sidebar__chat" onClick={() => {handleClick(user.id)}}>
            <div className="avatar">
                <img src="http://placehold.it/40x40" alt="avatar" />
            </div>
            <div className="sidebar__chat__info">
                <h3>{user.data().name}</h3>
                <p>This is the last message</p>
            </div>
        </div>
    )
}
