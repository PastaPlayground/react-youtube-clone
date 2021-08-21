import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import "./ChannelRow.css";

function ChannelRow({
  channelName,
  channelImage,
  verified,
  subs,
  numOfVids,
  description
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" alt={channelName} src={channelImage} />
      <div className="channelRow_text">
        <h4>
            {channelName} {verified && <VerifiedIcon className="verifiedIcon"/>}
        </h4>
        <p>
            {subs} • {numOfVids}
        </p>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
}

export default ChannelRow;
