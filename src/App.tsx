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
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { Cookies } from "./pages/Cookies";
import { StartHere } from "./pages/StartHere";
import { Topics } from "./pages/Topics";
import { Resources } from "./pages/Resources";
import { Tools } from "./pages/Tools";
import { CaseStudies } from "./pages/CaseStudies";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="start-here" element={<StartHere />} />
          <Route path="topics" element={<Topics />} />
          <Route path="resources" element={<Resources />} />
          <Route path="tools" element={<Tools />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="post/:slug" element={<Post />} />
          <Route path="blog/category/:slug" element={<Category />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
