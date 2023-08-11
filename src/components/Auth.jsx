import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import "../styles/Auth.css";
const cookies = new Cookies();
function Auth(props) {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth">
      <h2>Sign In With Google To Continue</h2>
      <button onClick={signInWithGoogle}>Sign In With Google </button>
    </div>
  );
}

export default Auth;
