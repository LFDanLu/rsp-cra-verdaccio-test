import './App.css';
import React from "react";
import { Provider, defaultTheme, Button } from "@adobe/react-spectrum";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider theme={defaultTheme}>
          <Button variant={"primary"}>Click Me</Button>
        </Provider>
      </header>
    </div>
  );
}

export default App;
