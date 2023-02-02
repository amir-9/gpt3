import "./App.css";
import { Header } from "./containers";
import { Brands } from "./components";
import { WhatIsGpt } from "./containers";
import { Future } from "./containers";
import { RequestAccess } from "./containers";
import { Blog } from "./containers";
import { Footer } from "./containers";

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <WhatIsGpt />
    </div>
  );
}

export default App;
