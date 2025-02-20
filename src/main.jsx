import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SipProvider } from "react-sip";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SipProvider
      host="41.139.203.87"
      port={5060}     // SIP port matching Zoiper
      wsPort={8089}   // WebSocket port for signaling
      pathname="/ws"
      user="100"      // Matches Zoiper username
      password="123456789"  // Matches Zoiper password
      autoRegister={true}
      autoAnswer={false}
      iceRestart={false}
      sessionTimersExpires={120}
      debug={true}
    > */}
      <App />
    {/* </SipProvider> */}
  </StrictMode>
);
