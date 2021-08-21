import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Put component outside of switch for it to be displayed permenantly */}
      <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app_page">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
