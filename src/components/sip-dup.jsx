import JsSIP from "jssip";
import NodeWebSocket from "jssip-node-websocket";
import { useEffect } from "react";
// import WebSocket from 'ws'

function App(){
  // let socket = new WebSocket("wss://41.139.203.87:8089/ws");

    useEffect(() => {
      try {
        // const WebSocket = require("ws");
        // const socket = new WebSocket("ws://41.139.203.87:8089");
        // console.log('socket', socket)
        let ua = new JsSIP.UA({
          uri: "sip:100@41.139.203.87",
          authorization_user: "100",
          password: "100",
          display_name: "INT 1",
          sockets: {url:"wss://41.139.203.87:8089/ws"},
          register: true,
        });

        console.log("WebSocket");
        ua.start();
        ua.register();
        console.log(socket.isConnected());
        ua.on("connected", function (e) {
          console.log("connected");
        });
        ua.on("disconnected", function (e) {
          console.log("disconnected");
        });
        ua.on("newRTCSession", function (e) {
          console.log(e);
        });
        ua.on("newMessage", function (e) {
          console.log(e);
        });
        console.log("User Agent Created.");

        var eventHandlers = {
          progress: function (e) {
            console.log("call is in progress");
          },

          failed: function (e) {
            console.log("call failed with cause: " + e.data.cause);
          },

          ended: function (e) {
            console.log("call ended with cause: " + e.data.cause);
          },

          confirmed: function (e) {
            console.log("call confirmed");
          },
        };

        var options = {
          eventHandlers: eventHandlers,
          mediaConstraints: { audio: false, video: false },
        };

        // make a call
        var session = ua.call("sip:222@41.139.203.87", options);
      } catch (e) {
        console.log("error", e);
      }
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>SIP</div>
      </header>
    </div>
  );
}

export default App;
