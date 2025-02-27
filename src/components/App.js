import React, {useState} from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState(false)


function implement(){
   setPara(true)
}

  return (
    <div id="main">
      <button id="click" onClick={implement}>Click</button>
      {para && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. 
                   This makes me so happy.</p>
      )}
    </div>
  );
}


export default App;
