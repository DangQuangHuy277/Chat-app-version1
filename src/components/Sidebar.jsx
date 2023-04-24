import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import SidebarChatList from './SidebarChatList';
import { useState } from 'react';
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";


export default function Sidebar({ changeRoom }) {
    const [searchUsers, setSearchUser] = useState([]);

    async function handleSearchUser(searchUser) {
        const searchResult = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            const name = doc.data().name;
            //alert(name)
            if (name.indexOf(searchUser) !== -1) {
                searchResult.push(doc);
            }
        });
        setSearchUser(searchResult);
    }



    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarSearch handleSearch={handleSearchUser} />
            <SidebarChatList chatList={searchUsers} changeRoom={changeRoom} />
        </div>
    )
}




