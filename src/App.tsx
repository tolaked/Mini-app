import React from "react";

import BookList from "./components/book/BookList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetBook from "./components/book/GetBook";
import LandingPage from "./components/landing-page";

const App: React.FC = () => {
  return (
    <Router>
    <div className="min-h-screen bg-gray-100">

      <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/books" Component={BookList} />
          <Route path="/book/:isdn" Component={GetBook} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
