import Avatar from "@material-ui/core/Avatar";

// takes in 6 different props
// use destructure of props instead of using const
const VideoCard = ({
  videoThumbnail,
  title,
  channelName,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="VideoCard">
      <img className="videoCard_thumbnail" src={videoThumbnail} alt={videoThumbnail}></img>
      <div className="videoCard_info">
        <Avatar className="video_avatar" alt={channelName} src={channelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
