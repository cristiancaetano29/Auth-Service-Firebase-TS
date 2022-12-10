import './style.css'
import logoGoogle from '../../assets/logo-google.png'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import{ auth } from '../../services/firebase'
import { useState } from 'react';

function SingnIn() {
  const [name, setName] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential?.accessToken ;
        const user = result.user;
        console.log(user)
        setName(user.displayName || '')
        setProfileImage(user.photoURL || '')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if(errorCode)
          console.log('errorCode: ' + errorCode)
        if(errorMessage)
          console.log('errorMessage: ' + errorMessage)
        if(email)
          console.log('erroremail: ' + email)
        if(credential)
          console.log('credential: ' + credential)
      });
    }

    return (
      <div className="sign-in">
        <button onClick={signInWithGoogle}>
          <img src={logoGoogle} alt="Logo Google" />
          <span>Login with google</span>
        </button>

        <div className="user-info">
          <h1>{name}</h1>
        </div>
      </div>
    )
  }

  export default SingnIn
