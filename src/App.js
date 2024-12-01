import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BlogsTop from './components/Body/BlogsTop.js';
import TextsTop from './components/Body/TextsTop.js';
import SearchResult from './components/Body/SearchResult.js';
import HTMLTop from './components/Body/Texts/HTMLTop.js';
import CSSTop from './components/Body/Texts/CSSTop.js';
import JavaScriptTop from './components/Body/Texts/JavaScriptTop.js';
import SQLTop from './components/Body/Texts/SQLTop.js';
import HTMLChapter1 from './components/Body/Texts/HTML/HTMLChapter1.js';
import HTMLChapter2 from './components/Body/Texts/HTML/HTMLChapter2.js';
import HTMLChapter3 from './components/Body/Texts/HTML/HTMLChapter3.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [receivedQuery, setReceivedQuery] = useState('');

  function handleGetQuery (data) {
    setReceivedQuery(data);
  }

  return (
    <>
      <Router>
        <Header onDataSend={handleGetQuery} />
        <Routes>
          <Route path="/" element={<TextsTop />} />
          <Route path="/text" element={<TextsTop />} />
          <Route path="/blog" element={<BlogsTop />} />
          <Route path='/search' element={<SearchResult />} />
          <Route path="/html" element={<HTMLTop />} />
          <Route path="/css" element={<CSSTop />} />
          <Route path="/javascript" element={<JavaScriptTop />} />
          <Route path="/sql" element={<SQLTop />} />
          <Route path="/html/1" element={<HTMLChapter1 />} />
          <Route path="/html/2" element={<HTMLChapter2 />} />
          <Route path="/html/3" element={<HTMLChapter3 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
