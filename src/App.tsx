import React from "react";
import ArchChoice from "./ArchChoice";
import ChooseDrive from "./ChooseDrive";
import DeletionWarning from "./DeletionWarning";
import ImageFileDownload from "./ImageFileDownload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

const Animated = () => {
  const location = useLocation();
  
  /* just a bunch of routes. 
  The <Transition/> at all of the files is to make transitions between 2 routes smoother so make sure to include them at every route */
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}
        key={location.pathname}>
          <Route path="/" element={<ChooseDrive/>}/>
          <Route path="/arch-choice" element={<ArchChoice/>}/>
          <Route path="/deletion-warning" element={<DeletionWarning/>}/>
          <Route path="/downloading-image-file" element={<ImageFileDownload/>}/>
        </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Animated/>
        </Router>
      </>
    </div>
  );
}

export default App;