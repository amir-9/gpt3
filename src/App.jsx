import "./App.css";
import {
  Header,
  WhatIsGpt,
  Future,
  RequestAccess,
  Blog,
  Footer,
} from "./containers";

import { Brands, CTA } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <WhatIsGpt />
      <Future />
      <RequestAccess />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
