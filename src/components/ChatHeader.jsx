import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ChatHeader() {
  return (
    <div className='chat__header'>
      <div className='chat__header__info'>
        <div className='chat__header__avatar'>
          <img src='http://placehold.it/40x40' alt='avatar' />
        </div>
        <div className='chat__header__details'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
      </div>
      <div className='chat__header__icons'>
        <button>
          <SearchIcon />
        </button>
        <button>
          <AttachFileIcon />
        </button>
        <button>
          <MoreVertIcon />
        </button>
      </div>
    </div>
  );
}
