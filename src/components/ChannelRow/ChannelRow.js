import { useState } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "./ChannelRow.css";

function ChannelRow({
  channelName,
  channelImage,
  verified,
  subs,
  numOfVids,
  description,
}) {
  // initial state unsub
  const [subscribe, setSubscribe] = useState(false);
  return (
    <div className="channelRow">
      <Avatar
        className="channelRow_logo"
        alt={channelName}
        src={channelImage}
      />
      <div className="channelRow_text">
        <h4>
          {channelName} {verified && <VerifiedIcon className="verifiedIcon" />}
        </h4>
        <p>
          {subs} • {numOfVids}
        </p>
        <p>{description}</p>
      </div>

      {/* toggle between sub and unsub */}
      <button className="subscribeBtn" onClick={() => setSubscribe(!subscribe)}>
        {subscribe ? "SUBSCRIBED " : "SUBSCRIBE"}
      </button>
      <hr />
    </div>
  );
}

export default ChannelRow;
