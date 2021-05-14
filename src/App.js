import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import RecommendedVideos from './components/RecommendedVideos'

function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <Header />

      <div className="app_page">
        {/* SIDEBAR */}
        <SideBar />

        {/* RECOMMENDED VIDEOS */}
        <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
