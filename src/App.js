import React, { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const Page = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
