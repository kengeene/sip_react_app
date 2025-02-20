import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sip from './components/sip';

function App() {
  // const [count, setCount] = useState(0);

  // // Use environment variable for pathname
  // const webSocket = new WebSocket("//localhost:5678");

  // useEffect(() => {
  //   webSocket.onopen = () => {
  //     console.log("WebSocket connection established", webSocket);
  //   };

  //   webSocket.onclose = () => {
  //     console.log("WebSocket connection closed", webSocket);
  //   };

  //   webSocket.onerror = (error) => {
  //     console.error("WebSocket connection error:", error);
  //   };

  //   webSocket.onmessage = (event) => {
  //     console.log("Received message from server:", event.data);
  //   };
  // });

  return (
    <>
      <Sip />
    </>
  );
}

export default App
