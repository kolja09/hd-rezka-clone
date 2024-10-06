import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { Support } from "./pages/Support/Support";
import { store } from "./store/store";

import { ThemeProvider } from "./providers";
import { PageLayout } from "./layouts";
import { Actor, Home, Movie, Movies } from "./pages";

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
              <Route path="/support" element={<Support />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
