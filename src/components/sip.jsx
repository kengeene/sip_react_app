import React, { useEffect } from "react";
import SoftPhone from "react-softphone";
import { WebSocketInterface } from "jssip";




function App({sip}) {
  // const ws = new WebSocketInterface("wss://app.sokomoto.co.ke/ws");
  // https://app.sokomoto.co.ke:8089/ws
  //  http://13.244.184.44

  const config = {
    domain: "app.sokomoto.co.ke",
    uri: "sip:100@app.sokomoto.co.ke", // sip:200@app.sokomoto.co.ke
    password: "123456789", //  PASSWORD ,
    ws_servers: "wss://app.sokomoto.co.ke:8089/ws", //ws server
    sockets: new WebSocketInterface("wss://app.sokomoto.co.ke:8089/ws"),
    display_name: "***", //jssip Display Name
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

  useEffect(() => {
    console.log("sip", sip);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <SoftPhone
          callVolume={100} //Set Default callVolume
          ringVolume={100} //Set Default ringVolume
          connectOnStart={false} //Auto connect to sip
          notifications={false} //Show Browser Notification of an incoming call
          config={config} //Voip config
          setConnectOnStartToLocalStorage={setConnectOnStartToLocalStorage} // Callback function
          setNotifications={setNotifications} // Callback function
          setCallVolume={setCallVolume} // Callback function
          setRingVolume={setRingVolume} // Callback function
          timelocale={"UTC+3"} //Set time local for call history
        >
          <span>Test</span>
        </SoftPhone>
      </header>
    </div>
  );
}

export default App;
