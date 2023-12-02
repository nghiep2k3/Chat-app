import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";

import { Auth } from "./components/Auth";
import Chat from "./components/Chat";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token-nghiep"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  const roomInputRef = useRef(null)

  if (!isAuth) {
    return (
      <div isAuth={isAuth} setIsAuth={setIsAuth}>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label> Enter room name: </label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}> Enter Chat</button>
        </div>
      )}
    </div>
  );
}

export default App;
