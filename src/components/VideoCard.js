import Avatar from "@material-ui/core/Avatar";
const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="VideoCard">
      <img className="videoCard_thumbnail" src={image} alt=""></img>
      <div className="video_Info">
        <Avatar className="video_avatar" alt={channel} src={channelImage} />
        <div class="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
