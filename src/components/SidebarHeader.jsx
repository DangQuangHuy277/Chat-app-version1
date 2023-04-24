import LogoutIcon from "@mui/icons-material/Logout";
import { signOutUser } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SidebarHeader() {
    const navigate = useNavigate();
    async function handleSignOut() {
        try {
            let conf = window.confirm("Does you want to sign out?");
            if (!conf) return;
            await signOutUser();
            sessionStorage.clear();
            navigate("/login");
        } catch (err) {
            console.error(err);
            alert("Error");
        }
    }

    return (
        <div className='sidebar__header'>
            <div className="user__infor">
                <div className='avatar'>
                    <img src={sessionStorage.getItem("photoUrl")} alt='avatar' />
                </div>
                <div className='username'>
                    <span>{sessionStorage.getItem("username")}</span>
                </div>
            </div>
            <div className='sidebar__header__icons'>
                <button title='Sign out' onClick={handleSignOut}>
                    <LogoutIcon />
                </button>
            </div>
        </div>
    );
}
