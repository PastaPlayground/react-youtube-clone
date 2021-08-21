import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import "./VideoRow.css";

function VideoRow({
  videoThumbnail,
  title,
  channelName,
  views,
  timestamp,
  channelImage,
  description,
  verified,
}) {
  return (
    <div className="videoRow">
      <img
        className="videoRow_thumbnail"
        src={videoThumbnail}
        alt={videoThumbnail}
      ></img>
      <div className="videoRow_info">
        {/* <div className="videoRow_text"> */}
          <h3>{title}</h3>
          <p>
            {views} • {timestamp}
          </p>
        {/* </div> */}
        
        <div className="videoRow_text">
            <Avatar className="video_avatar" alt={channelName} src={channelImage} />
            <p>
                {channelName} {verified && <VerifiedIcon className="verifiedIcon"/>}
            </p>
        </div>
        <p className="video_description">{description}</p>
        
      </div>
    </div>
  );
}

export default VideoRow;
