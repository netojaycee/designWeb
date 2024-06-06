import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/landing";
import Projects from "./pages/projects";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import Contact from "./pages/contact";
import DesignGallery from "./pages/design gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interior-design" element={<DesignGallery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
