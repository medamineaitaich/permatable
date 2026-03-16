/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { Category } from "./pages/Category";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Newsletter } from "./pages/Newsletter";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="post/:slug" element={<Post />} />
          <Route path="blog/category/:slug" element={<Category />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
