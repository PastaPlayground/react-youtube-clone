import "./SideBar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideBar = () => {
  return (
    <div className="sideBar">
      <SidebarRow Icon={HomeIcon} title="Home" selected />
      <SidebarRow Icon={ExploreIcon} title="Explore" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <SidebarRow Icon={SubscriptionsIcon} title="Shorts" />
      <hr />

      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpIcon} title="Liked videos" />
      <hr />

      <div className="subscriptions">
        <p className="contentHeader">SUBSCRIPTIONS</p>
        <SidebarRow Icon={ThumbUpIcon} title="Clever Programmer" />
        <SidebarRow Icon={ThumbUpIcon} title="Clever Programmer" />
        <SidebarRow Icon={ThumbUpIcon} title="Clever Programmer" />
        <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      </div>

      <hr />
      <div className="more">
        <p className="contentHeader">MORE FROM YOUTUBE</p>
        <SidebarRow Icon={ThumbUpIcon} title="Youtube Premium" />
        <SidebarRow Icon={ThumbUpIcon} title="Movies" />
        <SidebarRow Icon={ThumbUpIcon} title="Gaming" />
        <SidebarRow Icon={ThumbUpIcon} title="Live" />
        <SidebarRow Icon={ThumbUpIcon} title="Fashion &amp; Beauty" />
        <SidebarRow Icon={ThumbUpIcon} title="Sports" />
      </div>

      <hr />
      <div className="help">
        <SidebarRow Icon={ThumbUpIcon} title="Settings" />
        <SidebarRow Icon={ThumbUpIcon} title="Report history" />
        <SidebarRow Icon={ThumbUpIcon} title="Help" />
        <SidebarRow Icon={ThumbUpIcon} title="Send feedback" />
      </div>
    </div>
  );
};

export default SideBar;
