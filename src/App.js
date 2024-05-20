import Home from "./pages/Home";
import Header from "./Components/Header/Components/Header";
import About from "./pages/About";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}

export default App;