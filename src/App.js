import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;