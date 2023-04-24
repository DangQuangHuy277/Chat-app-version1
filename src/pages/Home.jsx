import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { useState } from "react";

export default function Home() {
    const [currentRoom, setCurrentRoom] = useState(0)

    function handleRoomChange(roomId) {
        setCurrentRoom(roomId);
    }

    return (
        <>
            <Sidebar changeRoom = {handleRoomChange}/>
            <Chat />
        </>
    )
}