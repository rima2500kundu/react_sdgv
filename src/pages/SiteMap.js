import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function SiteMap() {
  return <><Helmet>
    <title>Sitemap</title></Helmet><div className="container mt-5 pt-5">
    <div className="row pt-5">
      <div className="col">
        <h1>Routes available</h1>
        <ul>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/">Home</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/about">About</NavLink></li>
          <li><span className="text-danger">Status: WO</span>&nbsp;&nbsp;<NavLink to="/distinctvettingprocess">Distinct Vetted</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/react-js">React Js</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/blogs">Blogs</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/blog-detail">Blog Details page</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/events">Events</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/event-detail">Event Details page</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/our-team">Our team</NavLink></li>
          <li><span className="text-success">Status: OK</span>&nbsp;&nbsp;<NavLink to="/customer-review">Customer Review</NavLink></li>
        </ul>
      </div>
    </div>
  </div></>
}