import React, { useEffect, useState } from "react";
import SoftPhone from "react-softphone";
import { WebSocketInterface } from "jssip";

function App({sip}) {
  const [domain, setDomain] = useState(import.meta.env.VITE_APP_SIP_DOMAIN);
  const [userName, setUserName] = useState("100");
  const [password, setPassword] = useState("123456789");

  const [config, setConfig] = useState({
    domain: domain,
    uri: `sip:${userName}@${domain}`, // sip:200@mydomain.com
    password: password, //  PASSWORD ,
    ws_servers: `wss://${domain}:8089/ws`, //wss://${domain}:8089/ws
    sockets: new WebSocketInterface(`wss://${domain}:8089/ws`), // `wss://${domain}:8089/ws`
    display_name: "***", //jssip Display Name
    debug: true, // Turn debug messages on
  });

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
    setConfigDetails();
  }, []);

  function setConfigDetails(){
    try{
    setConfig({
      domain: domain,
      uri: `sip:${userName}@${domain}`, // sip:200@app.sokomoto.co.ke
      password: password, //  PASSWORD ,
      ws_servers: `wss://${domain}:8089/ws`, //ws server
      sockets: new WebSocketInterface(`wss://${domain}:8089/ws`),
      display_name: userName, //jssip Display Name
      debug: true, // Turn debug messages on
    });
      alert(`Configured Client Successfully!`);
    } catch(e){
      alert(`Error configuring client ${e}`);
    }
  }
  return (
    <div className="App">
      <div className="credentials-form">
        <label>Username</label>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Domain</label>
        <input value={domain} onChange={(e) => setDomain(e.target.value)} />
        <button onClick={setConfigDetails} className="credentials-form__button">
          Set New Credentials
        </button>
      </div>
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
