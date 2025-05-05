import React, {useEffect} from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    document.title = "Khairien Nissa";
  }, []);
  return (
    <div className="bg-site bg-blend-saturation bg-no-repeat bg-cover overflow-hidden xl:px-24 pb-40">
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Services /> */}
      <Work />
      {/* <Contact /> */}
      <div className="h-16"></div>
    </div>
  );
};

export default App;
