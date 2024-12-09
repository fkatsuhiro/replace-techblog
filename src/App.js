import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BlogsTop from './components/Body/BlogsTop.js';
import TextsTop from './components/Body/TextsTop.js';
import SearchResult from './components/Body/SearchResult.js';
import HTMLTop from './components/Body/Texts/HTMLTop.js';
import HTMLChapter1 from './components/Body/Texts/HTML/HTMLChapter1.js';
import HTMLChapter2 from './components/Body/Texts/HTML/HTMLChapter2.js';
import HTMLChapter3 from './components/Body/Texts/HTML/HTMLChapter3.js';

/* CSS教材 */
import CSSTop from './components/Body/Texts/CSSTop.js';
import CSSChapter1 from './components/Body/Texts/CSS/CSSChapter1.js'
import CSSChapter2 from './components/Body/Texts/CSS/CSSChapter2.js'
import CSSChapter3 from './components/Body/Texts/CSS/CSSChapter3.js'
import CSSChapter4 from './components/Body/Texts/CSS/CSSChapter4.js'

/* JavaScript教材 */
import JavaScriptTop from './components/Body/Texts/JavaScriptTop.js';

/* SQL 教材 */
import SQLTop from './components/Body/Texts/SQLTop.js';
import SQLChapter1 from './components/Body/Texts/SQL/SQLChapter1.js';
import SQLChapter2 from './components/Body/Texts/SQL/SQLChapter2.js';
import SQLChapter3 from './components/Body/Texts/SQL/SQLChapter3.js';
import SQLChapter4 from './components/Body/Texts/SQL/SQLChapter4.js';
import SQLChapter5 from './components/Body/Texts/SQL/SQLChapter5.js';
import SQLChapter6 from './components/Body/Texts/SQL/SQLChapter6.js';

/* Blog 教材 */
import Article_1 from './components/Body/Blogs/Article_1.js';
import Article_2 from './components/Body/Blogs/Article_2.js';
import Article_3 from './components/Body/Blogs/Article_3.js';
import Article_4 from './components/Body/Blogs/Article_4.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [receivedQuery, setReceivedQuery] = useState('');

  function handleGetQuery (data) {
    setReceivedQuery(data);
  }

  return (
    <>
      <Router basename="/replace-techblog">
        <Header onDataSend={handleGetQuery} />
        <Routes>
          <Route path="/" element={<TextsTop />} />
          <Route path="/texts" element={<TextsTop />} />
          <Route path='/search' element={<SearchResult />} />
          <Route path="/texts/html" element={<HTMLTop />} />
          <Route path="/texts/html/chapter/1" element={<HTMLChapter1 />} />
          <Route path="/texts/html/chapter/2" element={<HTMLChapter2 />} />
          <Route path="/texts/html/chapter/3" element={<HTMLChapter3 />} />
          <Route path="/texts/css" element={<CSSTop />} />
          <Route path="/texts/css/chapter/1" element={<CSSChapter1 />} />
          <Route path="/texts/css/chapter/2" element={<CSSChapter2 />} />
          <Route path="/texts/css/chapter/3" element={<CSSChapter3 />} />
          <Route path="/texts/css/chapter/4" element={<CSSChapter4 />} />
          <Route path="/texts/javascript" element={<JavaScriptTop />} />
          <Route path="/texts/sql" element={<SQLTop />} />
          <Route path="/texts/sql/chapter/1" element={<SQLChapter1 />} />
          <Route path="/texts/sql/chapter/2" element={<SQLChapter2 />} />
          <Route path="/texts/sql/chapter/3" element={<SQLChapter3 />} />
          <Route path="/texts/sql/chapter/4" element={<SQLChapter4 />} />
          <Route path="/texts/sql/chapter/5" element={<SQLChapter5 />} />
          <Route path="/texts/sql/chapter/6" element={<SQLChapter6 />} />

          <Route path="/blogs" element={<BlogsTop />} />
          <Route path="/blogs/article/1" element={<Article_1 />} />
          <Route path="/blogs/article/2" element={<Article_2 />} />
          <Route path="/blogs/article/3" element={<Article_3 />} />
          <Route path="/blogs/article/4" element={<Article_4 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
