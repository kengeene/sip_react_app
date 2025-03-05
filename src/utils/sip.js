import { useEffect, useState } from "react";
import { WebSocketInterface, UA } from "jssip";

export const useSIP = () => {
      const socket = new WebSocketInterface("wss://app.sokomoto.co.ke/");
      const configuration = {
        sockets: [socket],
        uri: "sip:200@app.sokomoto.co.ke",
        password: "123456789",
        register: true,
        display_name: "Eugene - 200",
        debug: true,
        hack_via_ws: true,
        trace_sip: true,
      };

    //   const config = {
    //     domain: "100@41.139.203.87", // sip-server@your-domain.io
    //     uri: "sip:100@41.139.203.87", // sip:100@your-domain.io
    //     password: "123456789", //  PASSWORD ,
    //     ws_servers: "wss://41.139.203.87:8089/ws", //ws server
    //     // sockets: new WebSocketInterface("wss://41.139.203.87:8089/ws"),
    //     sockets: [ws],
    //     display_name: "Eugene", //jssip Display Name
    //     debug: true, // Turn debug messages on
    //   };

      const coolPhone = new UA(configuration);
      const [listener, setListener] = useState(null)
      const [isConnected, setIsConnected] = useState(false);

          coolPhone.on("connected", function (e) {
            console.log("Phone is connected", e);
            setIsConnected(true);
          });

           coolPhone.on("connecting", function (e) {
             console.log("Phone is connected", e)
           });


               coolPhone.on("registered", function (e) {
                 console.log("Phone is registered", e);
               });

                   coolPhone.on("unregistered", function (e) {
                     console.log("Phone is unregistered", e);
                   });



                   coolPhone.on("registrationFailed", function (e) {
                     console.log("Phone registrationFailed", e);
                   });

          coolPhone.on("disconnected", function (e) {
            /* Your code here */
            console.log("Phone is disconnected", e);
          });

          coolPhone.on("newRTCSession", function (e) {
            /* Your code here */
            console.log("new newRTCSession made", e);
            try{

            e.session.answer()
            } catch(e){
                console.log('failed to answer...')
            }
          });

          coolPhone.on("newMessage", function (e) {
            /* Your code here */
            console.log("new message event", e);
          });

      useEffect(() => {
        console.log("use effect before");
        initialize();
        console.log('use effect after')
        // call();
      }, []);

      const initialize = async() => {
        console.log('initializing phone...')
        try {
          const phoneInit = await coolPhone.start();
          console.log('phoneInit', phoneInit)
        } catch (error) {
          console.log("error", error);
        }
      };

      // Register callbacks to desired call events
      const eventHandlers = {
        progress: function (data) {
          /* Your code here */
          console.log("progress", data);
        },
        failed: function (data) {
          /* Your code here */
          console.log("failed", data);
        },
        confirmed: function (data) {
          /* Your code here */
          console.log("confirmed", data);
        },
        ended: function (data) {
          /* Your code here */
          console.log("ended", data);
        },
      };

      const options = {
        eventHandlers: eventHandlers,
        mediaConstraints: {
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          },
          video: false
        },
        sessionTimersExpires: 120,
        pcConfig: {
          iceServers: [
            {
              urls: [
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
              ],
            },
          ],
          iceCandidatePoolSize: 10,
          iceTransportPolicy: 'all'
        },
        rtcOfferConstraints: {
          offerToReceiveAudio: true,
          offerToReceiveVideo: false
        }
      };


      async function call({extenstion = 107}) {
        await coolPhone.start();

        if (!isConnected) {
          console.log("Cannot make call - phone not connected");
          return;
        }

        console.log(`calling...${extenstion}`);
        const callListener = coolPhone.call(
          `sip:${extenstion}@app.sokomoto.co.ke`,
          options
        );
        setListener(callListener);
      }

      function disconnect(){
        try{
                    console.log("isConnected() before stop", coolPhone.isConnected());

            coolPhone.stop()

        // coolPhone.terminateSessions();
        console.log("isConnected() after stop", coolPhone.isConnected());
        }catch(e){
            console.log("error disconnectting call", e);
        }
      }


      return {
        call,
        disconnect,
      };
}