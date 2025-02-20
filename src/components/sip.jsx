import React, { useEffect } from "react";
import SoftPhone from "react-softphone";
import { WebSocketInterface } from "jssip";


const ws = new WebSocketInterface("wss://41.139.203.87:8089/ws");


const config = {
  domain: "100@41.139.203.87", // sip-server@your-domain.io
  uri: "sip:100@41.139.203.87:5060", // sip:100@your-domain.io
  password: "123456789", //  PASSWORD ,
  // ws_servers: "wss://41.139.203.87:8089/ws", //ws server
  // sockets: new WebSocketInterface("wss://41.139.203.87:8089/ws"),
  sockets: [ws],
  display_name: "Eugene", //jssip Display Name
  debug: true, // Turn debug messages on
};
const setConnectOnStartToLocalStorage = (newValue) => {
  // Handle save the auto connect value to local storage
  return true;
};
const setNotifications = (newValue) => {
  // Handle save the Show notifications of an incoming call to local storage
  return true;
};
const setCallVolume = (newValue) => {
  // Handle save the call Volume value to local storage
  return true;
};
const setRingVolume = (newValue) => {
  // Handle save the Ring Volume value to local storage
  return true;
};

function App({sip}) {
  useEffect(()=>{
    console.log('sip', sip)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <SoftPhone
          callVolume={33} //Set Default callVolume
          ringVolume={44} //Set Default ringVolume
          connectOnStart={false} //Auto connect to sip
          notifications={false} //Show Browser Notification of an incoming call
          config={config} //Voip config
          setConnectOnStartToLocalStorage={setConnectOnStartToLocalStorage} // Callback function
          setNotifications={setNotifications} // Callback function
          setCallVolume={setCallVolume} // Callback function
          setRingVolume={setRingVolume} // Callback function
          timelocale={"UTC+3"} //Set time local for call history
        />
      </header>
    </div>
  );
}

export default App;
