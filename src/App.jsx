import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import PostsByTag from "./pages/PostsByTag";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto lining-nums">
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/posts" element={<BaseLayout />}>
            <Route path="details/:slug" element={<Details />} />
            <Route path=":tag" element={<PostsByTag />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
