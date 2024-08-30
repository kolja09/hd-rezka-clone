import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store/store";

import { Actor, Home, Movie, Movies } from "./pages";
import { ThemeProvider } from "./providers";
import { PageLayout } from "./layouts";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
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
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
