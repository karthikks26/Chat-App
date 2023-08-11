import React, { useRef, useState } from "react";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import "./App.css";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import "../src/styles/Room.css";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");
  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <div className="child">
            <label>Enter room name</label>
            <input ref={roomInputRef} />
            <button
              onClick={() => {
                setRoom(roomInputRef.current.value);
              }}
            >
              {" "}
              Enter Chat
            </button>
          </div>
        </div>
      )}
      <div className="sign-out">
        <button onClick={signUserOut} className="btn-out">
          Sign out
        </button>
      </div>
    </>
  );
}

export default App;
