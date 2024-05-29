import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import DistinctVettingProcess from "./pages/DistinctVettingProcess";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },

  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ])

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/distinctvettingprocess" element={<DistinctVettingProcess />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;