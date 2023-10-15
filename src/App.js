import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import Form from './Form'; // Import the Form component

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Books catalog fom Google</Link>
          </li>
          <li>
            <Link to="/add">Add to my Book List</Link> {/* Add a link to the Form component */}
          </li>
          <li>
            <a
              href="https://www.goodreads.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goodreads
            </a>
          </li>
          <li>
            <a
              href="https://www.librarything.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LibraryThing
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/add" element={<Form />} /> {/* Add a route to the Form component */}
      </Routes>
    </Router>
  );
}

export default App;
