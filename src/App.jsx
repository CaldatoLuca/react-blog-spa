import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto lining-nums">
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/posts" element={<BaseLayout />}>
            <Route path=":slug" element={<Details />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
