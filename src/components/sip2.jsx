import React, { useEffect, useState } from "react";
import { useSIP } from "@/utils/sip";

function App() {
  const { call, disconnect } = useSIP();
  const [extension, setExtension] = useState('')

  return (
    <div className="App">
      <div className="container">
        <div>
          <header className="App-header">Phone Dialer</header>
        </div>

        <div>
          <audio id="remoteAudio" controls>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </div>

        <div>
          <input
          type="number"
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
          />
        </div>

        <div>
          {" "}
          <button onClick={() => call({ extension })}>Call Number</button>
        </div>

        <div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      </div>
    </div>
  );
}

export default App;
