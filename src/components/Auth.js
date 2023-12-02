import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import Cookies from "universal-cookie";

export const Auth = ({ setIsAuth }) => {
  const cookies = new Cookies();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token-nghiep", result.user.refreshToken);
      console.log(result);
      setIsAuth(true);
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Đăng nhập với Google</p>
      <button onClick={signInWithGoogle}>Đăng nhập ngay</button>
    </div>
  );
};
