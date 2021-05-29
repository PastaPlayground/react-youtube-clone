import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import './VideoCard.css'
const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      {/* <h2>Recommended</h2> */}
      <div className="recommendedVideos_video">
        <VideoCard
        title = "this is my title"
        views = "2.3M views"
        timestamp = "3 days ago"
        channelImage = "https://avatars.githubusercontent.com/u/58853560?v=4"
        channel = "alfredddo"
        image = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
        />
        <VideoCard
        title = "hi"
        views = "2.3M views"
        timestamp = "3 days ago"
        channelImage = "https://avatars.githubusercontent.com/u/58853560?v=4"
        channel = "alfredddo"
        image = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
        />
        <VideoCard
        title = "hi"
        views = "2.3M views"
        timestamp = "3 days ago"
        channelImage = "https://avatars.githubusercontent.com/u/58853560?v=4"
        channel = "alfredddo"
        image = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
        />
        <VideoCard
        title = "hi"
        views = "2.3M views"
        timestamp = "3 days ago"
        channelImage = "https://avatars.githubusercontent.com/u/58853560?v=4"
        channel = "alfredddo"
        image = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default RecommendedVideos;
