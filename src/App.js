import Home from "./pages/Home";
import About from "./pages/About";

import {Routes, Route} from 'react-router-dom';

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;