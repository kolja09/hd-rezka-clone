import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Actor, Home, Movie, Movies } from "./pages";
import { PageLayout } from "./layouts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Movies />} />
          <Route path="/films/:id" element={<Movie />} />
          <Route path="/actor" element={<Actor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
