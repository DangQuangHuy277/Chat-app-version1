import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SidebarSearch({handleSearch}) {
  const [message, setMessage] = useState("");

  function handleChange(e){
    handleSearch(e.target.value);
  }

  return (
    <div className='sidebar__search'>
      <div className='sidebar__search__container'>
        <SearchIcon />
        <input
          placeholder='Search or start new chat'
          type='text'
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
