import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
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
import { useEffect } from "react";
// import { Helmet } from "react-helmet";
import SiteMap from "./pages/SiteMap";
// import Loader from "./Components/Loader";
// import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  // console.log(pathname);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use 'auto' for immediate scrolling without smooth animation
    });
  }, [pathname]);
  return null;
}

// export default ScrollToTop;

function App() {
  // const [loading, setLoading] = useState(true);
  // const location = useLocation();

  // useEffect(() => {
  //   // Show loader when URL changes
  //   setLoading(true);
  // }, [location.pathname]); // Watch for changes in pathname

  // useEffect(() => {
  //   // Hide loader when page finishes loading
  //   const handleLoad = () => setLoading(false);
  //   window.addEventListener('load', handleLoad);

  //   // Hide loader when page is scrolled
  //   const handleScroll = () => {
  //     setLoading(false);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
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
      <ScrollToTop />
      <Header />
      <Routes>
        {/*<Route path="/" element={} />*/} {/* Scroll to top on every route change */}
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
        <Route path="/sitemap" element={<SiteMap />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
