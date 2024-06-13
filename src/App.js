import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import DistinctVettingProcess from "./pages/DistinctVettingProcess";
import ReactJs from "./pages/ReactJs";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import OurTeam from "./pages/OurTeam";
import CustomerReview from "./pages/CustomerReview";
// import ScrollToTop from "./Components/ScrollToTop";

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
        <Route
          path="/distinctvettingprocess"
          element={<DistinctVettingProcess />}
        />
        <Route path="/react-js" element={<ReactJs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-detail" element={<EventDetails />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/customer-review" element={<CustomerReview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
