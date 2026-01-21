import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Service from "./pages/Service";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />


      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
