import {Switch,Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header.jsx";
import SimpleBottomNavigation from "./components/navigation.jsx";
import Movies from "./pages/Movies.jsx";
import Trending from "./pages/Trending.jsx";
import Series from "./pages/Series.jsx";
import Search from "./pages/Search.jsx";
//import { Container } from "@material-ui/core";

import "./styles/app.scss"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
      <Routes>
        <Route path="/" component={Trending} exact />
        <Route path="/movies" component={Movies} exact />
        <Route path="/series" component={Series} exact />
        <Route path="/search" component={Search} exact />
      </Routes>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
