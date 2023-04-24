import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export default function Login() {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle()

      const name = result.user.displayName;
      const email = result.user.email;
      const photoUrl = result.user.photoURL;
      //localStorage.clear();

      // console.log(name, email, photoUrl);
      sessionStorage.setItem("userID", result.user.uid)
      sessionStorage.setItem("username", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("photoUrl", photoUrl);
      sessionStorage.setItem("authenticated", true);

      await setDoc(doc(db, "users", result.user.uid), {
        name: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL
      })

      if (sessionStorage.getItem("authenticated") === "true") {
        alert("Login success")
        // console.log(name, email, photoUrl)
        navigate('/');
      }
      else {
        throw new Error('Not Authentication');
      }
    } catch (err) {
      alert(err.message);
    }

  };




  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
          alt='whatsapp logo'
        />
        <div className='login__text'>
          <h1>Sign in to ChatApp</h1>
        </div>
        <button onClick={handleSignInWithGoogle}>
          <GoogleIcon /> Sign in with Google
        </button>
      </div>
    </div>
  )
}
